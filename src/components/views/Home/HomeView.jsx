import React, { Component } from 'react';

import './style.css';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="view-container container home-view-container">
        <p>Home Page</p>
      </div>
    );
  }
}

export default HomeView;
