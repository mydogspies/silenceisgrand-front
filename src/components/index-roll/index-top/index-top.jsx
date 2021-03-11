import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import  {useDispatch} from 'react-redux';
import globalStyles from '../../../styles/_exports.module.scss';
import {setCurrentBackground, setCurrentTextColor} from '../../../redux/styles/styles.actions'

import TopContent from '../../index-content/top-content/top-content';

const IndexTop = () => {
    const dispatch = useDispatch();

    /* Checks however component is visible withing browser window */
    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentTextColor(globalStyles.textColorDefault));
            dispatch(setCurrentBackground(globalStyles.backgroundColorDefault))
        }
    })

    return (
        <Container ref={ref} className="index-top-container">
            <TopContent />
        </Container>
    );
};

/* CSS */
const Container = styled.div`
  height: 100vh;
  color: ${globalStyles.textColorDefault};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export default IndexTop;
