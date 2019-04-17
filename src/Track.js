import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.click = this.click.bind(this);
    }

    click(evt) {
        console.log(evt);
        this.setState({selected: !this.state.selected});
    }

  render() {
    return (
      <tr className={this.state.selected ? "clicked" : ""} onClick={this.click}>
          <td>{this.props.track.title}</td>
          <td>{this.props.track.artist}</td>
          <td>{this.props.track.runtime} s</td>
      </tr>
	);
  }
}