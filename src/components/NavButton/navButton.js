import React from 'react';
import './navButton.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  export default class NavButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  
            speciality:["Psicologia","Nutricion", "Cirujia", "Odontología"],
            selected:"Especialidad"
        };
    
    }

    handleSpeciality = (esp) =>{
        return(
            this.setState({selected:esp})
        )
    }

    render(){
        console.log(this.state);
        console.log(this.state.selected);
       
        return(
                <div className=" container pt-5"> 
                    <div className="row justify-content-center">

                        <div className=" col-md-4 input-group ">
                            <div className="input-group-prepend">
                                <button className=" btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div className="dropdown-menu">
                                {this.state.speciality.map((esp) => {
                                return  <button onClick={() => this.handleSpeciality(esp)} className="dropdown-item" alt="">{esp}</button>
                                })}

                                </div>
                            </div>
                            <input type="text" className=" form-control" aria-label="Text input with dropdown button" placeholder={this.state.selected}/>
                        </div>

                        <div className="col-md-2">
                        <Link to={'/page2'}><button type="button" className="ui button">Buscar</button></Link>
                        </div>
                    </div>
                </div>
            
            
        )
    }
};

