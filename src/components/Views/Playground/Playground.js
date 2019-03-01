import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Index from './PlaygroundIndex/PlaygroundIndex';
import VariableType from '../../UI/Type/VariableType/VariableType';
import DynamicText from '../../UI/Type/DynamicText/DynamicText';
import style from './Playground.module.scss';

const playground = props => {
    // Experimentation area to test libraries, design ...
    const BASE = '/playground';
    return (
    <div className={style.Playground}>
        <Switch>
            <Route path={BASE} exact component={Index}/>
            <Route path={`${BASE}/variable-font`} exact render={ () => <VariableType><DynamicText strings={['Hello world!', 'I\'m not a bot']}/></VariableType>}/>
        </Switch> 
    </div>
    );
}

export default playground;