import React, { Component } from 'react';
import manifest from './manifest.json';
import './App.css';
import Track from './Track.js';
import { Container, Table } from 'reactstrap';

export default class TrackList extends Component {
  render() {
    return (
      <Container>
          <Table dark>
	        <tbody>
    	      {manifest.map((x) => <Track track={x} key={x.id}/>)}
			</tbody>
          </Table>
      </Container>
    );
  }
}