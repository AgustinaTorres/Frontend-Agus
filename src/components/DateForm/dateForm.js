import React, { Component } from 'react'
import {
  //Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Message,
  Icon
} from 'semantic-ui-react';
import {
    BrowserRouter as  Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Redirect } from 'react-router-dom';
  import {connect} from 'react-redux';
  import * as actionCreators from '../../store/actions/actions';
  import { Button, Dimmer, Header } from 'semantic-ui-react'
  

const options = [
  { key: 'ter', text: 'Terapia', value: 'terapia' },
  { key: 'due', text: 'Duelo', value: 'duelo' },
  { key: 'par', text: 'Pareja', value: 'pareja' },
  { key: 'sof', text: 'Social/Familiar', value: 'social/familiar' },
  { key: 'aut', text: 'Autoestima/Desarrollo personal', value: 'autoestima/desarrollo personal' },
  { key: 'dep', text: 'Depresion', value: 'depresion' },
  { key: 'lab', text: 'Laboral Académico', value: 'laboral académico' },
  { key: 'sex', text: 'Sexual', value: 'sexual' },
  { key: 'ans', text: 'Ansiedad', value: 'ansiedad' },
  { key: 'otro', text: 'Otro', value: 'otro' },

]

class FormExampleFieldControl extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name: '',
          lastName: '',
          birthday:'',
          areaCode:'',
          phone: '',
          email: '',
          value:'',
          motivoVisita:'',
          otroMotivo:'',
          comentario:'',
          termYcond:'',

          nameError: false,
          lastNameError: false,
          birthdayError: false,
          areaCodeError: false,
          phoneError:false,
          emailError:false,
          valueError:false,
          motivoVisitaError:false,
          otroMotivoError:false,
          termYcondError:false,

          formError:false,
          complete: false,
        }
    }
    
  submitForm = ()=> {
      
      let error = false;
  
      if (this.state.name === '') {
        this.setState({nameError: true})
         error = true
      } else {
        this.setState({nameError: false})
        error = false
      }

      if (this.state.lastName === '') {
        this.setState({lastNameError: true})
        error = true
      } else {
        this.setState({lastNameError: false})
        error = false
      }

      if (this.state.birthday === '') {
        this.setState({birthdayError: true})
        error = true
      } else {
        this.setState({birthdayError: false})
        error = false
      }
      
      if (this.state.email === '') {
          this.setState({emailError: true})
          error = true
        } else {
          this.setState({emailError: false})
          error = false
        }

      if (this.state.areaCode === '') {
        this.setState({areaCodeError: true})
        error = true
      } else {
        this.setState({areaCodeError: false})
        error = false
      }
      
      if (this.state.phone === '') {
          this.setState({phoneError: true})
          error = true
        } else {
          this.setState({phoneError: false})
          error = false
        }
 
      if (this.state.value === '') {
        this.setState({valueError: true})
        error = true
      } else {
        this.setState({valueError: false})
        error = false
      }

      if (this.state.motivoVisita === '') {
        this.setState({motivoVisitaError: true})
        error = true
      } else {
        this.setState({motivoVisitaError: false})
        error = false
      }

      if (this.state.otroMotivo === '') {
        this.setState({otroMotivoError: true})
        error = true
      } else {
        this.setState({otroMotivoError: false})
        error = false
      }
      
      if (this.state.termYcond === '') {
        this.setState({termYcondError: true})
        error = true
      } else {
        this.setState({termYcondError: false})
        error = false
      }

      console.log("horaaaaaa" , error)
      console.log("nameerrroooooor", this.state.nameError)
      
      // if (this.state.nameError === false && 
      //    this.state.lastNameError=== false && 
      //    this.state.areaCodeError=== false && 
      //    this.state.phoneError=== false &&
      //    this.state.emailError=== false &&
      //    this.state.valueError=== false && 
      //    this.state.motivoVisitaError=== false &&
      //    this.state.termYcondError=== false){

      //   error = false

      // }else{
      //     error=true
      // }

      console.log("digamooooo", error)
      
      if (error) {
        this.setState({formError: true})
        alert('Complete los campos obligatorios')
        return
      } else {
        this.setState({formError: false})
        this.setState({complete: true})
        this.props.onSaveDataCostumer(this.state)
        this.props.onGenerateKey("correcto")
      }

  }

  handleChange = (e, { value }) => this.setState({ value })
  handleChange2 = (e, { termYcond }) => this.setState({ termYcond })



  render() {
    return (
        <div className="mb-3">
            <div className="mt-5 mb-3 pt-3">
                <h2 className="text-justify">Reserva de Turnos</h2>
            </div>

            <Message
            attached
            header='Formulario de inscripcion'
            content='*Campos obligatorios'
            className='text-justify mb-4'
            />

        <Form error={this.state.formError}>

            <Form.Group widths='equal'>
              <Form.Field
                  control={Input}
                  label='Nombre *'
                  placeholder='Ej: Agustina'
                  onChange={(e) => this.setState({name: e.target.value})}
                  error={this.state.nameError}
                  
                
              />
              <Form.Field
                  control={Input}
                  label='Apellido *'
                  placeholder='Ej: Torres Moray'
                  onChange={(e) => this.setState({lastName: e.target.value})}
                  error={this.state.lastNameError}
              />
              <Form.Field
                  control={Input}
                  label='Fecha de Nacimiento *'
                  placeholder='Ej: 13/08/1991'
                  onChange={(e) => this.setState({birthday: e.target.value})}
                  error={this.state.birthdayError}
              />
            </Form.Group>

            <Form.Group widths='equal'>
              <Form.Field
                  control={Input}
                  label='Código de área *'
                  placeholder='Ej: +54-381'
                  onChange={(e) => this.setState({areaCode: e.target.value})}
                  error={this.state.areaCodeError}
                  
              />
              <Form.Field
                  control={Input}
                  label='Número de teléfono movil *'
                  placeholder='Ej: 154049471'
                  onChange={(e) => this.setState({phone: e.target.value})}
                  error={this.state.phoneError}
              />
            </Form.Group>

            <Form.Field
                control={Input}
                label='Correo electrónico *'
                placeholder='Ej:atmoray@gmail.com'
                onChange={(e) => this.setState({email: e.target.value})}
                error={this.state.emailError}
            />


            <Form.Group inline>
            <label>¿Para quien es el turno? *</label>
              <Form.Field
                  control={Radio}
                  label='Para mi'
                  value='1'
                  checked={this.state.value === '1'}
                  onChange={this.handleChange}
                  error={this.state.valueError}
          
              />
              <Form.Field
                  control={Radio}
                  label='Para otra persona'
                  value='2'
                  checked={this.state.value === '2'}
                  onChange={this.handleChange}
                  error={this.state.valueError}
                  
              />
            </Form.Group>

            <Form.Field
                control={Select}
                label='Motivo de la visita'
                options={options}
                selection
                placeholder='Seleccione la problemática/motivo de visita' 
                onChange={(e,data) => this.setState({motivoVisita: data.value})} 
                error={this.state.motivoVisitaError}
            />

            {this.state.motivoVisita === 'otro' ? 
            <Form.Field
            control={TextArea}
            label='Otro motivo'
            placeholder='Cual es su otro motivo de visita?'
            onChange={(e) => this.setState({otroMotivo: e.target.value})}
            error={this.state.otroMotivoError}
          /> :  null
          
          }
            
            

            <Form.Field
            control={TextArea}
            label='Comentario para el profesional'
            placeholder='Puedes añadir cualquier comentario que sea de interes para el profesional...'
            onChange={(e) => this.setState({comentario: e.target.value})}
            />

            <Form.Field
            control={Checkbox}
            label='*Acepto los terminos y condiciones la política de privacidad y el tratamiento de mis datos'
            termYcond='3'
            checked={this.state.termYcond === '3'}
            onChange={this.handleChange2}
            error={this.state.termYcondError}
            />

            {!this.state.complete ?
                <div class="ui buttons">
                  <Link to="/page2"><button className="mr-2 ui button">Volver</button></Link>
                  <Link> <button class="ui positive button" onClick={this.submitForm}>Siguiente</button></Link>
                </div>
                :  
                <div>

                <Dimmer active={true} onClickOutside={this.handleClose} page>
                  {/* <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      <Message.Header>Carga exitosa!</Message.Header>
                      Te enviaremos un correo con tu usuario y contraseña para entrara a la APP
                    </Message.Content>
                  </Message> */}
                    <Header as='h2' icon inverted>
                      <Icon name='check' />
                      Carga exitosa!
                <Header.Subheader>Te enviaremos a: {this.state.email} los datos de Usuario para entrar a la APP</Header.Subheader>
                     <Link to="/page6"> <button className=" mt-5 ui button">OK</button></Link>
                    </Header>
                </Dimmer>
                
                </div>
            }

        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
      onSaveDataCostumer:(dataCustomer)  => dispatch(actionCreators.saveDataCostumer(dataCustomer)),
      onGenerateKey:(llave)  => dispatch(actionCreators.generateKey(llave))
  };
};

export default connect( null, mapDispatchToProps) (FormExampleFieldControl)




