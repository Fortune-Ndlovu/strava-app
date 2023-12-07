// Fundamental for creating components, managing state, and handling side effects.
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Training from './pages/Training';
import Explore from './pages/Explore';
import Challenges from './pages/Challenges';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
   
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/training" element={<Training/>}></Route>
                <Route path="/explore" element={<Explore/>}></Route>
                <Route path="/challenges" element={<Challenges/>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
