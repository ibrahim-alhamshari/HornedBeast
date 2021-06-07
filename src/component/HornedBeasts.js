import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {

constructor(props){
    super(props)
    this.state={
        numberOfVote: 0
    }
}

request = () =>{
    this.setState({
numberOfVote: this.state.numberOfVote +1
    })
   
}

    render() {
        return (

<div>

<Card onClick={this.request} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
   {this.state.numberOfVote}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <p>{this.props.description}</p>
            //     <img src={this.props.image_url} className="" alt="" />
            //     <button onClick= {this.request}>Voting</button>
            // </div>
            
        )
    }
}

export default HornedBeasts;