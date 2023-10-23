// Форма conversionForm
const form = document.getElementById("conversionForm");

// Форма addUnitsForm
const addUnitsForm = document.getElementById("addUnitsForm");

// Функція для обробки події submit форми
const formSubmit = (event) => {
  try {
    event.preventDefault();

    // Отримуємо значення з полів форми
    const fromUnit = document.getElementById("fromUnit").value;
    const value = parseFloat(document.getElementById("value").value);
    const toUnit = document.getElementById("toUnit").value;

    // Конвертація форми
    const inputJson = `{"distance": {"unit": "${fromUnit}", "value": "${value}"}, "convertTo": "${toUnit}"}`;

    const result = convertDistance(inputJson);

    const data = JSON.parse(result);

    const resultUnit = data.unit;
    const resultValue = data.value;
    const formResultConversion = `${fromUnit}: ${value}`;
    const toResultConversion = `${resultUnit}: ${resultValue}`;

    document.getElementById("formResultConversion").textContent =
      formResultConversion;
    document.getElementById("toResultConversion").textContent =
      toResultConversion;
  } catch {
    return error.message;
  }
};

const addUnitsFormSubmit = (event) => {
  try {
    event.preventDefault();

    // Отримуємо значення з полів форми
    const unitName = document.getElementById("unitsName").value;
    const unitValue = document.getElementById("unitsValue").value;

    // Додаємо значення до списків опцій
    addDistanceUnit(unitName, unitValue);

    // Очищаємо форму
    addUnitsForm.reset();
  } catch {
    return error.message;
  }
};

form.addEventListener("submit", formSubmit);
addUnitsForm.addEventListener("submit", addUnitsFormSubmit);
