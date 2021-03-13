import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import {setScrollEvent} from "./redux/events/events.actions";

import './styles/global.scss';

import IndexPage from './pages/index/index-page';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.onScrollThrottle = _.throttle(this.onScroll, 500);
    }


    componentDidMount() {

        window.addEventListener('scroll', this.onScrollThrottle);


        // TODO DEV ONLY!
        // fetch('https://api.silenceisgrand.com/api/v1/devtests/60377db1828b6346b22e76ec')
        //     .then(response => response.json())
        //     .then(entries => this.setState({devtest: entries.data}))
        //     .catch(error => {
        //         console.log(error);
        //         const test = {
        //             testString: 'silenceisgrand.com 2021 all rights reserved',
        //         }
        //         this.setState({devtest: test})
        //     });

    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.onScrollThrottle);
    }

    onScroll = (e) => {
        // console.log(e.type)
        this.props.sendScrollEvent(e);
    }

    render() {

        return (
            <Container className='appContainer'
                       currentcolor={this.props.currentBackground}
                       onScroll={this.onScroll}>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                </Switch>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    currentBackground: state.styles.currentBackground
});

const mapDispatchToProps = dispatch => {
    return {
        sendScrollEvent: (e) => {
            dispatch(setScrollEvent(e))
        }
    }
};

/* CSS - Does the color transition for backgrounds */
const Container = styled.div`
  transition: background-color 0.6s ease-out;
  background-color: ${props => props.currentcolor};
`;

export default connect(mapStateToProps, mapDispatchToProps)(App);
