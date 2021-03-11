import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {ReactComponent as Abouticon} from './menu-about.svg';

const AboutButton = () => {

    const store = useSelector(state => state);
    const currentTextColor = store.styles.currentTextColor;

    let history = useHistory();

    const redirect = () => {
        history.push('/about')
    }

    return (
        <Button>
            <Abouticon onClick={redirect} style={{
                fill: `${currentTextColor}`
            }} />
        </Button>
    );
};

/* CSS */
const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 10px 10px 0;
  position: fixed;
  right: 0;
  bottom: 0;
`;

export default AboutButton;
