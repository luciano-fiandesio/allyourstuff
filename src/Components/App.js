import React, { Component, Fragment } from 'react';
import Footer  from './Layouts/Footer'
import Header  from './Layouts/Header'
import Inventory from './Home/Inventory';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Inventory/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
