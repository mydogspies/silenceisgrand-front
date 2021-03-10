import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import './App.scss';

import IndexPage from './pages/index/index-page';

class App extends React.Component {

    componentDidMount() {

        // window.addEventListener('scroll', this.onScroll);


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

        // window.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        // console.log(window.scrollY);
    }

    render() {

        return (
            <Container className='appContainer' currentcolor={this.props.currentBackground}>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                </Switch>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    currentBackground: state.style.currentBackground
});

const Container = styled.div`
  transition: background-color 0.6s ease-out;
  background-color: ${props => props.currentcolor};
`

export default connect(mapStateToProps)(App);
