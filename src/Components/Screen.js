import { Container, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';


function Screen() {
    // let tracks=window.navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(MediaStream=>{return MediaStream.getTracks()}).then(tracks=>tracks)
    const config = {
        mode: "rtc", codec: "vp8",
    };
    const appId = "4f5f1bf38e0c440f86d3b1df203195c8";
    const USER_ID = Math.floor(Math.random() * 1000000001);

    const { search } = useLocation();
    const params = React.useMemo(() => new window.URLSearchParams(search), [search]);

    const channel = params.get('channelName');
    let token = params.get('token');
    token = token.replace('_', '/');

    const [srcObject,setSourceObject]=useState();

    return (
        <div className='screen'>
            <Text fontSize={'2xl'} width={'container.lg'} margin={'auto'} color={'teal'} textAlign={'center'}><b>{channel}</b></Text>
            <Container scrollMargin={'1'} flexWrap={'wrap'} flexDirection={'row'}  justifyContent={'center'} backgroundColor={'ButtonText'} borderRadius={'2xl'} borderColor={'facebook.500'} display={'flex'} borderWidth={1} maxW={'6xl'} maxH={'sm'} overflowY={'scroll'} scrollBehavior={'unset'} margin={'10'} marginBottom={0}>
                {/* {appId}, {USER_ID}, {channel}, */}
                <VideoPlayer />
                <VideoPlayer />
                <VideoPlayer />
                <VideoPlayer />
                <VideoPlayer />
                <VideoPlayer />
                <VideoPlayer />
                <VideoPlayer />
                <Container maxW={'container.lg'}>
                    {token}
                    {/* {tracks} */}
                </Container>
            </Container>
        </div>
    )
}

export default Screen;
