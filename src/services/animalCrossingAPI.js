export const fetchVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const json = await res.json();
  return json;
};

export const fetchVillagersById = async (_id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`);
  const json = await res.json();
  return json;
};

