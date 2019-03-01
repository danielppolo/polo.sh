import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './ProjectsIndex/ProjectsIndex';
import style from './Projects.module.scss';

const projects = props => {
    // All finished projects. Nice views. From all different areas.
    const BASE = '/projects';
    return (
    <div className={style.Projects}>
        <Switch>
            <Route path={BASE} exact component={Index}/>
            {/* <Route path={`${BASE}/variable-font`} exact component={}/> */}
        </Switch> 
    </div>
    );
}

export default projects;