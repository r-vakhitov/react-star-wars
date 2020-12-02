import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './app.css';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';

export default class App extends Component {

  state = {
    hasError: false
  };



  componentDidCatch() {
    console.log('componentDidCathc()');
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />
      </div>
    );
  }
};
