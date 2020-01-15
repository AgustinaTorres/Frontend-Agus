import React from 'react';
import './footer.css';
import sana from './sana.jpeg';
import {
    BrowserRouter as //Router,
    //Switch,
    //Route,
    Link
  } from "react-router-dom";

const Footer = () => {
    return(
    <div className="container-fluid bg-light mt-5 border">
    <div className="container">
        <div className="row justify-content-between pt-5 pb-5">
            <div className="column col-md-3 text-justify">
                <h5>SERVICIO</h5>
                <p><Link to="" className="link">Privacidad</Link></p>
                <p><Link to="" className="link">Quienes Somos</Link></p>
                <p><Link to="" className="link">Contacto</Link></p>
                <p><Link to="" className="link">Empleo</Link></p>
                
                
            </div>
            <div className="column col-md-3 text-justify">
                <h5>PARA LOS PACIENTES</h5>
                <p><Link to="" className="link">Doctores</Link></p>
                <p><Link to="" className="link">Pregunta al especialista</Link></p>
                <p><Link to="" className="link">Enfermedades</Link></p>
                <p><Link to="" className="link">Servicios</Link></p>
                <p><Link to="" className="link">Preguntas frecuentes</Link></p>
        
            </div>
            <div className="column col-md-3 text-justify">
                <h5>PARA PROFESIONALES</h5>
                <p><Link to="" className="link">Para especialistas</Link></p>
                <p><Link to="" className="link">Recursos</Link></p>
                <p><Link to="" className="link">Widget para su web</Link></p>
                <p><Link to="" className="link">Condiciones del perfil Premium</Link></p>
             </div>
            <div className="column col-md-3 justify-content-center">
                <img src={sana} alt=""width="130px" height="auto" className="logo img-fluid" ></img>
            </div>
        </div>
    </div>  
    </div>
    )};

export default Footer;