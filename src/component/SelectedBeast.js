/* eslint-disable react/jsx-no-undef */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MyModal extends React.Component{

  constructor(props){
    super(props);
  }
    
 handleShow =()=> this.setState(true);
 handleClose =() => this.setState(false);

 render(){
   return (
     <div>
 
       <Modal show={this.handleShow} onHide={this.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
         </Modal.Header>
         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={this.handleClose}>
                  Close
           </Button>
           <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
           </Button>
         </Modal.Footer>
       </Modal>
     </div> 
     
   ); }

   
}


export default MyModal;