import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Mycolors} from '../../../assets/sig_mycolors.svg';

const TopContent = () => {
    return (
        <Grid>
            <Mycolors />
            <Headline>a manifest to art is what an airplane is to the sky</Headline>
            <Paragraph>shapes will be written in history as they are drawn onto this canvas</Paragraph>
        </Grid>
    );
};

/* CSS */
const Grid = styled.div`
  display: grid;
  height: 500px;
  width: 850px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1.2fr;

  @media screen and (max-width: 950px) {
    padding: 100px 0 0 0;
    height: 400px;
    width: 600px;
    grid-template-rows: 1fr 1.5fr;
  }

  @media screen and (max-width: 660px) {
    padding: 50px 0 0 0;
    margin: 0 auto;
    width: 65%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 5fr;
  }
`;

const Headline = styled.h1`
  margin: 25% 0 0 10px;
  font-size: 34px;
  font-weight: bold;
  grid-column-start: 1;
  grid-row-start: 1;

  @media screen and (max-width: 950px) {
    font-size: 25px;
    margin: 20% 0 0 0;
  }

  @media screen and (max-width: 660px) {
    margin: 20px 0 0 0;
    grid-column-start: 1;
    grid-row-start: 1;
    font-size: 27px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  grid-column-start: 1;
  grid-row-start: 2;

  @media screen and (max-width: 950px) {
    font-size: 18px;
  }

  @media screen and (max-width: 660px) {
    margin: 17px 0 20px 0;
    grid-column-start: 1;
    grid-row-start: 2;
    font-size: 20px;
  }
`;

export default TopContent;
