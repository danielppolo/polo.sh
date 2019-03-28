import React, { useEffect } from 'react';
import Typed from 'typed.js';
// https://github.com/mattboldt/typed.js/

const dynamicText = props => {

    useEffect(() => {
        new Typed('#typed', {
            stringsElement: '#typed-strings',
            smartBackspace: true,
            loop: true
          });
    });

    return <React.Fragment>
        <div id="typed-strings">
            {props.children}
        </div>
        <span id="typed"></span>
    </React.Fragment>;
};

export default dynamicText;