import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Data from './component/Data.json';

class App extends React.Component {
  constructor(props){
    super(props);
this.state={
  
}
  }

  displayModel = (title) ={
let selectedbeast = Data.filter(item)
  }
  render() {
    return (
      <div>
        <Header />
        <Main 
          hornsData={Data}
        />

        <Footer />
      </div>
    );
  }
}
export default App;

