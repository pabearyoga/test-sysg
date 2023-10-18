const addDistanceUnit = (unitName, unitValue) => {
  try {
    const fromOption = document.getElementById("fromUnit");
    const toOption = document.getElementById("toUnit");

    const optionsList = Array.from(fromOption.options);
    const optionValues = optionsList.map((option) => option.value);
    const contains = optionValues.includes(`${unitName}`);

    console.log(contains);

    const optionFromOption = document.createElement("option");
    optionFromOption.value = `${unitName}`;
    optionFromOption.textContent = `${unitValue}`;

    const optionToOption = document.createElement("option");
    optionToOption.value = `${unitName}`;
    optionToOption.textContent = `${unitValue}`;

    if (!contains) {
      fromOption.appendChild(optionFromOption);
      toOption.appendChild(optionToOption);
    } else return;
  } catch (error) {
    return error.message;
  }
};
