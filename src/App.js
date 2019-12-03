import React, { Component } from 'react';
import { Helmet } from 'react-helmet'; // this is for changing the tab title: https://github.com/nfl/react-helmet

import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';

const TITLE = 'Alex Ren';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div>
          <Home/>       
          <Projects/>          
        </div>
      </div>
    );
  }
}

export default App;
