import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Data from './component/Data.json';
import SelectedBeast from './component/SelectedBeast';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      selectedBeast: Data,
      showModal:false,
    };
  }

  getImages = (title) => {
    const compareData= Data.find(element => {
      if (title===element.title){
        return element;
      }
    });

    this.setState({
      showModal: true,
      selectedBeast: compareData,
    });
  }

  exitingFromModal =()=>{
    this.setState({
      showModal:false,
    });
  }


  render() {
    return (
      <div>
        <Header />
        <Main 
          response2={this.getImages}
          HornsData={Data}
        />
        <SelectedBeast 
          selectedBeast2={this.state.selectedBeast}
          show={this.state.showModal}
          close={this.exitingFromModal}
          
        />
        <Footer />
      </div>
    );
  }
}
export default App;

 

