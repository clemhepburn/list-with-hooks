import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ japaneseName, image, coffee }) => (
  <figure>
    <img src={image} alt={japaneseName} />
    <figcaption>
      <span>{japaneseName}</span>
      <span>{coffee}</span>
    </figcaption>
  </figure>
);

Villager.propTypes = {
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  coffee: PropTypes.string.isRequired,
};

export default Villager;
