import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'

class PasswordModal  extends Component {
    state = { open: false }
  
    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
    sendSms =() => alert("Se le envio un SMS con su usuario y contraseña")
  
    render() {
      const { open, size } = this.state
  
      return (
        <div className="mb-3">
          <Button onClick={this.show('mini')}>Mi Usuario</Button>
  
          <Modal size={size} open={open} onClose={this.close}>
            <Modal.Header>Login en APP</Modal.Header>
            <Modal.Content>
            <h5>Usuario:xxxxxxxx </h5>
            <h5>Constrseña:yyyyyyy </h5>
            </Modal.Content>
            <Modal.Actions>
              <Button  onClick={this.close}>OK</Button>
              <Button
                positive
                icon='checkmark'
                labelPosition='left'
                content='Enviar por SMS'
                onClick={this.sendSms}
              />
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
  }
  
  export default PasswordModal;