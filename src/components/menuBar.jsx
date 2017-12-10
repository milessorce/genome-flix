import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, Route, browserHistory } from 'react-router-dom';
import MovieList from './movieList.jsx';
// import SearchBar from './searchBar';

const MenuBar = props => (
  <div className='menu-container'>
    <Menu style={{background: '#121212'}}>
      <p>Geneflix</p>
    </Menu>
    <Route path='/recommendations' component={MovieList} /> 
  </div>
);

export default MenuBar;
