import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions';
import {setCurrentVisibleComponent} from '../../../redux/events/events.actions';

import {COLORS} from '../../../styles/styles';

const IndexFooter = () => {
    const dispatch = useDispatch();
    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentBackground(COLORS.backgroundColorFooter));
            dispatch(setCurrentTextColor(COLORS.textColorFooter));
            dispatch(setCurrentVisibleComponent('index-footer'));
        }
    }, [dispatch, inView]);

    return (
        <Container ref={ref} className="index-footer-container" id="index-footer">
            <h1>FOOTER</h1>
            <p>more really cool things we have here, there and everywhere</p>
        </Container>
    );
};

/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${COLORS.textColorFooter};
`;

export default IndexFooter;
