import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import {setCurrentBackground, setCurrentTextColor} from '../../redux/styles/styles.actions';
import {setCurrentVisibleComponent} from '../../redux/events/events.actions';

import {COLORS} from "../../styles/styles";

const AboutPage = () => {
    const dispatch = useDispatch();

    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentTextColor(COLORS.textColorDefault));
            dispatch(setCurrentBackground(COLORS.backgroundColorDefault));
            dispatch(setCurrentVisibleComponent('about-page'));
        }
    }, [dispatch, inView]);

    return (
        <Container ref={ref} className="about-container" id="about-page">
            <h1>ABOUT</h1>
        </Container>
    );
};

/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${COLORS.textColorDefault};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AboutPage;
