// import generateAsteroidLocation from './generateAsteroidLocation.mjs';

// Відстань між двома точками в тривимірному просторі
const calculateDistance = (point1, point2) => {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  const dz = point1.z - point2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

// Знайдемо астероїд та витратимо найменшу кількість зондів
const findAsteroidLocation = location => {
  if (!location) {
    return null;
  }

  const asteroidLocation = location;
  let numProbes = 0;
  const probesCoordinates = [];

  while (true) {
    // Генеруємо координати зонда
    const probeLocation = generateAsteroidLocation();
    numProbes++;
    probesCoordinates.push(probeLocation);

    // Пораховуємо відстань від зонда до астероїда
    const probeDistance = calculateDistance(probeLocation, asteroidLocation);

    // Якщо відстань менша за 1, то знаємо, що зонд підпав під астероїд
    if (probeDistance < 1) {
      break;
    }
  }

  const result = {
    result: {
      location: asteroidLocation,
      probes: {
        count: numProbes,
        coordinates: probesCoordinates,
      },
    },
  };

  return result;
};

// Виклик функції для знаходження астероїда
// const result = findAsteroidLocation();
// console.log(result);
