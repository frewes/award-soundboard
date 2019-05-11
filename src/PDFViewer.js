import React, {Component} from 'react';
import {Document, Page, setOptions} from 'react-pdf';

export default class PDFViewer extends Component {
    state = {
        numPages: null,
    }

    onDocumentLoadSuccess = (document) => {
        const {numPages} = document;
        this.setState({
            numPages,
        });
    };


    render() {
        const {numPages} = this.state;

        return (
            <div className={'pdf'}>
                <Document
                    file={this.props.source}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    {[...Array(numPages).keys()].map(page => (
                        <Page key={page} pageNumber={page + 1}/>
                    ))}

                </Document>
            </div>
        );
    }
}