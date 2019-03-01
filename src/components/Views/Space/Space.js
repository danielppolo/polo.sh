import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './SpaceIndex/SpaceIndex';
import style from './Space.module.scss';

const space = props => {
    // VR part. Spatial exploration using three and aFrame
    const BASE = '/space';
    return (
    <div className={style.Space}>
        <Switch>
            <Route path={BASE} exact component={Index}/>
            {/* <Route path={`${BASE}/variable-font`} exact component={}/> */}
        </Switch> 
    </div>
    );
}

export default space;