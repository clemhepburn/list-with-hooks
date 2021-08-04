import React from 'react';
import PropTypes from 'prop-types';


const Villager = ({ japaneseName, image, phrase, _id }) => (
  <figure>
    <a href={`/villagers/${_id}`}>
      <img style={{ width: '100px' }} src={image} alt={japaneseName} />
      <figcaption>
        <span>{japaneseName}</span>
        <span>{phrase}</span>
      </figcaption>
    </a>
  </figure>
);

Villager.propTypes = {
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  _id: PropTypes.string,
};

export default Villager;
