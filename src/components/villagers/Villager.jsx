import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Villager = ({ japaneseName, image, phrase, _id }) => (
  <figure>
    <Link to={`/villagers/${_id}`}>
      <img style={{ width: '100px' }} src={image} alt={japaneseName} />
      <figcaption>
        <span>{japaneseName}</span>
        <span>{phrase}</span>
      </figcaption>
    </Link>
  </figure>
);

Villager.propTypes = {
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  _id: PropTypes.string,
};

export default Villager;
