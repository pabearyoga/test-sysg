const configurationForm = document.getElementById('configurationForm');
const configurationData = document.getElementById('configurationData');
const pathsNumber = document.getElementById('pathsNumber');

console.log('test4');

const configurationFormSubmit = event => {
  try {
    event.preventDefault();
    const inputData = configurationData.value.trim(); // Отримати дані з textarea
    const surveyConfig = JSON.parse(`{${inputData}}`); // Перетворюємо дані конфігурації у JSON формат

    const result = conductSurvey(surveyConfig); // Розраховуємо к-сть всіх можливих шляхів опитувань та всіма можливими послідовностями запитань з відповідями

    pathsNumber.textContent = `${result.number}`; // Відображаємо к-сть всіх можливих шляхів опитувань

    const data = JSON.stringify(result.list); // Розпарсити дані як масив об'єктів

    renderDataList(data); // Рендеримо список всіх можливих послідовностей запитань з відповідями
  } catch (error) {
    console.log(error);
  }
};

configurationForm.addEventListener('submit', configurationFormSubmit);
