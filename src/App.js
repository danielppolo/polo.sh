import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.module.scss';
import Slides from './components/Slides/Slides';
import Slide from './components/Slides/Slide/Slide';
import VariableType from './components/Type/VariableType/VariableType';
import DynamicText from './components/Type/DynamicText/DynamicText';

class App extends Component {

  render() {
    return (
      <div className={style.App}>
        <div className={style.AppHeader}>
          <VariableType><DynamicText strings={['Hello world!', 'I\'m not a bot']}/></VariableType>
          
        </div>
      </div>
    );
  }
}

export default App;
