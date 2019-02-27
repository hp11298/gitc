/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.scss';
import Message from './Message';

class App extends Component {
  
  render() {
    const re="container";
    return (
      
      <div className="App">
      
        <div className={re}>
          <div className="textContainer">
            <div className="title">{this.props.title}</div>
            <div className="subtitle">{this.props.subtitle}</div>
          </div>
          <div className="imageContainer"><img alt="" src={this.props.imageSrc} /></div>
        </div>
        <div className="largeContainer">
          <div className="largeContainer__imageContainer"><img alt="" src={this.props.imageSrc} /></div>
          <div className="text">
            <div className="largeContainer__textContainer">
              <div className="title">{this.props.title}</div>
              <div className="subtitle">{this.props.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
App.defaultProps = { title: 'Title ', subtitle: 'Subtitle ' };
export default App;

