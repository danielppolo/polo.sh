import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './App.module.scss';
import Talks from './components/Views/Talks/Talks';
import Playground from './components/Views/Playground/Playground';
import History from './components/Views/History/History';
import Ideas from './components/Views/Ideas/Ideas';
import Projects from './components/Views/Projects/Projects';
import Space from './components/Views/Space/Space';
import Archive from './components/Views/Archive/Archive';
import Home from './components/Views/Home/Home';
import Error from './components/Views/Error/404/404';

class App extends Component {

  render() {
    return (

      <div className={style.App}>
          <Switch>
            <Route path='/talks' component={Talks}/>
            <Route path='/playground' component={Playground}/>
            <Route path='/history' component={History}/>
            <Route path='/ideas' component={Ideas}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/space' component={Space}/>
            <Route path='/archive' component={Archive}/>
            <Route path='/' exact component={Home}/>
            <Route path='/404' component={Error}/>
          </Switch>
          
      </div>
    );
  }
}

export default App;
