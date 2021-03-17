import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {HashLink} from 'react-router-hash-link';
import _ from 'lodash';

import {ReactComponent as Backicon} from './menu-back.svg';
import {MenuIconEffects} from '../effects/menu-icon-effects';

const BackButton = ({visibility, hashlink}) => {

    const [textColor, setTextColor] = useState();
    const [previous, setPrevious] = useState('#');

    const dispatch = useDispatch();
    const styles = useSelector(state => state.styles);
    const events = useSelector(state => state.events);
    const currentTextColor = styles.currentTextColor;
    const viewHistory = events.viewHistory;

    useEffect(() => {
        setTextColor(currentTextColor);
    }, [currentTextColor]);

    useEffect(() => {
        // TODO check for edge cases with viewHistory
        setPrevious((hashlink) ?
            '#' + _.nth(viewHistory, viewHistory.length-2) :
            _.nth(viewHistory, viewHistory.length-2));

        return () => {
            setPrevious('#');
        }
    }, [viewHistory]);

    return (
        <HashLink to={previous}>
            <Icon visibility={visibility} id="menu-icon-back">
                <Backicon style={{
                    fill: `${textColor}`
                }} />
            </Icon>
        </HashLink>
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

export default BackButton;
