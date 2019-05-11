import React, {Component} from 'react';
import './App.css';
import TrackList from './TrackList';
// import ScriptHandler from './ScriptHandler';
import { Container, Row, Col } from 'reactstrap';
import Package from './package.alias.json';
import Tooltip from 'react-tooltip-lite';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pdf: false,
            tooltipOpen: false
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleUpload(success) {
        this.setState({pdf: success});
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        let doPDF = false;
        // <ScriptHandler handleUpload={this.handleUpload}/>
        const classes = 'tooltip-inner';

        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Tooltip background={"#bbb"} color={"#333"} content={"v"+Package.version}>Award Soundboard</Tooltip>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={doPDF ? 6 : 12}>
                                <TrackList/>
                            </Col>
                            {(doPDF) ? (
                                <Col sm={6} xs={0}>
                                </Col>
                            ) : ""}
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}

export default App;
