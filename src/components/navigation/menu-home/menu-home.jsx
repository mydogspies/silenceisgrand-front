import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {ReactComponent as Homeicon} from './menu-home.svg';
import {MenuIconEffects} from '../effects/menu-icon-effects';

const HomeButton = ({visibility}) => {

    const store = useSelector(state => state);
    const currentTextColor = store.styles.currentTextColor;

    let history = useHistory();

    const redirect = () => {
        history.push('/');
    }

    return (
        <Icon id="menu-icon-home">
            <Homeicon visibility={visibility} onClick={redirect} style={{
                fill: `${currentTextColor}`
            }} />
        </Icon>
    );
};

/* CSS */
const Icon = styled(MenuIconEffects)`
  width: 60px;
  border: none;
  position: fixed;
  left: 10px;
  top: 10px;
  visibility: ${props => props.visibility};

  @media all and (max-width: 1100px) and (min-width: 760px) {
    width: 40px;
  }

  @media all and (max-width: 759px) {
    width: 38px;
  }
`;

export default HomeButton;
