import React from 'react';
import style from './ThoughtsIndex.module.scss';
import { Link } from 'react-router-dom';

const thoughtsIndex = props => {
    // Component description
    const BASE = '/thoughts';
    return (
    <div className={style.thoughtsIndex}>
        <Link to={`${BASE}/cyberspace`}>on cyberspace</Link>
        <Link to={`${BASE}/cyberspace`}>on architecture</Link>
        <Link to={`${BASE}/cyberspace`}>on black</Link>
    </div>
    );
}

export default thoughtsIndex;