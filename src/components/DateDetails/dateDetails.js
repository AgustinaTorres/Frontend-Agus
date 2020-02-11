import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import DoctorData from '../DoctorData/doctorData';
  

const DateDetails = (props) => {
    
    return(
        <div className="mt-5 pt-4  pb-5 column bg-white pr-5 pl-5 border">

            <h3> Detalles de la visita</h3>
            <div className="row">
                <div className="text-justify">
                    <h5>Fecha del Turno</h5>
                    {props.day}
                    <p></p>
                    <h5>Hora del turno</h5>
                    {props.hour}
                    
                    <h5>Valor de la consulta</h5>
                    <p><i class="fas fa-euro-sign"></i>{props.info.price}</p>
                    <h5>Profesional</h5>
                </div>

                <div className="row pl-5 align-items-center">
                   <Link to="/page2"><button class=" ui negative button">Modificar cita</button></Link>
                </div>

            </div>
 
            
            <DoctorData doctor={props.info}/>

        </div>
    )
};


export default DateDetails;


