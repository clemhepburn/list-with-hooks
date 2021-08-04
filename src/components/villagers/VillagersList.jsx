import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagersList = ({ villagers }) => {
  const villagerItems = villagers.map((villager) => (
    <li 
      style={{ 
        listStyleType: 'none', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', }} 
      key={villager._id}>
      <Villager
        japaneseName={villager.japaneseName}
        image={villager.image}
        phrase={villager.phrase}
      />
    </li>
  ));

  return <ul 
    style={{ display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      margin: '0',
      padding: '0' }}
  >{villagerItems}
  </ul>;
};

VillagersList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    japaneseName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired,
  })).isRequired,
};

export default VillagersList;
