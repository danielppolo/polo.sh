import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './HistoryIndex/HistoryIndex';
import style from './History.module.scss';

const history = props => {
    // About me. Maybe work with p5 or D3 to make a infograph about my life. Like http://www.storiesbehindaline.com/
    const BASE = '/history';
    return (
    <div className={style.History}>
        <Switch>
            <Route path={BASE} exact component={Index}/>
            {/* <Route path={`${BASE}/variable-font`} exact component={}/> */}
        </Switch> 
    </div>
    );
}

export default history;