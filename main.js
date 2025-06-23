// Предположим, что твой JSON уже загружен в переменную data
const data = require('./data/id.json'); // замени на свой путь
const fs = require('fs');

// Создаём Set для хранения уникальных ID
const uniqueContributors = new Set();

// Проходим по каждому объекту
data.forEach(item => {
  if (Array.isArray(item.contributor_ids)) {
    item.contributor_ids.forEach(id => uniqueContributors.add(id));
  }
});

// Преобразуем Set обратно в массив (если нужно)
const uniqueContributorsArray = Array.from(uniqueContributors);

// Выводим результат
console.log(uniqueContributorsArray, 'файл unique_contributors.txt успешно создан');
fs.writeFileSync('unique_contributors.txt', uniqueContributorsArray.join('\n'), 'utf-8');

