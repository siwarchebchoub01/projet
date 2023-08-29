import React, { Component } from 'react';
import './App.css';
import FullName from './fullname';
import Bio from './fileBio';
import Profession from './Profession';
import Img from './fileimg';
import Button from './Button';

class App extends Component {
  state = {
    person: {
      fullName: 'Siwar Chebchoub',
      bio: 'Frontend Developer',
      imgSrc: 'https://e7.pngegg.com/pngimages/439/19/png-clipart-avatar-user-profile-icon-women-wear-frock-face-holidays.png',
      profession: 'Developer'
    },
    show: false,
    intervalId: null,
    startTime: null,
    elapsedTime: 0
  };

  componentDidMount() {
    const intervalId = setInterval(this.updateTimeInterval, 1000);
    this.setState({
      intervalId,
      startTime: new Date().getTime()
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeInterval = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = Math.floor((currentTime - this.state.startTime) / 1000);
    this.setState({ elapsedTime });
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
        <Button onClick={this.toggleProfile} text="Toggle Profile" />

        {show && (
          <div className="profile">
            <FullName fullName={fullName} />
            <Bio bio={bio} />
            <Img imgSrc={imgSrc} />
            <Profession profession={profession} />
          </div>
        )}

        <p>Time interval since mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
