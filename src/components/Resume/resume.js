import React from 'react';
import './resume.css';

const Resume = () => {
    return(
       <div className="backgroundResume">
           <div className="container pt-5 text-justify text-white">
                <h2>¿Que hacemos?</h2>
                <p>Somos la primera clínica 100% digital. Buscamos democratizar el acceso a la salud y facilitar el acceso para todos y en cualquier lugar.</p>
                <h2>Con SANA podrás</h2>
                <ul class="list-unstyled">
                        <ul>
                        <li>Reservar una cita 100% online con el profesional que tu decidas</li>
                        <li>Realizar videoconsultas desde donde tu lo decidas</li>
                        <li>Mantener un registro centralizado de tu historial medico</li>
                        </ul>
                </ul>
            </div>
       </div>
    )};

export default Resume;