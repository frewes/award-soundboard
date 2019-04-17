import React, { Component } from 'react';
import manifest from './manifest.json';
import './App.css';
import Track from './Track.js';
import { Container, Button } from 'reactstrap';

export default class ScriptHandler extends Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.state = { previewImgUrl: null };
	  this.onChangeHandler = this.onChangeHandler.bind(this);
	  this.generatePreviewImgUrl = this.generatePreviewImgUrl.bind(this);
	}

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

		this.generatePreviewImgUrl(file, previewImgUrl => {
		// (assuming we use React)
		this.setState({ previewImgUrl })
		})
		this.props.handleUpload(true);
	}

	render() {
		return (
			<Container>
				<input hidden type="file" id="script-file" name="file" onChange={this.onChangeHandler}/>
				<label for="script-file">
					{(this.state.previewImgUrl != null) ? 
						<img src={this.state.previewImgUrl}/> :
						'Upload script!'}
				</label>
			</Container>
		);
	}
}