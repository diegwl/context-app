import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

import Navbar from './components/Navbar'

function RouterApp() {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/products" element={ <Products /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;