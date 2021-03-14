import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

import {ReactComponent as Menuicon} from './menu-button.svg';
import {MenuButtonEffects} from '../effects/menu-button-effects'

const MenuButton = () => {

    const store = useSelector(state => state);
    const currentTextColor = store.styles.currentTextColor;

    let history = useHistory();

    const redirect = () => {
        history.push('/navigate')
    }

    return (
        <Button>
            <Menuicon onClick={redirect} style={{
                fill: `${currentTextColor}`
            }}/>
        </Button>
    );
};


/* CSS */
const Button = styled(MenuButtonEffects)`
  width: 60px;
  border: none;
  position: fixed;
  right: 10px;
  top: 10px;
  @media all and (max-width: 1100px) and (min-width: 760px) {
    width: 40px;
  }

  @media all and (max-width: 759px) {
    width: 38px;
  }
`;

export default MenuButton;
