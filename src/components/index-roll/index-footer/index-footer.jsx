import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions';

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
        }
    })

    return (
        <Container ref={ref} className="index-footer-container">
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
