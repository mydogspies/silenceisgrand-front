import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

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
            <div className='appContainer' style={{
                backgroundColor: this.props.currentBackground
            }}>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentBackground: state.style.currentBackground
});

export default connect(mapStateToProps)(App);
