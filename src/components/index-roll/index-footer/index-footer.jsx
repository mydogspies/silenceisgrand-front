import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';

import globalStyles from '../../../styles/_exports.module.scss';
import {setCurrentBackground} from '../../../redux/styles/styles.actions'

const IndexFooter = ({setCurrentBackground}) => {
    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            setCurrentBackground(globalStyles.backgroundColorFooter);
        }
    })

    return (
        <Container ref={ref} className="index-footer-container">
            <h1>FOOTER</h1>
            <p>more really cool things we have here, there and everywhere</p>
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
  color: ${globalStyles.textColorFooter};
`;

export default connect(null, mapDispatchToProps)(IndexFooter);
