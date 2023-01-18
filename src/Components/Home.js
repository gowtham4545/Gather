import React,{useState} from 'react';
// import img1 from './pexels-fauxels-3183183.jpg';
// import img2 from './pexels-fauxels-3184287.jpg';
import imgl1 from '../Images/lp1.jpg'
import imgl2 from '../Images/lp3.jpg'
import { Badge, Box, Button, Image,  Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
import { CopyIcon  } from '@chakra-ui/icons';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
// import { Link } from 'react-router-dom';
// import { Link as Rlink } from '@reach/router'

export default function Home() {
    const [matches,changeMatches]=useState( window.matchMedia("(max-width:600px)").matches);
    const [room,changeRoom]=useState(true);
    const [load,changeLoad]=useState(false);
    const [code,changeCode]=useState('jhgjkhfhjgdgffxhvkjgjygtfhfhgf675674563667tyhfhjfgghkgvfjhvbncgfcxxgfxgdfgdghfjjmnbnmvnbcbvsxfds546387yf6rftygtgghhnccj')
    const generate=()=>{
        changeLoad(!load);
        changeRoom(!room);
    }
    const copy=()=>{
        window.navigator.clipboard.writeText(code);
    }
    return (
        !matches?(
        <div id='body' style={{ backgroundImage:{imgl1},backgroundPosition:'center'}}>
            <Box boxSize='sm'   backgroundColor={'aliceblue'}   height='auto' width='98.7vw' >
                <Image className='homeImage' src={imgl2} alt='lkjll' zIndex={-1} />
                <Input size={'lg'} backgroundColor='#dce5ec' width='xl' variant='outline' placeholder='Type the Passcode' position={'absolute'} zIndex={1} right='56' top={'1200px'}/>
                <Button fontFamily='Raleway' backgroundColor={'#dce5ec'} variant='outline' position={'absolute'} right='738px' top='1260px'>Join</Button>
                {room?
                <Button isLoading={load} backgroundColor={'#dce5ec'} onClick={generate} variant='outline' position={'absolute'} left='20' top='1600px'>Generate Passcode</Button>
                :<Container border={'3px solid'} boxShadow='md' position='absolute' backgroundColor={'#dce5ec'} left='20' top='1600px' borderRadius={'3xl'} padding='20px' scrollBehavior={'auto'} overflowWrap={'anywhere'}>
                    <Badge colorScheme='green'> Generated </Badge>
                    <Button leftIcon={<CopyIcon/>} float='right' onClick={copy}/><br/>
                    <div style={{fontFamily:'Raleway',marginTop:'10px'}}>Your Generated code is:</div> <br/>
                    <div style={{fontFamily:'Lato',width:'250px',color:'grey'}}>{code}</div><br/>
                    <Button variant='solid' border='2px solid' fontFamily='Raleway' >Start meeting</Button>
                </Container>
            }
            <Container fontFamily={'Raleway'} fontWeight='bold' fontSize={'xx-large'} position='absolute' top={'2000px'} left='80px' textAlign='center' >Contact Us</Container>
            <Container display={'flex'} justifyContent='center' fontFamily={'Raleway'} fontWeight='bold' fontSize={'xx-large'} position='absolute' top={'2100px'} left='80px' textAlign='center' >
                <a style={{margin:'10px'}} href='https://github.com/gowtham4545'><IoLogoGithub/></a>
                <a style={{margin:'10px'}} href='mailto:gowthamgopi444@gmail.com'><IoIosMail/></a>
                <a style={{margin:'10px'}} href='https://www.linkedin.com/in/gowtham4545/'><IoLogoLinkedin/></a>
            </Container>
            </Box>
        </div>):
        (<p style={{display:'flex',margin:'auto',textJustify:'center',fontFamily:'Raleway'}}>This page is currently built only for laptop and desktop screens. Soon it will be made for mobile devices too. Kindly cooperate 😔.</p>)
    )
}
