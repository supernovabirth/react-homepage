import React, { Component } from 'react';
import './App.css';
import Cover from './components/Cover';
import siteData from './siteData.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      siteData: siteData
    }
  }

  componentDidMount(){
    
  }
  
  render() {
    return (
      <div className="App">
        <Cover data={this.state.siteData.profile} />
      </div>
    );
  }
}

export default App;
