import React from 'react';
import './aboutUs.css';
import Resume from './../Resume/resume';
import OurTeam from '../OurTeam/ourTeam.js';


const AboutUs = () => {
    return(
        <div>
            <Resume/>
            <div className="container mt-5 mb-5">
                <h4>Nuestros Profesionales</h4>
                <h4>Comentarios de nuestros pacientes</h4>
            </div>
            <OurTeam/>
        </div>
    )};

export default AboutUs;