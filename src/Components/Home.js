import React from 'react';
import img1 from './pexels-fauxels-3183183.jpg';
import { Box, Image, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';

export default function Home() {
    return (
        <div>
            <Box boxSize='xxl'>
                <Image src={img1} alt='lkjll' />
                <Container top={'40vh'} minW={'container.xl'} zIndex={2} position='absolute' centerContent >
                    <Text fontSize='5xl' color={'black'}>Let's Gather</Text>
                </Container>
            </Box>

        </div>
    )
}
