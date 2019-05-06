import React, { Component } from 'react';
import songs from './songs.json';
import './App.css';
import Track from './Track.js';
import { Container, Table } from 'reactstrap';

export default class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIdx: -1
    }
  }

  select(idx) {
    let val = (this.state.selectedIdx === idx ? -1 : idx)
    this.setState({selectedIdx: val});
  }

  render() {
    return (
      <Container>
          <Table dark>
	        <tbody>
    	      {songs.map((x,idx) => <Track track={x} key={idx}
                selectable={this.state.selectedIdx === -1 ? true : idx === this.state.selectedIdx}
                onSelect={() => this.select(idx)}/>)}
			</tbody>
          </Table>
      </Container>
    );
  }
}