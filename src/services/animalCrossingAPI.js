export const fetchVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const json = await res.json();
  return json;
};

export const fetchVillagersById = async (id) => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers/:id');
  const json = await res.json();
  return json;
};

