import React, { Component } from 'react';
import CountryList from './components/CountryList';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <center><h1>Country Filter</h1></center>
        <CountryList></CountryList>
      </div>
    );
  }
}

export default App;