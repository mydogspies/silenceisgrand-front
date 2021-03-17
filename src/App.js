import React, {useEffect, useState, useRef} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';
import _ from 'lodash';

import {setViewHistory} from "./redux/events/events.actions";

import './styles/global.scss';

import IndexPage from './pages/index/index-page';

const App = () => {

    const [background, setBackground] = useState();

    const dispatch = useDispatch();
    const styles = useSelector(state => state.styles);
    const events = useSelector(state => state.events);
    const currentBackground = styles.currentBackground;
    const currentVisibleComponent = events.currentVisibleComponent;
    const viewHistory = events.viewHistory;

    useEffect(() => {
        setBackground(currentBackground);
    }, [currentBackground]);

    useEffect(() => {

            if(currentVisibleComponent && _.last(viewHistory) !== currentVisibleComponent) {
                dispatch(setViewHistory(currentVisibleComponent));
            }
    }, [currentVisibleComponent]);

    return (
        <Container className="appContainer"
                   currentcolor={background}>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
            </Switch>
        </Container>
    );
};

/* CSS - Does the color transition for backgrounds */
const Container = styled.div`
  transition: background-color 0.6s ease-out;
  background-color: ${props => props.currentcolor};
`;

export default App;
