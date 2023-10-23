const addDistanceUnit = (unitName, unitValue) => {
  try {
    const fromOption = document.getElementById("fromUnit");
    const toOption = document.getElementById("toUnit");

    const optionsList = Array.from(fromOption.options);
    const optionValues = optionsList.map((option) => option.value);
    const contains = optionValues.includes(`${unitName}`);

    const optionFromOption = document.createElement("option");
    optionFromOption.value = `${unitName}`;
    optionFromOption.textContent = `${unitName}`;

    const optionToOption = document.createElement("option");
    optionToOption.value = `${unitName}`;
    optionToOption.textContent = `${unitName}`;

    console.log(unitValue);
    console.log(typeof Number(unitValue));

    units[`${unitName}`] = Number(unitValue);
    console.log(units);

    if (!contains) {
      fromOption.appendChild(optionFromOption);
      toOption.appendChild(optionToOption);
    } else return;
  } catch (error) {
    return error.message;
  }
};
