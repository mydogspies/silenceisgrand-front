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
        // fetch('http://localhost:5000/api/v1/devtests/60377db1828b6346b22e76ec')
        //     .then(response => response.json())
        //     .then(entries => this.setState({devtest: entries.data}));

        // TODO DEV ONLY!
        const test = {
            testString: 'silenceisgrand.com 2021'
        }
        this.setState({devtest: test})
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
