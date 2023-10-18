// Одиниці вимірювання в форматі JSON
const units = {
  m: 1.0,
  cm: 0.01,
  mm: 0.001,
  km: 1000.0,
  in: 0.0254,
  ft: 0.3048,
  yard: 0.9144,
  mile: 1609.3,
};

// Функція для конвертації одиниць вимірювання
const convertDistance = (inputData) => {
  try {
    const data = JSON.parse(inputData);
    const fromUnit = data.distance.unit;
    const value = data.distance.value;
    const toUnit = data.convertTo;

    const result = (value * units[fromUnit]) / units[toUnit];
    const roundedResult = Math.round(result * 100) / 100;

    const outputData = { unit: toUnit, value: roundedResult };
    return JSON.stringify(outputData);
  } catch (error) {}
};
