import React, { Component } from 'react';

class Profession extends Component {
  render() {
    const { profession } = this.props;

    return <p>Profession: {profession}</p>;
  }
}

export default Profession;
