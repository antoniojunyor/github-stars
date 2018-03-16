import React, { Component } from 'react';
import Services from '../services';

export default class App extends Component {
  componentDidMount() {
    Services.something();
  }

  render() {
    return (
      <div className="gs-app">
        app
      </div>
    );
  }
}
