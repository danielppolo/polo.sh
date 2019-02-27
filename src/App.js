import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.module.scss';
import Slides from './components/Slides/Slides';
import Slide from './components/Slides/Slide/Slide';

class App extends Component {

  componentDidMount(){
    const title = document.querySelector('#title');
    document.addEventListener('mousemove', event => {
      const x = event.clientX;
      const y = event.clientY;
      const height = window.innerHeight;
      const width = window.innerWidth;
      const wght = ((x * 800) / width) + 100;  
      const wdth = ((y * 200) / height);  
      title.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`;
    });
  }

  render() {
    return (
      <div className={style.App}>
        <div className={style.AppHeader}>
          <h1 id='title'>polo.sh</h1>
        </div>
      </div>
    );
  }
}

export default App;
