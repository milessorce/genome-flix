import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Image } from 'semantic-ui-react'


class MovieEntry extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }

  }

  componentDidMount() {
    // axios.get('/reports')
    //   .then((data)=> {
    //     console.log(data);
    //   })
  }

  render() {
    return (
      <Grid.Column>
        <Image
          size='large'
          src={this.props.movie.link}
          onClick={() => {
            this.props.selectMovie(this.props.movie);
            this.props.openModal()
          }}
        />
      </Grid.Column>
    );
  }
}



export default MovieEntry;
