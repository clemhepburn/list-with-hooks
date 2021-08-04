import React, { useEffect, useState } from 'react';
import VillagersList from '../components/villagers/VillagersList';
import { fetchVillagers } from '../services/animalCrossingAPI.js';

const Villagers = () => {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const villagers = await fetchVillagers();
    setVillagers(villagers);
    setLoading(false);
  }, []);

  if(loading) return <h2>Loading...</h2>;
  return <VillagersList villagers={villagers} />;
};

export default Villagers;
