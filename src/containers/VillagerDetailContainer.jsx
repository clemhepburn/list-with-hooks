import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import VillagerDetail from '../components/villagers/VillagerDetail';
import { fetchVillagersById } from '../services/animalCrossingAPI';

const DetailPage = props => {
  const [villager, setVillager] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);

    fetchVillagersById(props.match.params._id)
      .then(setVillager)
      .finally(() => setLoading(false));

  }, []);

  return <div className="DetailPage">
    {loading ? <h3>Loading ~_~</h3> : <VillagerDetail villager={villager} />}
  </div>

};

DetailPage.propTypes = {
  match: propTypes.object.isRequired
};

export default DetailPage;
