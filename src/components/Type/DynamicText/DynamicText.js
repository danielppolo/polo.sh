import React, { useEffect } from 'react';
import Typed from 'typed.js';


const dynamicText = props => {

    useEffect(() => {
        new Typed('#typed', {
            strings: props.strings,
            smartBackspace: true,
            loop: true
          });
    });

    return <span id="typed"></span>;
};

export default dynamicText;