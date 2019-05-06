import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            runtime: this.props.track.runtime,
            selected: false,
            playing: false,
            volume: 50
        };
        this.click = this.click.bind(this);
        this.playSound = this.playSound.bind(this);
        this.stopSound = this.stopSound.bind(this);
        this.updateRuntime = this.updateRuntime.bind(this);
    }

    click(evt) {
        console.log(this.props.track);
        if (this.state.selected) 
          this.stopSound();
        else
          this.playSound();
        this.setState({selected: !this.state.selected});
    }

    playSound() {
      this.setState({playing: true});
    }

    stopSound() {
      this.setState({playing: false});
    }

    updateRuntime(evt) {
      this.setState({runtime: Math.round((evt.duration - evt.position)/1000)})
    }

  render() {
    return (
      <tr className={this.state.selected ? "clicked" : ""} onClick={this.click}>
          <td>{this.props.track.title}</td>
          <td>{this.props.track.artist}</td>
          <td>{this.state.runtime} s</td>
          <Sound
            url={this.props.track.path}
            playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
            volume={this.state.volume}
            autoLoad={true}
            onPlaying={this.updateRuntime}
          />
      </tr>
	);
  }
}