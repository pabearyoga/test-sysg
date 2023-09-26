const generateAsteroidLocation = () => {
  const x = Math.floor(Math.random() * 101);
  const y = Math.floor(Math.random() * 101);
  const z = Math.floor(Math.random() * 101);
  return { x, y, z };
};
