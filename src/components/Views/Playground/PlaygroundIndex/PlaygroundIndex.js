import React from 'react';
import style from './PlaygroundIndex.module.scss';
import { Link } from 'react-router-dom';

const playgroundIndex = props => {
    // Component description
    const BASE = '/playground';
    return (
    <div className={style.PlaygroundIndex}>
        <h1>Playground</h1>
    </div>
    );
}

export default playgroundIndex;