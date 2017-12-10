import React, { Component } from 'react';
// import logo from './logo.svg';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PreferenceFlow from './components/preferenceFlow.jsx';
import MenuBar from './components/menuBar.jsx';
import Header from './components/header.jsx';
import MovieList from './components/movieList.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }

  }

  componentDidMount() {
    axios.get('/reports')
      .then((data)=> {
        console.log(data);
      })
  }

  render() {
    // return (
    //   <div className="App">
    //     <MenuBar />
    //     <Header />
    //     <PreferenceFlow />
    //   </div>
    // );
    // return (
    //   <div className="App">
    //     <MovieList />
    //   </div>
    // );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
