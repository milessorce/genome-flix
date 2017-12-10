import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import PreferenceFlow from './preferenceFlow.jsx';
import Header from './header.jsx';
import MovieList from './movieList.jsx';

class Home extends Component {
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
    return (
      <div>      
        <Header />
        <PreferenceFlow />
      </div>
    );
    // return (
    //   <div className="App">
    //     <MovieList />
    //   </div>
    // );
  }
}

export default Home;
