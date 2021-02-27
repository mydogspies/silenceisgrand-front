import {Component} from 'react';
import DevPage from './pages/dev/devpage.component';

import ('./App.scss');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devtest: []
        };
    }

    // TODO must be changed to docker container
    componentDidMount() {
        fetch('https://api.silenceisgrand.com/api/v1/devtests/60377db1828b6346b22e76ec')
            .then(response => response.json())
            .then(entries => this.setState({devtest: entries.data}))
            .catch(error => {
                console.log(error);
                const test = {
                    testString: 'silenceisgrand.com 2021 all rights reserved',
                }
                this.setState({devtest: test})
            });

        // TODO DEV ONLY!
        // const test = {
        //     testString: 'silenceisgrand.com 2021'
        // }
        // this.setState({devtest: test})
    }

    render() {
        return (
            <div className="App dev-container">
                <DevPage devTest={this.state.devtest}/>
            </div>
        )
    }
}

export default App;
