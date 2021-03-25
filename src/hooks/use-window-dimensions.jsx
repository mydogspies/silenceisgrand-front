/*
hook by QoP on Stackoverflow - added debounce logic on top
https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 */

import {useState, useEffect, useRef} from 'react';
import _ from 'lodash';

function getWindowDimensions() {
    const {
        innerWidth: width,
        innerHeight: height
    } = window;
    return {width, height}
}

export default function useWindowDimensions() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {

        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        const debounced = _.debounce(handleResize, 400);
        window.addEventListener('resize', debounced);

        return () => {
            window.removeEventListener('resize', debounced);
        }
    }, []);

    return windowDimensions;
}
