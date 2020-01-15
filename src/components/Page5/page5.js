import React from 'react';
import ToolBar from '../ToolBar/toolBar';
import Footer from '../Footer/footer';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import ButtonExampleCircularSocial from '../SocialMedia/socialMedia2';
import {Checkbox,Form} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';


class Page5 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          termYcond:'',
          termYcondError:false,
          formError:false,
          redirect:false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    doPayment = ()=> {
        
        let error = false;
        
        if (this.state.termYcond === '') {
            this.setState({termYcondError: true})
            error = true
        } else {
            this.setState({termYcondError: false})
            error = false
        }

        if (error) {
            this.setState({formError: true})
            alert('Es necesario validar los terminos y condiciones para continuar')
            return
        } else {
        this.setState({formError: false})
        this.setState({redirect:true})
        }
    }

    handleChange2 = (e, { termYcond }) => this.setState({ termYcond })

    render(){
        return(
            <div className="bg-light" id="top">

                <ToolBar/>

                <ButtonExampleCircularSocial/>
                
                <div className= "container col-md-7">
                    <div className=" column text-justify ">
                        <h1>Hola {this.props.dataCustomer.name}!</h1>
                        <h2>Confirmacion de datos</h2>
                        <h4>Una vez validados los datos de la Cita, seleccione el boton:"confirmar pago".<br></br> Confirmado el pago se le dará acceso a nuestra APP a traves de un Usuario y Contraseña.</h4>
                        
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

                        <h3>Condiciones de Pago</h3>
                        <p>Este establecimiento acepta las siguientes formas de pago:
                        Solo pagos con tarjeta de credito</p>

                        <h3>Condiciones Cancelacion</h3>
                        <p>Podrás cancelar la reserva de forma gratuita hasta 1 día antes de la fecha de llegada. Pagarás el precio total de la reserva si cancelas el día antes de la fecha de llegada.</p>

                        <h3>Informacion Adicional</h3>
                        <p>El establecimiento no acepta pagos con tarjeta de crédito o débito. Solo se aceptan pagos en efectivo.
                         Para reservas de grupo y habitaciones privadas, el pago se debe efectuar mediante transferencia bancaria antes de la fecha de llegada. Una vez realizada la reserva, el establecimiento se pondrá en contacto con los huéspedes para darles la información necesaria.</p>
                        
                         <Form.Field
                            control={Checkbox}
                            label='*He leido las Condiciones de Pago y Cancelacion e Informacion Adicionals'
                            termYcond='3'
                            checked={this.state.termYcond === '3'}
                            onChange={this.handleChange2}
                            error={this.state.termYcondError}
                            className="mb-3"
                        />
                        <br></br>

                        <Link to="page2"><Button>Reprogramar Cita</Button></Link>
                        <Button positive onClick={this.doPayment}>CONFIRMAR PAGO</Button>
                        {this.state.redirect ? <div><Redirect to="/page6"></Redirect></div>: null}
                    </div>
                </div>

                <Footer/>

            </div>  
        )
    };
};

const mapStateToProps = (state ) => {
    return{
        selectedDoctor: state.doc.selectedDoctor,
        selectedHour:state.doc.selectedHour,
        selectedDay:state.doc.selectedDay,
        dataCustomer:state.doc.dataCustomer
    } 
};

export default connect(mapStateToProps) (Page5);


