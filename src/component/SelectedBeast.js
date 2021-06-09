/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MyModal extends React.Component{

  constructor(props){
    super(props);

  
  }

  // appearData=()=>{
  
  // }

  render(){
    return (
      <div>
 console.lgo({this.props.title});
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={this.props.image_url} width='80%'/>
            {/* <p>{this.props.description}</p> */}
            
            {/* <ul>
              {this.props.title.map(i => {
                return <li>{i}</li>;
              })}
            </ul> */}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
                  Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div> 
     

     
    ); }

   
}


export default MyModal;