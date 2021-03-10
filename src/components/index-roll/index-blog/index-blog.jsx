import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';

import globalStyles from '../../../styles/_exports.module.scss';
import {setCurrentBackground} from '../../../redux/styles/styles.actions'

const IndexBlog = ({setCurrentBackground}) => {
    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            setCurrentBackground(globalStyles.backgroundColorBlog);
        }
    })

    return (
        <Container ref={ref} className="index-blog-container">
            <h1>BLOGS GALORE!</h1>
            <p>loads of text that must be read instead of audiovisualy ingested</p>
        </Container>
    );
};

/* Notify store of current color values */
const mapDispatchToProps = dispatch => ({
    setCurrentBackground: background => dispatch(setCurrentBackground(background))
});

/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${globalStyles.textColorBlog};
`;

export default connect(null, mapDispatchToProps)(IndexBlog);
