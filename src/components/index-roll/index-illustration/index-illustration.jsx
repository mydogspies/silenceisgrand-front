import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions';
import {setCurrentVisibleComponent} from '../../../redux/events/events.actions';

import {COLORS} from '../../../styles/styles';

const IndexIllustration = () => {
    const dispatch = useDispatch();
    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentTextColor(COLORS.textColorIllustration));
            dispatch(setCurrentBackground(COLORS.backgroundColorIllustration));
            dispatch(setCurrentVisibleComponent('index-illustration'));
        }
    }, [dispatch, inView]);

    return (
        <Container ref={ref} className="index-illustration-container" id="index-illustration">
            <h1>ILLUSTRATION</h1>
            <p>omg so many images</p>
        </Container>
    );
};

/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${COLORS.textColorIllustration};
`;

export default IndexIllustration;
