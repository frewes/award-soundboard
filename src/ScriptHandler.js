import React, { Component } from 'react';
import manifest from './manifest.json';
import './App.css';
import PDFViewer from './PDFViewer.js';
import { Container, Button } from 'reactstrap';
import { Document, Page } from 'react-pdf';

export default class ScriptHandler extends Component {
	constructor(props) {
	  super(props);


	  // Don't call this.setState() here!
	  this.state = { 
	  	pdfURI: null,
	  	numPages: null 
	  };
	  this.onChangeHandler = this.onChangeHandler.bind(this);
	  this.generatePreviewImgUrl = this.generatePreviewImgUrl.bind(this);
	  this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
	}

    onDocumentLoadSuccess = (document) => {
      const { numPages } = document;
      this.setState({
        numPages: numPages,
      });
    };

	generatePreviewImgUrl(file, callback) {
		const reader = new FileReader()
		const url = reader.readAsDataURL(file)
		reader.onloadend = e => callback(reader.result)
	}

	onChangeHandler=event=>{
		const file = event.target.files[0]
		// User cancelled
		if (!file) {
			return
		}

		this.generatePreviewImgUrl(file, pdfURI => {
			// (assuming we use React)
			this.setState({ pdfURI })
		})
		this.props.handleUpload(true);
	}

	render() {
		return (
			<Container>
				<input hidden type="file" id="script-file" name="file" accept=".pdf" onChange={this.onChangeHandler}/>
					{(this.state.pdfURI) ? 
						<PDFViewer source={this.state.pdfURI}/> : 
						<label for="script-file">Upload script!</label>}
			</Container>
		);
	}
}