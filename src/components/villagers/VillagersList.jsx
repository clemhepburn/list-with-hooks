import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagersList = ({ villagers }) => {
  const villagerItems = villagers.map((villager) => (
    <li key={villager.id}>
      <Villager
        japaneseName={villager.japaneseName}
        image={villager.image}
        coffee={villager.coffee}
      />
    </li>
  ));

  return <ul>{villagerItems}</ul>;
};

VillagersList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    japaneseName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    coffee: PropTypes.string.isRequired,
  })).isRequired,
};

export default VillagersList;
