import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

import {ReactComponent as Menuicon} from './menu-button.svg';

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
const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px 10px 0 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export default MenuButton;
