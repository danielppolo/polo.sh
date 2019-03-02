import React from 'react';
import style from './SpaceIndex.module.scss';
import { Link } from 'react-router-dom';
const spaceIndex = props => {
    // Component description
    const BASE = '/space';
    return (
    <div className={style.SpaceIndex}>
        <h1>Into the grid</h1>
    </div>
    );
}

export default spaceIndex;