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
      SelectedBeast: HornsData,
    };
  }

  getImages = (title) => {
const selectedPiece= Data.filter(element => {
  if (title===element.title)
})
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          HornsData={Data}
        />
        <SelectedBeast />
        <Footer />
      </div>
    );
  }
}
export default App;

