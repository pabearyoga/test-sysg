const addFilterOptions = inputData => {
  // Розпарсити дані як масив об'єктів
  const data = JSON.parse(`[${inputData}]`);

  // Масив унікальних ключів DATA JSON
  const uniqueKeysSet = data[0].reduce((keys, obj) => {
    Object.keys(obj).forEach(key => keys.add(key));
    return keys;
  }, new Set());

  const uniqueKeysArray = [...uniqueKeysSet];

  // Оримуємо доступ до select 'filter' and 'sortBy'
  const filter = document.getElementById('filter');
  const sortBy = document.getElementById('sortBy');

  filter.innerHTML = '';
  sortBy.innerHTML = '';

  // Додаємо порожній option
  const optionFilter = document.createElement('option');
  const optionSortBy = document.createElement('option');
  optionFilter.value = '';
  optionSortBy.value = '';
  filter.appendChild(optionFilter);
  sortBy.appendChild(optionSortBy);

  // Додаємо option до filter and sortBy перебераючи масив унікальних ключів DATA JSON
  uniqueKeysArray.forEach(value => {
    const optionFilter = document.createElement('option');
    const optionSortBy = document.createElement('option');

    optionFilter.value = value;
    optionSortBy.value = value;

    optionFilter.textContent = value;
    optionSortBy.textContent = value;

    filter.appendChild(optionFilter);
    sortBy.appendChild(optionSortBy);
  });
};
