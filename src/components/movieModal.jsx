import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'


class MovieModal extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }

  }

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.close}
        closeIcon={true}
      >
        <Modal.Header>{this.props.selectedMovie.title}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={this.props.selectedMovie.link} />
          <Modal.Description>
            <Header>{this.props.selectedMovie.title}</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.props.close} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}



export default MovieModal;
