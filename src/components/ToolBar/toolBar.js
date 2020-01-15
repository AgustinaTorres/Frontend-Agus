import React from 'react';
import './toolBar.css';
import sana from './sana.jpeg';
import {
  BrowserRouter as //Router,
  //Switch,
  //Route,
  Link
} from "react-router-dom";



const ToolBar = () => {
    return(
 
        <div className="backgroundToolBar container justify-content-around " >

           <nav className="navbar sticky-top navbar navbar-expand-lg navbar-light ">
              <Link to="/"><img src={sana} alt="" className="img-fluid"  ></img></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                {/*PROBLEMA: LINKS*/}
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                   <a className="nav-link " href="#">Inicio<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Servicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Cliente</a>
                  </li>
                </ul>


                <div className="row col-md-2 mr-5 align-items-center">
                <Link to=""><i className="fab fa-2x fa-whatsapp wsp mr-2"></i></Link>
                <a href="https://wa.me//34622854287">+34-622854287 </a>
                </div>

                <button className="ui button">Soy Profesional</button>

              </div>

          </nav>

        </div>
       
        
    )}

export default ToolBar;
