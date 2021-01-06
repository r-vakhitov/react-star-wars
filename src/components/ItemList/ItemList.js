import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { withData } from '../hoc-helpers';

import "./item-list.css";

const ItemList = () => {

  const {data, onPersonSelected, children: renderLabel} = props;

  const items = data.map((item) => {
    const { id } = item;

    const label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onPersonSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
}



const {getAllPeople} = new SwapiService();

export default withData(ItemList, getAllPeople);