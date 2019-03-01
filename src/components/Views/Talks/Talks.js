import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './TalksIndex/TalksIndex';
import style from './Talks.module.scss';

import Test from './Slides/TestSlides';

const talks = props => {
    // The idea is to have an archive of all talks and presentations. Using Reveal.js as Slides components
    const BASE = '/talks';
    return (
        <Switch>
            <Route path={BASE} exact component={Index}/>
            <Route path={`${BASE}/test`} exact component={Test}/>
        </Switch>
    );
}

export default talks;