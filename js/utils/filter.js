// Функція для застосування правила "exclude"
const applyExcludeRule = (data, conditions) => {
  return data.filter(item => {
    for (const condition of conditions) {
      for (const key in condition) {
        if (item[key] === condition[key]) {
          return false;
        }
      }
    }
    return true;
  });
};

// Функція для застосування правила "include"
const applyIncludeRule = (data, conditions) => {
  return data.filter(item => {
    for (const condition of conditions) {
      let matchesAll = true;
      for (const key in condition) {
        if (item[key] !== condition[key]) {
          matchesAll = false;
          break;
        }
      }
      if (matchesAll) {
        return true;
      }
    }
    return false;
  });
};

// Функція для сортування даних за ключами
const sortByKeys = (data, keys) => {
  return data.sort((a, b) => {
    for (const key of keys) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    }
    return 0;
  });
};

// Основна функція для обробки вхідних даних
const processData = inputData => {
  try {
    const input = JSON.parse(inputData);
    const data = input.data;
    const condition = input.condition;
    let result = [...data];

    if (condition.exclude) {
      result = applyExcludeRule(result, condition.exclude);
    }

    if (condition.include) {
      result = applyIncludeRule(result, condition.include);
    }

    if (condition.sortBy) {
      result = sortByKeys(result, condition.sortBy);
    }

    return JSON.stringify(result);
  } catch (error) {
    return JSON.stringify({ error: error.message });
  }
};

// Приклад використання

// const inputJson = `{
//   "data": [
//     {"user": "mike@mail.com", "rating": 20, "disabled": false, "aaa": true},
//     {"user": "greg@mail.com", "rating": 14, "disabled": false, "aaa": true},
//     {"user": "john@mail.com", "rating": 25, "disabled": true, "aaa": false}
//   ],
//   "condition": {
//     "include": [{"aaa": true}],
//     "sortBy": ["rating"]
//   }
// }`;
// const result = processData(inputJson);
// console.log(result);
