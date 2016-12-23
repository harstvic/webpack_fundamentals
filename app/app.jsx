import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {secondsElapsed: 0};
  }

  tick = () => this.setState({secondsElapsed: this.state.secondsElapsed + 1});

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>It's the final countdown</h3>
        <p>Seconds Elapse: {this.state.secondsElapsed}</p>
      </div>
    );
  }
};

ReactDOM.render(
  <Timer />,
  document.querySelector('#Timer')
);

console.log('App loaded');

var config = require('./config/config.json');

console.log(config.app_loaded_message);

var img = document.createElement('img');
img.style.height = "100%";
img.style.width = "100%";
img.src = require('./images/webpack_logo.png');

document.querySelector('#my-info').appendChild(img);

require('./styles/css/foundation.css');
require('./styles/css/app.css');
require('./styles/sass/app.scss');
require('./styles/less/app.less');

console.log('App loaded');
$('#testHeadText').text('jQuery modified this content(see app.js)');

import { login } from './components/login';

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.write("Welcome to Big Hair Concerts!!!");
//
// console.log('App jsx loaded');
//
// login('admin', 'radical');
//
// ReactDOM.render(
//   <h1>Hello world</h1>,
//   document.querySelector('#app')
// );
