import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions';
import {setCurrentVisibleComponent} from '../../../redux/events/events.actions';

import {COLORS} from '../../../styles/styles';

const IndexMixed = () => {

    const dispatch = useDispatch();

    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentBackground(COLORS.backgroundColorMixed));
            dispatch(setCurrentTextColor(COLORS.textColorMixed));
            dispatch(setCurrentVisibleComponent('index-mixed-media'));
        }
    }, [dispatch, inView]);

    return (
        <Container ref={ref} className="index-mixed-container" id="index-mixed-media">
            <h1>MIXED MEDIA</h1>
            <p>freaking paint over those prints before we pour concrete on it!</p>
        </Container>
    );
};

/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${COLORS.textColorMixed};
`;

export default IndexMixed;
