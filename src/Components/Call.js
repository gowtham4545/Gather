import React from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AgoraVideoPlayer, createMicrophoneAndCameraTracks, createClient } from 'agora-rtc-react';

// AgoraRTC.createCameraVideoTrack


const Call = () => {
    const config = {
        mode: "rtc", codec: "vp8",
    };
    const appId = "4f5f1bf38e0c440f86d3b1df203195c8";
    const USER_ID = Math.floor(Math.random() * 1000000001);
    const client = createClient(config);

    const { search } = useLocation();
    const params = React.useMemo(() => new window.URLSearchParams(search), [search]);

    const channel = params.get('channelName');
    let token = params.get('token');
    token = token.replace('_', '/');
    // token='007eJxTYLjT9swqIcfKVdn8Ycxqrdh9GqJ7VXrEF3HtcPmucybJzkyBwSTNNM0wKc3YItUg2cTEIM3CLMU4yTAlzcjA2NDSNNnC8IhGSkMgI8PSagMWRgYIBPHZGXJTU0sy89IZGAD1sR3w'

    const [localTracks, setLocalTracks] = useState([]);
    const [users, setUsers] = useState([]);

    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === 'video') {
            setUsers((previousUsers) => [...previousUsers, user]);
        }

        if (mediaType === 'audio') {
            user.audioTrack.play()
        }

    }
    const handleUserLeft = (user) => {
        setUsers((previousUsers) =>
            previousUsers.filter((u) => u.uid !== user.uid)
        );
    }

    const useMicCamTrack = createMicrophoneAndCameraTracks()
    const { ready, tcks } = useMicCamTrack();
    useEffect(() => {
        client.on('user-published', handleUserJoined);
        client.on('user-left', handleUserLeft);
        client.join(appId, channel, token, USER_ID)
            .then((uid) => {
                Promise.all([
                    tcks,
                    uid
                ])
            })
            .then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks;
                setLocalTracks(tracks);
                setUsers((previousUsers) => [
                    ...previousUsers,
                    {
                        uid,
                        videoTrack,
                        audioTrack
                    },
                ]);
                client.publish(tracks);
            });

        return () => {
            for (let localTrack of localTracks) {
                localTrack.stop();
                localTrack.close();
            }
            client.off('user-published', handleUserJoined);
            client.off('user-left', handleUserLeft);
            client.unpublish(localTracks).then(() => client.leave());
        };
    }, []);




    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {users.map((user) => {
                    return (
                        <div style={{ margin: '10px', fontSize: '25px' }}>{user.uid}</div>
                    )
                })}

                {ready && <AgoraVideoPlayer videoTrack={tcks[1]} style={{ width: '100px', height: '100px' }} />}


            </div>

        </div>
    )
}

export default Call;
