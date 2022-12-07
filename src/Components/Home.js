import React from 'react';
import img1 from './pexels-fauxels-3183183.jpg';
import img2 from './pexels-fauxels-3184287.jpg';
import { Box, Image, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';

export default function Home() {
    return (
        <div id='body' style={{ height: '100vh', width: '100vw' }}>
            <Box boxSize='sm' top={'300'} borderRadius='xl' right='500' position={'absolute'} height='auto' >
                <Image className='homeImage' src={img1} alt='lkjll' border={'3px white'} borderRadius={'xl'} />
            </Box>
            <Box boxSize='sm' top={'40px'} borderRadius='xl' right='10' position={'absolute'} height='auto' >
                <Image className='homeImage' src={img2} alt='lkjll' border={'3px white'} borderRadius={'xl'} />
            </Box>
            <Container top={'20vh'} minW={'container.xl'} width={'auto'} zIndex={2} position='absolute' left={ '10'} >
                <Text className='font-sans title' textShadow={'1px 1px #ffffff'} fontSize='8xl' color={'aliceblue'} >Let's Gather</Text>
                <Text className='font-sans title' fontFamily={'mono'} textShadow={'1px 1px #ffffff'} fontSize='3xl' color={'aliceblue'} >One platform to connect</Text>
            </Container>

        </div>
    )
}
