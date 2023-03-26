import React from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useEffect } from 'react';
import { useState } from 'react';

const token = '007eJxTYJgfXj2RReXHrA0Li1nCK3WNDRR/mN3/e3mq5upl3U9nFE1SYDBJM00zTEoztkg1SDYxMUizMEsxTjJMSTMyMDa0NE22sDlwJ7khkJEhWWMfKyMDBIL4bAzpiSUZqUUMDACiFSCw';
const appId = "4f5f1bf38e0c440f86d3b1df203195c8";
const channel = 'gather';

const client = AgoraRTC.createClient({
    mode: "rtc", codec: "vp8",
});

const Call = () => {
    const [users,setUsers]=useState([]);

    const handleUserJoined = () => {

    }
    const handleUserLeft = () => {

    }

    useEffect(() => {
        // client.on('user-published', handleUserJoined);
        // client.on('user-left', handleUserLeft);
        client.join(appId, channel, token, null)
            .then((uid) => {
                Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
            }).then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks;
                setUsers((previousUsers) => [
                    ...previousUsers,
                    {
                        uid,
                        videoTrack
                    }])
                client.publish(tracks);
            })
    })
    return (
        <div>
            video panel
            {users.map((user)=>{
                <div key={user.uid}>{user.uid}</div>
            })}
        </div>
    )
}

export default Call;
