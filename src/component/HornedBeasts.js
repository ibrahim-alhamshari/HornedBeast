import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state={
      numberOfVote: 0,
    };
  }

request = () =>{
  this.setState({
    numberOfVote: this.state.numberOfVote +1,
  }); 
}

firstClick =() => {
  this.props.response(this.props.title);
}

render() {
  return (
    <div>
      <div>
        <Card style={{ width: '18rem' }} onClick={this.firstClick}>
          <Card.Img onClick={this.request} variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
          ❤️ =  
              {this.state.numberOfVote}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.image_url} className="" alt="" />
      </div>
    </div>         
  );
}
}

export default HornedBeasts;