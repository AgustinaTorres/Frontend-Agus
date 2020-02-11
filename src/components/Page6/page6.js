import React from 'react';
import ToolBar from '../ToolBar/toolBar';
import Footer from '../Footer/footer';
import PasswordModal from '../PasswordModal/passwordModal';
import { connect } from 'react-redux';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import ButtonExampleCircularSocial from '../SocialMedia/socialMedia2';
import { Icon, Image } from 'semantic-ui-react'
import {  Modal, Dimmer, Header } from 'semantic-ui-react'


class Page6 extends React.Component{
    state = {}

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })
   
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render(){
        const { active } = this.state
        return(
            
            <div className="bg-light" id="top">
                
                <ToolBar/>
                <ButtonExampleCircularSocial/>
                
                <div className= "container col-md-7 mb-5">
                    <div className=" column text-justify ">
                        <h1>Gracias {this.props.dataCustomer.name}!</h1>
                        <h3><Icon disabled size="large" name='check circle outline' />Tu reserva fue realizada con exito y tu cita comunicada al Profesional a cargo</h3> 
                        <Message positive className="mb-5 bg-white" size='small'>
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
                                    <div className="col-md-6 pr-0"><p > <Icon disabled name='euro sign' />{this.props.selectedDoctor.price}</p></div>
                                </div>
                                <hr></hr>
                            </div>
                        </Message>
                        <div className="row justify-content-center mb-4">
                            
                            <div className="mr-5">
                            <Icon.Group size='huge'>
                                <Icon  size='big' name='circle outline' />
                                <Icon  name='google play' />
                            </Icon.Group>
                            </div>
                            <div>
                            <Icon.Group size='huge'>
                                <Icon  size='big' name='circle outline' />
                                <Icon  name='app store ios' />
                            </Icon.Group>
                            </div>
                        </div>
                         
                        <h3 >Condiciones Cancelacion</h3>
                        <p>Podrás cancelar la reserva de forma gratuita hasta 1 día antes de la fecha de llegada. Pagarás el precio total de la reserva si cancelas el día antes de la fecha de llegada.</p>
                        <div>
                            <Button negative
                                content='Show'
                                onClick={this.handleOpen}
                                >Cancelar tu Cita</Button>
                            
                            <Dimmer active={active} onClickOutside={this.handleClose} page>
                            
                                <Header as='h2' icon inverted>
                                    <Icon name='warning sign' />
                                    Alerta!
                                    <Header.Subheader>Desea realmente cancelar su reserva?</Header.Subheader>
                                    <div className="row justify-content-center mt-3">
                                        <Button  size='tiny' className="mr-3"onClick={this.handleClose}><Icon className="ml-2" disabled name='close'/>Cerrar</Button>
                                        <Button size='tiny' negative><Icon className="ml-2" disabled name='check'/> CANCELAR</Button>
                                    </div>
                                </Header>
                            </Dimmer>
                        </div>

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


