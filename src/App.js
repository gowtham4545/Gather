import './App.css';
import Home from './Components/Home.js';
import {  Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Stream from './Components/Stream';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                {/* <Route path='/stream' element={<Stream/>}/> */}
            </Routes>
        </div>
    );
}

export default App;
