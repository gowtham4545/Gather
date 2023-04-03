import React, { useState } from 'react';
import imgl1 from '../Images/3.png'
import imgl2 from '../Images/lp2.jpg'
import { Box, Button, Image, Input, Link, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Home() {
    const [matches, changeMatches] = useState(window.matchMedia("(max-width:600px)").matches);
    const [room, changeRoom] = useState(true);
    const [load, changeLoad] = useState(false);
    const [code, changeCode] = useState('')
    const [channelName, changeChannelName] = useState('livechat')

    const getChannel = e => {
        changeChannelName(e.target.value);
    }

    const generate = async (e) => {
        changeLoad(!load);
        const tk = await axios(`https://gowtham-api.vercel.app/generate?channelName=${channelName}`, {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let token = tk.data.token;
        // const url = new window.URL(`/${token}`,window.location.hostname)
        token=token.replace('/','_');
        changeCode(`./?channelName=${channelName}&token=${token}`);
        changeRoom(!room);
        
    }


    // const copy = () => {
    //     window.navigator.clipboard.writeText(code);
    // }
    return (
        !matches ? (
            <div id='body' style={{ backgroundImage: { imgl1 }, backgroundPosition: 'center' }}>
                <Box boxSize='sm' backgroundColor={'aliceblue'} height='auto' width='98.7vw' >
                    <Image className='homeImage' src={imgl2} alt='lkjll' zIndex={-1} />
                    <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', padding: '25px' }}>
                        <Image src={imgl1} alt='lkjll' zIndex={1} />
                        <div style={{ padding: '25px', display: 'block', justifyItems: 'center' }}>
                            {room ?
                                <div style={{ display: 'grid', alignItems: 'center' }}>
                                    <form style={{ display: 'grid', alignItems: 'center'}} onSubmit={generate} action={`./stream`} method='get'>
                                        <Text margin={'1'} fontFamily={"Playfair Display"} textAlign="center" fontWeight={"extrabold"} fontSize="3xl" fontStyle={"revert"}>Create a room</Text>
                                        <Input margin={'1'} width={'48'} className='cName' placeholder='Channel Name' name='channelName' onChange={getChannel} required />
                                        <Input display={'none'} name='token' value={code}></Input>
                                        <Button margin={'1'} colorScheme={'whatsapp'} type='button' onClick={generate} alignItems="center">Create</Button>
                                    </form>
                                </div>
                                :
                                <div style={{ display: 'grid', alignItems: 'center' }}>
                                    <Text fontFamily={'Playfair Display'} textAlign="center" fontWeight={"extrabold"} fontSize="3xl" fontStyle={"revert"}>Your room is Ready</Text>
                                    <div >
                                        <Link href={`./stream/${code}`} isExternal={false}>
                                            Click Here To Start <ExternalLinkIcon mx='2px' />
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <Text fontFamily="Raleway" textAlign="center" fontWeight="extrabold" fontSize="2xl">Contact Us</Text>
                    <Container display={'flex'} justifyContent='center' fontFamily={'Raleway'} fontWeight='bold' fontSize={'xx-large'} textAlign='center' >
                        <a style={{ margin: '10px' }} href='https://github.com/gowtham4545'><IoLogoGithub /></a>
                        <a style={{ margin: '10px' }} href='mailto:gowthamgopi444@gmail.com'><IoIosMail /></a>
                        <a style={{ margin: '10px' }} href='https://www.linkedin.com/in/gowtham4545/'><IoLogoLinkedin /></a>
                    </Container>
                </Box>
            </div>) :
            (<p style={{ display: 'flex', margin: 'auto', textJustify: 'center', fontFamily: 'Raleway' }}>This page is currently built only for laptop and desktop screens. Soon it will be made for mobile devices too. Kindly cooperate 😔.</p>)
    )
}
