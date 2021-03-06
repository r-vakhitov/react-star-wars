import React, { Component } from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import "./app.css";
import ErrorIndicator from "../ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";

import ItemDetails from "../ItemDetails";
import ItemList from "../ItemList";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  state = {
    hasError: false,
  };

  swapiService = new SwapiService();

  componentDidCatch() {
    console.log("componentDidCathc()");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            >
              {(item) => item.name}
            </ItemList>
          </div>
          <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            >
              {(item) => item.name}
            </ItemList>
          </div>
          <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
