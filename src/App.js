import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.module.scss';
import Slides from './components/Slides/Slides';
import Slide from './components/Slides/Slide/Slide';
import VariableType from './components/Type/VariableType/VariableType';

class App extends Component {

  render() {
    return (
      <div className={style.App}>
        <div className={style.AppHeader}>
          <VariableType>polo.sh</VariableType>
        </div>
      </div>
    );
  }
}

export default App;
