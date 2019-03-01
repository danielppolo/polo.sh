import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './ArchiveIndex/ArchiveIndex';
import style from './Archive.module.scss';

const archive = props => {
    // Dont know yet. Still on work.
    const BASE = '/archive';
    return (
    <div className={style.Archive}>
        <Switch>
            <Route path={BASE} exact component={Index}/>
            {/* <Route path={`${BASE}/variable-font`} exact component={}/> */}
        </Switch> 
    </div>
    );
}

export default archive;