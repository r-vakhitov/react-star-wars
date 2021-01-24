import React from 'react';
import withSwapiService from '../hoc-helpers/withSwapiService';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage} >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
};

export default withSwapiService(PersonDetails);