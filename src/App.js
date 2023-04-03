import './App.css';
import Home from './Components/Home.js';
import {  Route, Routes } from 'react-router-dom';
import Call from './Components/Call';
import Screen from './Components/Screen';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/stream' element={<Call/>}/> */}
                <Route path='/stream' element={<Screen/>}/>
            </Routes>
        </div>
    );
}

export default App;
