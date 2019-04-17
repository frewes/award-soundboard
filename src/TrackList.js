import React, { Component } from 'react';
import songs from './songs.json';
import './App.css';
import Track from './Track.js';
import { Container, Table } from 'reactstrap';

export default class TrackList extends Component {
  render() {
    return (
      <Container>
          <Table dark>
	        <tbody>
    	      {songs.map((x,idx) => <Track track={x} key={idx}/>)}
			</tbody>
          </Table>
      </Container>
    );
  }
}