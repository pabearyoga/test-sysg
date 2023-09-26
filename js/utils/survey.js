const conductSurvey = config => {
  const paths = { number: 0, list: [] };

  const traverseQuestions = (answers, path = {}) => {
    const currentQuestion = Object.keys(config)[Object.keys(path).length];
    const possibleAnswers = config[currentQuestion];

    for (const answer of possibleAnswers) {
      const newPath = { ...path, [`-> ${currentQuestion}`]: answer };

      if (Object.keys(newPath).length === Object.keys(config).length) {
        // Досягли кінця опитування
        paths.number++;
        paths.list.push(newPath);
      } else {
        // Продовжуємо опитування
        traverseQuestions(answers, newPath);
      }
    }
  };

  traverseQuestions(config);
  return paths;
};

// // Конфігурація опитувальника (приклад)
// const surveyConfig = {
//   'What is your marital status?': ['Single', 'Married'],
//   'Are you planning on getting married next year?': ['Yes', 'No'],
//   'How long have you been married?': ['Less than a year', 'More than a year'],
//   'Have you celebrated your one year anniversary?': ['Yes', 'No'],
// };

// console.log(surveyConfig);
// // Виклик функції для проведення опитування
// const result = conductSurvey(surveyConfig);
// console.log(result.list);
