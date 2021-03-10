import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Mycolors} from '../../../assets/sig_mycolors.svg';

const TopContent = () => {
    return (
        <Container>
            <Text>
                <div>
                    <Headline>a manifest to art is what an airplane is to the sky</Headline>
                </div>
                <div>
                    <Paragraph>things will be written in history as they are drawn into our canvas</Paragraph>
                </div>
            </Text>

            <Image>
                <Mycolors />
            </Image>

        </Container>
    );
};

/* CSS */
const Container = styled.div`
  width: 45%;
`;

const Text = styled.div`
  width: 50%;
  float: left;
`;

const Headline = styled.h1`
  margin: 10% 0 0 0;
    font-size: 30px;
`;

const Paragraph = styled.p`
  margin: 10% 0 0 0;
    font-size: 20px;
`;

const Image = styled.div`
  width: 400px;
    float: right;
`;

export default TopContent;
