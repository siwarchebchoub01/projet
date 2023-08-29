import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick, text } = this.props;

    return (
      <button className="toggle-button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
