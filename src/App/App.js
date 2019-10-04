import React from 'react';
import { getAllStarships } from '../services/swapi';
import Main from '../Components/Main/Main';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  state = {
    starships: null,
  }

  getStarship = (idx) => {
    return this.state.starships[idx];
  }


  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({
      starships: starships.results,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
        <Switch>
          <Route exact path='/' render={() =>
            <section>
              {this.state.starships.map((starship, idx) =>
                <Link
                  to={`/starships/${idx}`}
                  key={starship.name}
                >
                  {starship.name}
                </Link>
              )}
            </section>
          } />
          <Route path='/starships/:idx' render={(props) =>
            <Main
              {...props}
              getStarship={this.getStarship}
            />
          } />
        </Switch>
      </div>
    );
  }

}

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//             <div>name={this.state.name}</div>
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     );


//   }
// }

// function App() {
//   return (

// }

export default App;
