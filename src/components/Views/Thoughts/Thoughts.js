import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './ThoughtsIndex/ThoughtsIndex';
import style from './Thoughts.module.scss';

const thoughts = props => {
    // Archive of thoughts, texts, thoughts, moonshots.... Maybe have all data in another service and make API calls to feed it!
    const BASE = '/thoughts';
    return (
    <div className={style.thoughts}>
        <Switch>
            <Route path={BASE} exact component={Index}/>
            {/* <Route path={`${BASE}/variable-font`} exact component={}/> */}
        </Switch>
    </div>
    );
}

export default thoughts;