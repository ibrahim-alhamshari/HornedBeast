/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      description04: [],
      title04: [],
      image_url04: [],
      beasts04:[],
      userPositon: [],
    };
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
  this.props.HornsData.filter(item=>{
    if (value == item.horns){
      compareHorns.push(item);
    }
  } );

  console.log(compareHorns);
  {
   
    let titleArr = [];
    let imageArr =[];
    let descArr=[];
    compareHorns.map((int) => {
      return(
        titleArr.push(int.title ),
        imageArr.push(int.image_url),
        descArr.push(int.description)
      );
    });
    this.setState({
      title04:titleArr,
      image_url04: imageArr,
      description04: descArr,
    });
  }
  return compareHorns;
}


render() {
  console.log(this.compareHorns);
  console.log(this.state.title04);
  return (
     
    <div>
      <SelectedBeast 
        title={this.state.title04}
        image_url={this.state.image_url04}
        description={this.state.description04}
      />

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
      {
        this.props.HornsData.map((element) => {
          return (
            <HornedBeasts
              title={this.state.title04}
              image_url={this.state.image_url04}
              description={this.state.description04}
              // response={this.props.response2}
            />
          );
        })
      }
    </div>
  );
}
}
export default Main ;

// this.setState({
//   title04:int.title,
//   image_url04: int.title,
//   description04: int.description,
//   beasts04: int.horns,
// });