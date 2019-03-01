import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './IdeasIndex/IdeasIndex';
import style from './Ideas.module.scss';

const ideas = props => {
    // Archive of thoughts, texts, ideas, moonshots.... Maybe have all data in another service and make API calls to feed it!
    const BASE = '/ideas';
    return (
    <div className={style.Ideas}>
        <Switch>
            <Route path={BASE} exact component={Index}/>
            {/* <Route path={`${BASE}/variable-font`} exact component={}/> */}
        </Switch>
    </div>
    );
}

export default ideas;