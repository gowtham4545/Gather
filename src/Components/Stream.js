import React, { useEffect, useState } from "react";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks, ClientConfig, IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack, } from "agora-rtc-react";

// define config for rtc engine
const config = ClientConfig = {
    mode: "rtc", codec: "vp8",
};


const appId = "4f5f1bf38e0c440f86d3b1df203195c8";
const token = null;
