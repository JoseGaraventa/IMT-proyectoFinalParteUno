import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Error from './Error';
import Contacto from './Contacto';
import Inicio from "./Inicio"
import Pie from './Pie';
import Carrito from './Carrito';


const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                
                <Route path="/" element= {<Inicio />}></Route>
                <Route path="/carrito" element= {<Carrito />}></Route>
                <Route path="/contacto" element= {<Contacto />}></Route>
                <Route path="/*" element= {<Error />}></Route>


            </Routes>
            <Pie />
        </Router>
    );
}

export default Rutas;