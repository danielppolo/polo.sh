import React from 'react';
import style from './HistoryIndex.module.scss';
import { Link } from 'react-router-dom';

const historyIndex = props => {
    // Component description
    const BASE = '/history';
    return (
    <div className={style.HistoryIndex}>
        <h1>...grown from the shadows and darkness.</h1>
    </div>
    );
}

export default historyIndex;