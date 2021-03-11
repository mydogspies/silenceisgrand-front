import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';

import globalStyles from '../../../styles/_exports.module.scss';
import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions'

const IndexPhoto = () => {

    const dispatch = useDispatch();

    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentTextColor(globalStyles.textColorPhoto));
            dispatch(setCurrentBackground(globalStyles.backgroundColorPhoto))
        }
    })

    return (
        <Container ref={ref} className="index-photo-container">
            <h1>photography by design or by intuition but always daring</h1>
            <p>many images small or big but the text must be epic</p>
        </Container>
    );
};


/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${globalStyles.textColorPhoto};
`;

export default IndexPhoto;
