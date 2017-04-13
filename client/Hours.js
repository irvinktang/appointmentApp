var React = require('react');
var ReactDOM = require('react-dom');
var rsb = require('react-bootstrap');

import { Modal, Button } from 'react-bootstrap'

export default class Hour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name:'',
      phone:''
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.nameSave = this.nameSave.bind(this)
    this.phoneSave = this.phoneSave.bind(this)
  }

  close() {
    this.setState({showModal: false})
  }

  open() {
    this.setState({showModal: true})
  }

  nameSave(event) {
    this.setState({name: event.target.value})
  }

  phoneSave(event) {
    this.setState({phone: event.target.value})
  }

  render() {

    const tableStyle = {
      border: '1px solid #ddd',
      height:'45px',
      textAlign: 'center',
      fontSize: '25px',
      width: '150px'
    }

    return (
      <div>
      <div style={tableStyle} onClick={this.open}>
      <p style={(this.state.name && this.state.phone) ? {color:'red'}: {color:'black'}}>{this.props.time}</p>
      </div>

      <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Header closeButton>
      <Modal.Title>Name & Phone Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
        Full Name: <input onChange={this.nameSave} type='text' name='name' value={this.state.name}/><br/>
        Phone Number: <input onChange={this.phoneSave} type='text' name='phone' value={this.state.phone}/>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.close}>Submit</Button>
      </Modal.Footer>
      </Modal>
      </div>
    )
  }
}
