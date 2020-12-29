import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner";

import "./item-details.css";

export default class ItemDetails extends Component {
  state = {
    item: null,
    isLoading: false,
    image: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({
      isLoading: true,
    });

    getData(itemId).then((item) => {
      this.setState({
        item,
        isLoading: false,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!this.state.item) {
      return <span>Select a item from a list!</span>;
    }

    if (this.state.isLoading) {
      return <Spinner />;
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}