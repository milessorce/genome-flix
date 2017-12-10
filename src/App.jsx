import React, { Component } from 'react';
// import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import MenuBar from './components/menuBar.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Router>
          <Route exact={true} path='/' component={Home} />
        </Router>
      </div>
    );
    // return (
    //   <div className="App">
    //     <MovieList />
    //   </div>
    // );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
