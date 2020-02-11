import React from 'react';
import './home.css';
import SearchButton3 from '../SearchButton/searchButton3';


class Home extends React.Component{

  
    render(){

    return(
        <div className="container justify-content-center mt-3">
            
            <h1 className="text-dark">Tu clínica digital estes donde estes</h1>
            {/* <h5 className="mb-2">Atencion por video consulta </h5> */}
            <h4>Reserva tu cita ahora</h4>

            <SearchButton3/>

        </div>
    )}};


export default Home


