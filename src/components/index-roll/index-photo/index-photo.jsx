import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';

import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions'
import {setCurrentVisibleComponent} from '../../../redux/events/events.actions';

import {COLORS} from '../../../styles/styles';
import PhotoText from '../../index-content/photo-content/photo-index-text';
import ImageWall from '../../index-content/photo-content/photo-index-image-wall';

const IndexPhoto = () => {

    const dispatch = useDispatch();

    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentTextColor(COLORS.textColorPhoto));
            dispatch(setCurrentBackground(COLORS.backgroundColorPhoto));
            dispatch(setCurrentVisibleComponent('index-photo'));
        }
    }, [inView]);

    return (
        <Container ref={ref} className="index-photo-container" id="index-photo">
            <div id="photo-left-container">
                <PhotoText />
            </div>
            <div id="photo-right-container">
                <ImageWall />
            </div>
        </Container>
    );
};


/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${COLORS.textColorPhoto};
  
  #photo-left-container {
    height: 100vh;
    width: 45%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
  }
  
  #photo-right-container {
    height: 100vh;
    width: 55%;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
  }
`;

export default IndexPhoto;
