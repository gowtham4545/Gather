import './App.css';
import Home from './Components/Home.js';
import {  Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
