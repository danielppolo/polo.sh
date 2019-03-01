import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './App.module.scss';
import VariableType from './components/Type/VariableType/VariableType';
import DynamicText from './components/Type/DynamicText/DynamicText';

class App extends Component {

  render() {
    return (
      <div className={style.App}>
          <Switch>
            <Route path='/talks' exact component={}/>
            <Route path='/playground' exact component={}/>
            <Route path='/history' exact component={}/>
            <Route path='/ideas' exact component={}/>
            <Route path='/projects' exact component={}/>
            <Route path='/space' exact component={}/>
            <Route path='/archive' exact component={}/>
            <Route path='/404' exact component={}/>
            <Route path='/' component={}/>
          </Switch>
          <VariableType><DynamicText strings={['Hello world!', 'I\'m not a bot']}/></VariableType>
      </div>
    );
  }
}

export default App;
