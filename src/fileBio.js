import React, { Component } from 'react';

class Bio extends Component {
  render() {
    const { bio } = this.props;

    return <p>{bio}</p>;
  }
}

export default Bio;
