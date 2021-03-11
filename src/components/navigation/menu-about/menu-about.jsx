import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

import {convertHexToFilter} from '../../../utils/utils-color';

import {ReactComponent as Abouticon} from './menu-about.svg';

const AboutButton = () => {

    let history = useHistory();

    const redirect = () => {
        history.push('/about')
    }

    return (
        <Button>
            <Abouticon onClick={redirect}/>
        </Button>
    );
};

const mapStateToProps = state => ({
    currentBackground: state.style.currentBackground
});

function setFilter() {

}

/* CSS */
const Button = styled.button`
  filter: invert(18%) sepia(78%) saturate(1132%) hue-rotate(28deg) brightness(55%) contrast(96%); /* default */
  background-color: transparent;
  border: none;
  margin: 0 10px 10px 0;
  position: fixed;
  right: 0;
  bottom: 0;
`;

export default connect(mapStateToProps)(AboutButton);
