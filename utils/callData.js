const callData = async () => {
  const res = await fetch("../data/Data.json");
  return res.json();
};
