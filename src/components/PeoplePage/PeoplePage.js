import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
  };

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const itemList = (
      <ItemList
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
