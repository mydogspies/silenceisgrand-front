import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';

import globalStyles from '../../../styles/_exports.module.scss';
import {setCurrentBackground} from '../../../redux/styles/styles.actions'

import TopContent from '../../index-content/top-content/top-content';

const IndexTop = ({setCurrentBackground}) => {
    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            setCurrentBackground(globalStyles.backgroundColorIllustration);
        }
    })

    return (
        <Container ref={ref} className="index-top-container">
            <TopContent />
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
  color: ${globalStyles.textColorDefault};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default connect(null, mapDispatchToProps)(IndexTop);
