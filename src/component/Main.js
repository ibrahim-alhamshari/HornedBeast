import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  
voting= () =>{
  alert('hello');
}

render() {
  
  return ( 
    this.props.Data.map((beast) => {
      return (
        <HornedBeasts
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          // voting={this.voting}
        />
      );
    })
  );
}
}

export default Main;