import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Image } from 'semantic-ui-react'
import MovieEntry from './movieEntry.jsx';
import MovieModal from './movieModal.jsx';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      movies: [
        {
          title: 'The Titanic',
          description: "",
          link: 'http://img.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg'
        },

        {
          title: 'Lord of the Rings',
          description: "",
          link: 'https://imgc.allpostersimages.com/img/posters/lord-of-the-rings-fellowship-of-the-ring_u-L-F5602Z0.jpg'
        },

        {
          title: 'GoodFellas',
          description: "",
          link: 'http://imgc.allpostersimages.com/img/posters/goodfellas-movie-murderers-come-with-smiles-poster-print_u-L-F57P3N0.jpg'
        }

        ],

      selectedMovie:
        {
          title: 'Ocean\'s Eleven',
          description: "",
          link: 'https://www.movieposter.com/posters/archive/main/186/MPW-93256'
        },

      open: false,
    }
    this.selectMovie = this.selectMovie.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // axios.get('/reports')
    //   .then((data)=> {
    //     console.log(data);
    //   })
  }

  selectMovie(movie) {
    this.setState({
      selectedMovie: movie
    })
  }

  openModal() {
    this.setState({
      open: true
    });
    console.log('opening modal');
  }

   closeModal() {
    this.setState({
      open: false
    });
    console.log('closing modal');
  }

  render() {
    return (
      <div>
        <Grid columns={3} divided>
          <Grid.Row>

            {this.state.movies.map((movie, key) => {
              return <MovieEntry
                      movie={movie}
                      key={key}
                      selectMovie={this.selectMovie}
                      openModal={this.openModal}
                      closeModal={this.closeModal}
                    />
            })}

          </Grid.Row>
        </Grid>

        <MovieModal
          open={this.state.open}
          close={this.closeModal}
          selectedMovie={this.state.selectedMovie}
        />
      </div>
    );
  }
}



export default MovieList;
