import React from 'react';
import ToolBar from '../ToolBar/toolBar';
import Footer from '../Footer/footer';
import PasswordModal from '../PasswordModal/passwordModal';
import { connect } from 'react-redux';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import ButtonExampleCircularSocial from '../SocialMedia/socialMedia2';
import { Icon } from 'semantic-ui-react'
import {  Modal } from 'semantic-ui-react'



class Page6 extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render(){
        return(
            
            <div className="bg-light" id="top">
                
                <ToolBar/>
                <ButtonExampleCircularSocial/>
                
                <div className= "container col-md-7">
                    <div className=" column text-justify ">
                        <h1>Gracias{this.props.dataCustomer.name}!</h1>
                        <h3><Icon disabled size="large" name='check circle outline' />Tu pago fue realizado con exito y tu cita comunicada al Profesional a cargo</h3> 
                        <Message className="bg-white" size='tiny'>
                            <div className="container mt-2" >
                                <div className = "row align-items-center ">
                                    <div className="col-md-6 text-justify"><Message.Header>Paciente</Message.Header></div>
                                    <div className="col-md-6 pr-0"><p >{this.props.dataCustomer.name + " " + this.props.dataCustomer.lastName }</p></div>
                                </div>
                                <hr></hr>
                                <div className = "row align-items-center ">
                                    <div className="col-md-6 text-justify"><Message.Header> Profesional</Message.Header></div>
                                    <div className="col-md-6 pr-0"><p >{this.props.selectedDoctor.full_name}</p></div>
                                </div>
                                <hr></hr>
                                <div className = "row align-items-center ">
                                    <div className="col-md-6 text-justify"><Message.Header> Fecha Cita</Message.Header></div>
                                    <div className="col-md-6 pr-0"><p >{this.props.selectedDay}</p></div>
                                </div>
                                <hr></hr>
                                <div className = "row align-items-center ">
                                    <div className="col-md-6 text-justify"><Message.Header> Hora Cita</Message.Header></div>
                                    <div className="col-md-6 pr-0"><p >{this.props.selectedHour}</p></div>
                                </div>
                                <hr></hr>
                                <div className = "row align-items-center ">
                                    <div className="col-md-6 text-justify"><Message.Header> Precio Cita</Message.Header></div>
                                    <div className="col-md-6 pr-0"><p >{this.props.selectedDoctor.price}</p></div>
                                </div>
                                <hr></hr>
                            </div>
                        </Message>

                        <Button.Group basic size='small'>
                            <Button icon='file' />
                            <Button icon='save' />
                            <Button icon='upload' />
                            <Button icon='download' />
                        </Button.Group>
                         <Button negative className="ml-3">Cancelar tu Cita</Button>

                        
                         <Message success className=" col-md-6 justify-content-center " size='tiny'>
                             <h4>Guardate esta informacion en el bolsillo</h4>
                             <p>Con nuestra app GRATIS no necesitas datos, WiFi, ni impresora.</p>
                             < PasswordModal />
                             <Button positive>Descargar APP</Button>
                             <p>Disponible para iPhone, iPad y Android</p>
                            
                             
                         </Message>
                         
                        <h3>Condiciones Cancelacion</h3>
                        <p>Podrás cancelar la reserva de forma gratuita hasta 1 día antes de la fecha de llegada. Pagarás el precio total de la reserva si cancelas el día antes de la fecha de llegada.</p>
                        <h3>Informacion Adicional</h3>
                        <p>El establecimiento no acepta pagos con tarjeta de crédito o débito. Solo se aceptan pagos en efectivo.
                         Para reservas de grupo y habitaciones privadas, el pago se debe efectuar mediante transferencia bancaria antes de la fecha de llegada. Una vez realizada la reserva, el establecimiento se pondrá en contacto con los huéspedes para darles la información necesaria.
                        </p>
                    </div>
                </div>

                <Footer/>
                
            </div>  
           
        )};
};

const mapStateToProps = (state ) => {
    return{
        selectedDoctor: state.doc.selectedDoctor,
        selectedHour:state.doc.selectedHour,
        selectedDay:state.doc.selectedDay,
        dataCustomer:state.doc.dataCustomer
    } 
};

export default connect(mapStateToProps) (Page6);


