import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

export default class Track extends Component {
  render() {
    return (
      <tr>
	      <td>{this.props.track.name}</td>
	      <td><Button>Fade in</Button></td>
	      <td><Button>Fade out</Button></td>
      </tr>
	);
  }
}