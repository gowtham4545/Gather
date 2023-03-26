import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks, ClientConfig, IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack, } from "agora-rtc-react";

// define config for rtc engine
const config = {
    mode: "rtc", codec: "vp8",
};


const appId = "4f5f1bf38e0c440f86d3b1df203195c8";

const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

// const ChannelForm = (props) => {
//     const { setInCall, setChannelName } = props;

//     return (
//         <form className="join">
//             {config.appId === '' && <p style={{ color: 'red' }}>Please enter your Agora App ID in App.tsx and refresh the page</p>}
//             <input type="text"
//                 placeholder="Enter Channel Name"
//                 onChange={(e) => setChannelName(e.target.value)}
//             />
//             <button onClick={(e) => {
//                 e.preventDefault();
//                 setInCall(true);
//             }}>
//                 Join
//             </button>
//         </form>
//     );
// };


// const Videos = (props) => {
//     const { users, tracks } = props;

//     return (
//         <div>
//             <div id="videos">
//                 <AgoraVideoPlayer className='vid' videoTrack={tracks[1]} style={{ height: '95%', width: '95%' }} />
//                 {users.length > 0 &&
//                     users.map((user) => {
//                         if (user.videoTrack) {
//                             return (
//                                 <AgoraVideoPlayer className='vid' videoTrack={user.videoTrack} style={{ height: '95%', width: '95%' }} key={user.uid} />
//                             );
//                         } else return null;
//                     })}
//             </div>
//         </div>
//     );
// };

// export const Controls = (props) => {
//     const client = useClient();
//     const { tracks, setStart, setInCall } = props;
//     const [trackState, setTrackState] = useState({ video: true, audio: true });

//     const mute = async (type) => {
//         if (type === "audio") {
//             await tracks[0].setEnabled(!trackState.audio);
//             setTrackState((ps) => {
//                 return { ...ps, audio: !ps.audio };
//             });
//         } else if (type === "video") {
//             await tracks[1].setEnabled(!trackState.video);
//             setTrackState((ps) => {
//                 return { ...ps, video: !ps.video };
//             });
//         }
//     };

//     const leaveChannel = async () => {
//         await client.leave();
//         client.removeAllListeners();
//         tracks[0].close();
//         tracks[1].close();
//         setStart(false);
//         setInCall(false);
//     };

//     return (
//         <div className="controls">
//             <p className={trackState.audio ? "on" : ""}
//                 onClick={() => mute("audio")}>
//                 {trackState.audio ? "MuteAudio" : "UnmuteAudio"}
//             </p>
//             <p className={trackState.video ? "on" : ""}
//                 onClick={() => mute("video")}>
//                 {trackState.video ? "MuteVideo" : "UnmuteVideo"}
//             </p>
//             {<p onClick={() => leaveChannel()}>Leave</p>}
//         </div>
//     );
// };

// const VideoCall = (props) => {
//     const { token } = useParams();
//     const { setInCall, channelName } = props;
//     const [users, setUsers] = useState([]);
//     const [start, setStart] = useState(false);
//     const client = useClient();
//     const { ready, tracks } = useMicrophoneAndCameraTracks();
//     useEffect(() => {
//         // function to initialise the SDK
//         let init = async (name) => {
//             console.log("init", name);
//             client.on("user-published", async (user, mediaType) => {
//                 await client.subscribe(user, mediaType);
//                 console.log("subscribe success");
//                 if (mediaType === "video") {
//                     setUsers((prevUsers) => {
//                         return [...prevUsers, user];
//                     });
//                 }
//                 if (mediaType === "audio") {
//                     user.audioTrack?.play();
//                 }
//             });

//             client.on("user-unpublished", (user, type) => {
//                 console.log("unpublished", user, type);
//                 if (type === "audio") {
//                     user.audioTrack?.stop();
//                 }
//                 if (type === "video") {
//                     setUsers((prevUsers) => {
//                         return prevUsers.filter((User) => User.uid !== user.uid);
//                     });
//                 }
//             });

//             client.on("user-left", (user) => {
//                 console.log("leaving", user);
//                 setUsers((prevUsers) => {
//                     return prevUsers.filter((User) => User.uid !== user.uid);
//                 });
//             });

//             await client.join(appId, name, token, null);
//             if (tracks) await client.publish([tracks[0], tracks[1]]);
//             setStart(true);

//         };

//         if (ready && tracks) {
//             console.log("init ready");
//             init(channelName);
//         }

//     }, [channelName, client, ready, tracks]);
//     return (
//         <div className="App">
//             {ready && tracks && (
//                 <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
//             )}
//             {start && tracks && <Videos users={users} tracks={tracks} />}
//         </div>
//     );
// };






// const Stream = (props) => {
//     const [inCall, setInCall] = useState(false);
//     const [channelName, setChannelName] = useState("");
//     let { token } = useParams();
//     console.log(token);
//     return (
//         <div>
//             <h1 className="heading">Agora RTC NG SDK React Wrapper</h1>
//             {inCall ? (
//                 <VideoCall setInCall={setInCall} channelName={channelName} />
//             ) : (
//                 <ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
//             )}
//         </div>
//     );
// };

// export default Stream;

const Stream = () => {
    const token = '007eJxTYJhgx1iT2RHPtd8zf27l9ultmWbsqVUC9QwJ5Tz+gbKnvyowmKSZphkmpRlbpBokm5gYpFmYpRgnGaakGRkYG1qaJltcErua3BDIyPD+7G5mRgYIBPE5GHIyy1KTMxJLGBgA5aYfFQ==' ;

    console.log(token);

    useEffect(()=>{
        // useClient.on
    })

    return(
        <>
            video panel
        </>
    );

}
export default Stream;