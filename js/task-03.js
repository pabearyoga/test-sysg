const generateBnt = document.getElementById('generateBnt');
const locationX = document.getElementById('locationX');
const locationY = document.getElementById('locationY');
const locationZ = document.getElementById('locationZ');
const findBtn = document.getElementById('findBtn');
const asteroidLocation = document.getElementById('asteroidLocation');
const countProbes = document.getElementById('countProbes');

let locationAsteroid = null;

// Генеруємо локацію астероїда
const generateBntClick = () => {
  const generateLocation = generateAsteroidLocation();
  locationAsteroid = generateLocation;

  locationX.textContent = generateLocation.x;
  locationY.textContent = generateLocation.y;
  locationZ.textContent = generateLocation.z;
};

const findBtnClick = () => {
  try {
    const result = findAsteroidLocation(locationAsteroid); // Результат пошуку астероїда

    // Якщо не задано координати видась Not Found
    if (!result) {
      return renderDataList('[]');
    }

    const coordinate = result.result.location; // Координати астероїда
    const probes = result.result.probes.count; // К-сь використаних зондів
    const probesLocation = result.result.probes.coordinates; // Координати зандів
    const data = JSON.stringify(probesLocation); // Розпарсити дані (координати зондів) як масив об'єктів

    // Відображаємо дані результатів пошуку астероїда
    asteroidLocation.textContent = `(x: ${coordinate.x}, y: ${coordinate.y}, z: ${coordinate.z})`;
    countProbes.textContent = `${probes}`;

    renderDataList(data); // Рендеримо список координат всіх використаних зондів
  } catch (error) {
    console.log(error);
  }
};

generateBnt.addEventListener('click', generateBntClick);
findBtn.addEventListener('click', findBtnClick);
