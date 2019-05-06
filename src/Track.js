import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            playing: false,
            volume: 50
        };
        this.click = this.click.bind(this);
    }

    click(evt) {
        console.log(this.props.track);
        this.setState({selected: !this.state.selected});
    }

    playSound() {
      this.setState({playing: true});
    }

    stopSound() {
      this.setState({playing: false});
    }

  render() {
    return (
      <tr className={this.state.selected ? "clicked" : ""} onClick={this.click}>
          <td>{this.props.track.title}</td>
          <td>{this.props.track.artist}</td>
          <td>{this.props.track.runtime} s</td>
          <Sound
            url={this.props.track.path}
            playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
            volume={this.state.volume}
            autoLoad={true}
          />
      </tr>
	);
  }
}