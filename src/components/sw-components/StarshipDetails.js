import React from "react";
import withSwapiService from "../hoc-helpers/withSwapiService";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
