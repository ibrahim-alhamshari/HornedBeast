import React from 'react';
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      description04: '',
      title04: '',
      image_url04: '',
      beasts04:'',
      userPositon: ''
    }
  }
  
submitForm=(e)=>{
  e.preventDefault();
};

updatePosition =(e)=>{
  this.setState({
    userPositon: e.target.value,
  });
  this.searchData(e.target.value);
}


searchData =(value)=>{
  const compareHorns=[];
  
  this.props.HornsData.filter((item)=>{
    if (value == item.horns){
      compareHorns.push(item);
    }
  } )
 compareHorns.map((int) => {
    console.log(int.title);
    this.setState({
      title04: int.title,
      image_url04: int.image_url,
      description04: int.description,
      beasts04: int.horns,
    });
  
}
 ),
}

 render() {
  return (
    <div>
      <Form onSubmit={(e) => this.submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <select onChange={this.updatePosition} aria-label="Default select example">
            <option>horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One hundred</option>
          </select>
        </Form.Group>
        <Button onClick={this.submitForm} variant="primary" type="submit">
         Submit
        </Button>
      </Form>
    </div>
  );
   }

export default Main ;