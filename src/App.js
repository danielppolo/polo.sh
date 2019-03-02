import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import style from './App.module.scss';
import Talks from './components/Views/Talks/Talks';
import Playground from './components/Views/Playground/Playground';
import History from './components/Views/History/History';
import Thoughts from './components/Views/Thoughts/Thoughts';
import Projects from './components/Views/Projects/Projects';
import Space from './components/Views/Space/Space';
import Archive from './components/Views/Archive/Archive';
import Home from './components/Views/Home/Home';
import Error from './components/Views/Error/404/404';

class App extends Component {

  state = {
    accessPath: null
  }

  componentWillMount(){
    console.log(window.location.pathname);
    this.setState( { accessPath: window.location.pathname } );
  }

  render() {
    const redirection = (this.state.accessPath && this.state.accessPath !== '/' && window.location.pathname !== this.state.accessPath) ? 
      <Redirect to={this.state.accessPath}/> : null;
    return (
      <div className={style.App}>
          { redirection }
          <Switch>
            <Route path='/talks' component={Talks}/>
            <Route path='/playground' component={Playground}/>
            <Route path='/history' component={History}/>
            <Route path='/thoughts' component={Thoughts}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/space' component={Space}/>
            <Route path='/archive' component={Archive}/>
            <Route path='/404' exact component={Error}/>
            <Route path='/' exact component={Home}/>
            <Route path='/' component={Error}/>
          </Switch>
          
      </div>
    );
  }
}

export default App;
