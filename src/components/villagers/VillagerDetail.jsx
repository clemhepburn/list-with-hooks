import React, { useState, useEffect } from 'react';
import { fetchVillagersById } from '../../services/animalCrossingAPI.js';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const VillagerDetail = ({ props }) => {
  const [villager, setVillager] = useState([]);
  const { _id } = useParams();
  console.log(props);

  useEffect(() => {
    fetchVillagersById(_id)
      .then(res => setVillager(res));
  }, [_id]);

  return (
    <div className="villager-detail">
      <h2>{villager.japaneseName}</h2>
      <img src={villager.image} alt={villager.japaneseName} />
      <span>{villager.phrase}</span>
    </div>
  );
};

VillagerDetail.propTypes = {
  props: PropTypes.any
};

export default VillagerDetail;
