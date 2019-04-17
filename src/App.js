import React, { Component } from 'react';
import './App.css';
import TrackList from './TrackList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Watch this space, and your tournament will instantly get more <i>Pizzazzz</i>.
            <br/>
            <br/>
            <TrackList />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
