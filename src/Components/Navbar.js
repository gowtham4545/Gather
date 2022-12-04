import React from 'react';
import { Container } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <div className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <Container maxW='container.2xl' minH={'10vh'}  >
                <h1>Gather</h1>
            </Container>
        </div>
    )
}
