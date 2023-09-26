const renderDataList = (inputData, currentPage = 1) => {
  try {
    const data = JSON.parse(`[${inputData}]`); // Розпарсити дані як масив об'єктів

    // Отримати початковий індекс та кінцевий індекс для поточної сторінки
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    // Отримуємо доступ до місця рендеру списка
    const resultDiv = document.querySelector('.result-list');
    resultDiv.innerHTML = '';
    resultDiv.classList.add('show');

    // title
    const title = document.createElement('p');
    title.classList.add('title');
    title.classList.add('center');
    title.textContent = 'Data List';

    //list
    const ul = document.createElement('ul');
    ul.classList.add('data-list');

    //list-item
    data[0].slice(startIndex, endIndex).map(item => {
      const li = document.createElement('li');
      li.classList.add('data-list-item');

      // Форматування масиву списку
      const entries = Object.entries(item);
      const a = entries.map(i => i.join(': ')).join(', ');

      li.textContent = `${a}`;
      ul.appendChild(li);
    });

    // Not Found
    const notFound = document.createElement('p');
    notFound.textContent = 'Not Found';
    notFound.classList.add('notFound');

    // Pagination
    const paginationWrapper = document.createElement('div');
    const nextBtn = document.createElement('button');
    const prevBnt = document.createElement('button');
    const crntPage = document.createElement('p');
    paginationWrapper.classList.add('pagination-wrapper', 'show');
    nextBtn.classList.add('pagination-btn');
    prevBnt.classList.add('pagination-btn');
    crntPage.classList.add('current-page');
    nextBtn.textContent = 'Next';
    prevBnt.textContent = 'Prev';
    crntPage.textContent = `${currentPage}`;

    // Додаємо обробник події для кнопки "Next"
    nextBtn.addEventListener('click', () => {
      currentPage++; // Збільшуємо поточну сторінку
      renderDataList(inputData, currentPage); // Відображаємо наступну сторінку
    });
    prevBnt.addEventListener('click', () => {
      currentPage--; // Зменшуємо поточну сторінку
      renderDataList(inputData, currentPage); // Відображаємо попередню сторінку
    });

    // Відобразити список на сторінці
    resultDiv.appendChild(title);
    resultDiv.appendChild(data[0].slice(startIndex, endIndex).length > 0 ? ul : notFound);
    paginationWrapper.appendChild(prevBnt);
    paginationWrapper.appendChild(crntPage);
    paginationWrapper.appendChild(nextBtn);
    resultDiv.appendChild(paginationWrapper);

    // hide paginationWrapper when show notFound
    if (resultDiv.contains(notFound)) {
      paginationWrapper.classList.remove('show');
    }

    // disabled "prevBnt"
    if (startIndex <= 0) {
      prevBnt.setAttribute('disabled', true);
    }
    // disabled "nextBtn"
    if (data[0].length < endIndex) {
      nextBtn.setAttribute('disabled', true);
    }
  } catch (error) {
    console.log(error);
  }
};
