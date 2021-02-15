import {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/v1/test')
            .then(response => response.json())
            .then(entries => this.setState({data: entries.data}));
    }

    render() {
        return (
            <div className="App">
                {this.state.data.map(entry => (
                    <h1 key={entry._id}>{entry.name}</h1>
                ))}
            </div>
        )
    }
}

export default App;
