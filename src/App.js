import './App.css';
import Home from './Components/Home.js';
import {  Route, Routes } from 'react-router-dom';
import Stream from './Components/Stream';
import Call from './Components/Call';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/stream' element={<Call/>}/> */}
            </Routes>
        </div>
    );
}

export default App;
