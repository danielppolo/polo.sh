import React, { useEffect } from 'react';
import { userInfo } from 'os';

const variableType = props => {

    useEffect(() => {
        const title = document.querySelector('#variable');
        const resize = event => {
            const x = event.clientX;
            const y = event.clientY;
            const height = window.innerHeight;
            const width = window.innerWidth;
            const wght = ((x * 800) / width) + 100;  
            const wdth = ((y * 200) / height);  
            title.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`;
        };
        
        document.addEventListener('mousemove', resize);
        document.addEventListener('touchstart', resize);
    });

    return <h1 id='variable'>{props.children}</h1>;
};

export default variableType;