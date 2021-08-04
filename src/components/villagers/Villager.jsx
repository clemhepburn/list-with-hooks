import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ japaneseName, image, phrase }) => (
  <figure>
    <img src={image} alt={japaneseName} />
    <figcaption>
      <span>{japaneseName}</span>
      <span>{phrase}</span>
    </figcaption>
  </figure>
);

Villager.propTypes = {
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};

export default Villager;
