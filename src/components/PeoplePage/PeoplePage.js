import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../ErrorIndicator";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  };

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onPersonSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
