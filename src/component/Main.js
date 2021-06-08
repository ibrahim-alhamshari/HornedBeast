/* eslint-disable no-useless-constructor */
import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
  
    return (
      <div>
        {
          this.props.HornsData.map((element) => {
            return (
              <HornedBeasts
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                response={this.props.response2}
              />
            );
          })
        }
      </div>
    );

  }

}

export default Main;