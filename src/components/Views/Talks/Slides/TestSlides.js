import React from 'react';
import Slides from '../../../UI/Slides/Slides';
import Slide from '../../../UI/Slides/Slide/Slide';

const testSlides = props => {
    // Component description
    return (
    <Slides>
        <Slide>
            <h1>Test</h1>
        </Slide>
        <Slide>
            <Slide>
                <h1>Hello world</h1>
            </Slide>
            <Slide>
                <p>Down here!</p>
            </Slide>
            <Slide>
                The upside down
            </Slide>
        </Slide>
    </Slides>
    );
}


export default testSlides;