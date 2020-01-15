import React, { Component } from 'react'
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    //Switch,
    //Route,
    Link
  } from "react-router-dom";
  import {
    Form,
    Input,
  } from 'semantic-ui-react';
  import { Redirect } from 'react-router-dom';



  class PhoneApproval extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userKey:"",
            redirect:false
        }}

    keyValidation = (llave) => llave === (this.state.userKey) ? this.setState({redirect:true}) : alert("codigo incorrecto");
    
   
    render(){
    return(
        <div className="text-justify">
            <div className="mt-5 mb-5 pt-3">
                <h2>Confirmá tu turno</h2>
            </div>
            <div>
                <p>Te acabamos de enviar un SMS con un código de 4 cifras para confirmar tu turno al {this.props.customer.areaCode} {this.props.customer.phone} </p>
                <Link>Modificar teléfono</Link>
            </div>
            <div className="mt-5">
                <h5>Inserta el codigo de 4 cifras</h5>
                <Form.Field
                control={Input}
                placeholder='Verifica el SMS'
                size='small'
                onChange={(e) => this.setState({userKey: e.target.value})}
                />
                <p className="mt-1">Tu SMS esta en camino pero a veces puede tardar hasta 2 minutos.¿Está tardando demasiado?</p>
                <Link>Enviar el SMS otra vez</Link>
            </div>
            <div>
                <div class="ui buttons mt-5">
                    <Link to="/page3"><button class="ui button">Volver</button></Link>
                    <div class=""></div>
                    <Link to ="/page5"> <button class="ui positive button" onClick={() => this.keyValidation(this.props.llave)}>Confirmar turno</button></Link>
                    
                    {this.state.redirect ?
                        <div class="ui buttons">
                            <Redirect to="/page5"></Redirect>
                        </div>
                        :  null
                    }

                </div>
            </div>
        </div>
        
    )
}}

const mapStateToProps = (state) => {
    return{
        llave:state.doc.llave,
    };
  }
  
export default connect(mapStateToProps) (PhoneApproval)
  

