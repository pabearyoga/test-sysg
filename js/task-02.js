const addListForm = document.getElementById("addListForm");
const dataTextarea = document.getElementById("data");
const filterListForm = document.getElementById("filterListForm");
const condition = document.getElementById("condition");
const filter = document.getElementById("filter");
const filterValue = document.getElementById("filterValue");
const sortBy = document.getElementById("sortBy");
const check = document.getElementById("check");

const addListFormSubmit = (event) => {
  event.preventDefault();
  const inputData = dataTextarea.value.trim(); // Отримати дані з textarea

  addFilterOptions(inputData); // Додаємо option до filter та sortBy на основі даних з textarea
  renderDataList(inputData); // Рендеримо список
};

const filterListFormSubmit = (event) => {
  event.preventDefault();

  const inputJson = `{
  "data": ${dataTextarea.value},
  "condition": {
    "${condition.value}": [{"${filter.value}": "${filterValue.value}"}], "sortBy": ["${sortBy.value}"]
  }
}`;

  const result = processData(inputJson); // Фільтуємо список
  renderDataList(result); // Рендеримо список
};

addListForm.addEventListener("submit", addListFormSubmit);
filterListForm.addEventListener("submit", filterListFormSubmit);

//check start
const handleClick = (event) => {
  console.log(event.target.name);
};

//check
check.addEventListener("click", handleClick);
