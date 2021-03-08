import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import IndexPage from './pages/index/index-page';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // devtest: [] // TODO dev only
            windowSize: ''
        };
    }



    componentDidMount() {



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

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                </Switch>
            </div>
        )
    }
}

export default App;
