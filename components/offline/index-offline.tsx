import React from "react";
import styled from "styled-components";
import Image from "next/image";

const IndexOffline = () => {

    return (
        <Content>
            <Grid>

                <Logo>
                    <Image alt="logo" src="/assets/local/sig_mycolors.svg" height="400px" width="400px"/>
                </Logo>

                <Headline className="headline"><h1>a manifest to art is what an airplane is to the sky</h1></Headline>
                <Paragraph><p>the site is temporarily offline due to maintenance - we will be soon back</p></Paragraph>

            </Grid>
        </Content>
    );
};

/* CSS */
const Content = styled.div`
  background-color: #F5DE69;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  position: relative;
  display: grid;
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
`;

const Headline = styled.div`
  color: #463C05;
  grid-column-start: 1;
  grid-row-start: 1;
  display: flex;
  align-items: flex-end;
  padding: 0 0 20px 4px;
  font-size: 34px;
  font-weight: bold;
  transform: rotate(-1deg);
`;

const Paragraph = styled.div`
  color: #463C05;
  grid-column-start: 1;
  grid-row-start: 2;
  padding: 30px 0 0 0;
  font-size: 24px;
`;

export default IndexOffline;
