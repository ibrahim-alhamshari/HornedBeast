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
      filteredData:this.props.HornsData,
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
  console.log(value);
  const compareHorns=[];
  if(value == 'All'){
    this.setState({ filteredData: this.props.HornsData });
  }else{
   
    this.props.HornsData.filter(item=>{
      if (value == item.horns){
        compareHorns.push(item);
      }
    } );}
  this.setState({
    filteredData: compareHorns,
  });
}


render() {
  return (
     
    <div>


      <Form onSubmit={(e) => this.submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control as="Select" onChange={this.updatePosition} aria-label="Default select example">
            <option value="All">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One hundred</option>
          </Form.Control>
        </Form.Group>
        <Button onClick={this.submitForm} variant="primary" type="submit">
         Submit
        </Button>
      </Form>

      {
        this.state.filteredData.map((element) => {
          return (
            <>

              <HornedBeasts
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                response={this.props.response2}
              />
            </>
          );
        })
      }
    </div>
  );
}
}
export default Main ;

// {
   
//   let titleArr = [];
//   let imageArr =[];
//   let descArr=[];
//   compareHorns.map((int) => {
//     return(
//       titleArr.push(int.title ),
//       imageArr.push(int.image_url),
//       descArr.push(int.description)
//     );
//   });
//   this.setState({
//     title04:titleArr,
//     image_url04: imageArr,
//     description04: descArr,
//   });
// }
// return compareHorns;

{/* <SelectedBeast 
title={element.title}
image_url={element.image_url}
description={element.description}
/> */}
