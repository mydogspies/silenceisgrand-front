import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';


import {ReactComponent as Menuicon} from './menu-button.svg';

const MenuButton = () => {

    return (
        <Button>
            <Menuicon/>
        </Button>
    );
};

const mapStateToProps = state => ({
    currentBackground: state.style.currentBackground
});

function setFilter() {

}

/* CSS */
const Button = styled.div`
  filter: invert(18%) sepia(78%) saturate(1132%) hue-rotate(28deg) brightness(55%) contrast(96%); /* default */
  margin: 10px 10px 0 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export default connect(mapStateToProps)(MenuButton);
