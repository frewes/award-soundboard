import React, { Component } from 'react';
import manifest from './manifest.json';
import './App.css';
import Track from './Track.js';
import { Container, Button } from 'reactstrap';

export default class ScriptViewer extends Component {
  init = (source, element) => {
    const iframe = document.createElement('iframe');
    console.log(element);
    iframe.src = `/pdfjs-1.9.426-dist/web/viewer.html?file=${source}`;
    iframe.width = '100%';
    iframe.height = '100%';

    element.appendChild(iframe);
  }
}