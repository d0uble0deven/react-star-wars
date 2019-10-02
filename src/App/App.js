import React from 'react';
import logo from './logo.svg';
import { getAllStarships } from '../services/swapi'
import './App.css';

class App extends React.Component {

  state = {
    name: null,
  }


  async componentDidMount() {
    const starships = await getAllStarships(name);

    this.setState({
      name,
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <div>name={this.state.name}</div>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );


  }
}

// function App() {
//   return (

// }

export default App;
