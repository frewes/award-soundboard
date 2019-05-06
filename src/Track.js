import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
import { Button } from 'reactstrap';

export default class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runtime: this.props.track.runtime,
      selected: false,
      playing: false,
      volume: 50
    };
    this.cut = this.cut.bind(this);
    this.click = this.click.bind(this);
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.incVolume = this.incVolume.bind(this);
    this.decVolume = this.decVolume.bind(this);
    this.updateRuntime = this.updateRuntime.bind(this);
    this.changingVolume=false;
  }

  click(evt) {
    // Should check if anything else is selected.
    if (!this.props.selectable) return;
    console.log(this.props.track);
    if (this.changingVolume) return;
    if (this.state.selected) 
      this.decVolume();
    else
      this.playSound();
  }

  playSound() {
    this.setState({playing: true});
    this.incVolume();
    this.setState({selected: true});
    this.props.onSelect();
  }

  incVolume() {
    this.changingVolume = true;
    let v = this.state.volume+2;
    if (v < 100) setTimeout(this.incVolume,50);
    else this.changingVolume = false;
    this.setState({volume: v}); 
  }

  decVolume() {
    this.changingVolume = true;
    let v = this.state.volume-5;
    if (v > 0) setTimeout(this.decVolume,50);
    else {
      this.stopSound();
      this.changingVolume = false;
    }
    this.setState({volume: v}); 
  }

  stopSound() {
    this.setState({playing: false,selected: false,volume:0});
    this.props.onSelect();
  }

  updateRuntime(evt) {
    this.setState({runtime: Math.round((evt.duration - evt.position)/1000)})
  }


  cut() {
    this.stopSound();
  }


  sound() {
    return (
      <Sound
        url={this.props.track.path}
        playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
        volume={this.state.volume}
        autoLoad={true}
        onPlaying={this.updateRuntime}
      />
    );
  }

  trackDetails() {
    let cn = "";
    if (this.state.selected)
      cn = "clicked";
    else if (!this.props.selectable) 
      cn = "unclickable";

    return (
      <tr className={cn} onClick={this.click}>
        <td>{this.props.track.title}</td>
        <td>{this.props.track.artist}</td>
        <td>{this.state.runtime} s</td>
        {this.sound()}
      </tr>
    );
  }

  control() {
    return (
      <tr className={this.state.selected ? "clicked" : ""}>
        <td onClick={this.click}>{this.state.volume} %</td>
        <td onClick={this.click}>{this.state.runtime} s</td>
        <td><Button onClick={this.cut}>Cut out</Button></td>
        {this.sound()}
      </tr>
    );
  }

  render() {
    return this.state.playing ? this.control() : this.trackDetails();
  }
}