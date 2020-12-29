import React, { Component } from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import Row from "../Row";
import StarshipDetails from "../StarshipDetails";

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
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <div>
        <Header />
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
