import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';

import globalStyles from '../../../styles/_exports.module.scss';
import {setCurrentBackground} from '../../../redux/styles/styles.actions'

const IndexMixed = ({setCurrentBackground}) => {
    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            setCurrentBackground(globalStyles.backgroundColorMixed);
        }
    })

    return (
        <Container ref={ref} className="index-mixed-container">
            <h1>MIXED MEDIA</h1>
            <p>freaking paint over those prints before we pour concrete on it!</p>
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
  color: ${globalStyles.textColorMixed};
`;

export default connect(null, mapDispatchToProps)(IndexMixed);
