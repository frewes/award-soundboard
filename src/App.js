import React, { Component } from 'react';
import './App.css';
import TrackList from './TrackList';
// import ScriptHandler from './ScriptHandler';
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
    let doPDF = false;
    // <ScriptHandler handleUpload={this.handleUpload}/>

    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              Award Soundboard
              <br/>
              <br/>
            </Row>
            <Row>
              <Col sm={doPDF ? 6 : 12}>
                <TrackList />
              </Col>
              {(doPDF) ? (
                <Col sm={6} xs={0}>
                </Col> 
              ) : "" }
            </Row> 
          </Container>  
        </header>
      </div>
    );
  }
}

export default App;
