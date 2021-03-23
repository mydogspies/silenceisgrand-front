import React, {useEffect, useState, useRef} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';
import _ from 'lodash';

import {setViewHistory} from "./redux/events/events.actions";

import './styles/global.scss';

import IndexPage from './pages/index/index-page';
import AboutPage from "./pages/about/about";
import NavigatePage from "./pages/navigate/navigate";
import AboutButton from "./components/navigation/menu-about/menu-about";
import MenuNavigate from "./components/navigation/menu-navigate/menu-navigate";
import HomeButton from "./components/navigation/menu-home/menu-home";

const App = () => {

    /* Component visibility and color states*/
    const [background, setBackground] = useState();
    const [navigateVisibility, setNavigateVisibility] = useState('visible');
    const [aboutVisibility, setAboutVisibility] = useState('visible');
    const [homeVisibility, setHomeVisibility] = useState('hidden');

    /* redux store*/
    const dispatch = useDispatch();
    const styles = useSelector(state => state.styles);
    const events = useSelector(state => state.events);
    const currentBackground = styles.currentBackground;
    const currentVisibleComponent = events.currentVisibleComponent;
    const viewHistory = events.viewHistory;


    /* set background depending on visible component*/
    useEffect(() => {
        setBackground(currentBackground);
    }, [currentBackground]);

    /*set nav buttons depending on visible component*/
    useEffect(() => {

        if (currentVisibleComponent && _.last(viewHistory) !== currentVisibleComponent) {
            dispatch(setViewHistory(currentVisibleComponent));
        }

        setNavigateVisibility((currentVisibleComponent === 'navigate-page') ? 'hidden' : 'visible');
        setAboutVisibility((currentVisibleComponent === 'about-page') ? 'hidden' : 'visible');
        setHomeVisibility((currentVisibleComponent ==='index-top') ? 'hidden' : 'visible');

    }, [currentVisibleComponent]);

    return (
        <Container id="app-container" className="appContainer" currentcolor={background}>
            <HomeButton visibility={homeVisibility}/>
            <AboutButton visibility={aboutVisibility} />
            <MenuNavigate visibility={navigateVisibility} />
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/about-silenceisgrand" component={AboutPage} />
                <Route path="/navigate-the-site" component={NavigatePage} />
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
