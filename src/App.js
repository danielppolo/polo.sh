import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slides from './components/Slides/Slides';
import Slide from './components/Slides/Slide/Slide';

class App extends Component {
  render() {
    return (
      <Slides>
        <Slide>
          <Slide>
            <h1>Hello Mexico!</h1>
          </Slide>
          <Slide>
            <h1>Hello CDMX!</h1>
          </Slide>
        </Slide>
        <Slide>
            <h1>Hello daniel!</h1>
        </Slide>
      </Slides>
    );
  }
}

export default App;
