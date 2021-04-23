import React from 'react';
import styled from 'styled-components';
import myColors from '../../../assets/offline/sig_mycolors.svg';

const OfflineContent = () => {


    return (
        <Grid>

            <Logo>
                <img alt="logo" src={myColors} />
            </Logo>

            <Headline className="headline"><h1>a manifest to art is what an airplane is to the sky</h1></Headline>
            <Paragraph><p>the site is temporarily offline due to maintenance - we will be soon back</p></Paragraph>

        </Grid>
    );
};

/* CSS */
const Grid = styled.div`
  position: relative;
  display: grid;
  top: -40px;
  height: 500px;
  width: 850px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @keyframes slide {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media all and (max-width: 1100px) and (min-width: 760px) {
    width: 650px;
  }

  @media all and (max-width: 759px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    width: 80%;
    height: auto;
  }
`;

const Logo = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: -1;
  filter: drop-shadow(0.4rem 0.3rem 0.2rem rgba(0, 0, 0, 0.08));

  @media all and (max-width: 1100px) and (min-width: 760px) {
    width: 390px;
    filter: drop-shadow(0.35rem 0.25rem 0.15rem rgba(0, 0, 0, 0.06));
  }

  @media all and (max-width: 759px) {
    position: relative;
    transform: translate(0, 0);
    top: -25px;
    left: 0;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    justify-self: center;
    width: 80%;
    filter: drop-shadow(0.25rem 0.15rem 0.1rem rgba(0, 0, 0, 0.07));
  }
`;

const Headline = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  display: flex;
  align-items: flex-end;
  padding: 0 0 20px 4px;
  font-size: 34px;
  font-weight: bold;
  transform: rotate(-1deg);

  @media all and (max-width: 1100px) and (min-width: 760px) {
    font-size: 28px;
    font-weight: bold;
  }

  @media all and (max-width: 759px) {
    grid-column-start: 1;
    grid-row-start: 2;
    align-items: flex-start;
    justify-self: center;
    width: 300px;
    padding: 0 0 0 18px;
    font-size: 25px;
    transform: rotate(0.5deg);
  }
`;

const Paragraph = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  padding: 30px 0 0 0;
  font-size: 24px;

  @media all and (max-width: 1100px) and (min-width: 760px) {
    font-size: 20px;
  }

  @media all and (max-width: 759px) {
    grid-column-start: 1;
    grid-row-start: 3;
    justify-self: center;
    width: 280px;
    padding: 23px 0 0 6px;
    font-size: 20px;
  }
`;

export default OfflineContent;
