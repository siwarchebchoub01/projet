import React, { Component } from 'react';

class Img extends Component {
  render() {
    const { imgSrc } = this.props;

    return <img className="profile-image" src={imgSrc} alt="Profile" />;
  }
}

export default Img;
