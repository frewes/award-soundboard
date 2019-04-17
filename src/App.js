import React, { Component } from 'react';
import './App.css';
import TrackList from './TrackList';
import ScriptHandler from './ScriptHandler';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pdf : false };
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(success) {
    this.setState({pdf: success});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              Watch this space, and your tournament will instantly get more <i>Pizzazzz</i>.
              <br/>
              <br/>
            </Row>
            <Row>
              <Col>
                <TrackList />
              </Col>
              <Col>
                  <ScriptHandler handleUpload={this.handleUpload}/>
              </Col>
            </Row> 
          </Container>  
        </header>
      </div>
    );
  }
}

export default App;
