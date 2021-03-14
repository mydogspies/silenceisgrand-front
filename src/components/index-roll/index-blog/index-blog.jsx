import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions';
import {setCurrentVisibleComponent} from '../../../redux/events/events.actions';

import {COLORS} from '../../../styles/styles';

const IndexBlog = () => {
    const dispatch = useDispatch();
    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentBackground(COLORS.backgroundColorBlog));
            dispatch(setCurrentTextColor(COLORS.textColorBlog));
            dispatch(setCurrentVisibleComponent('index-blog'));
        }
    }, [dispatch, inView]);

    return (
        <Container ref={ref} className="index-blog-container" id="index-blog">
            <h1>BLOGS GALORE!</h1>
            <p>loads of text that must be read instead of audiovisualy ingested</p>
        </Container>
    );
};

/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${COLORS.textColorBlog};
`;

export default IndexBlog;
