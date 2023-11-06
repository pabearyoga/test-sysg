const fromOption = document.getElementById("fromUnit");
const toOption = document.getElementById("toUnit");

const optionList = Object.keys(units);

optionsList.map((option) => {
  console.log(option);

  const optionFromOption = document.createElement("option");
  optionFromOption.value = `${option}`;
  optionFromOption.textContent = `${option}`;

  const optionToOption = document.createElement("option");
  optionToOption.value = `${option}`;
  optionToOption.textContent = `${option}`;

  fromOption.appendChild(optionFromOption);
  toOption.appendChild(optionToOption);
});
