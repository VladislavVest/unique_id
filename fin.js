const fs = require('fs');

// Читаем первый файл и очищаем строки
const file1 = fs.readFileSync('unique_contributors.txt', 'utf-8')
  .split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0);

// Читаем второй файл и очищаем строки
const file2 = fs.readFileSync('manual_list.txt', 'utf-8')
  .split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0);

// Создаем Set из второго файла для быстрого поиска
const setFile2 = new Set(file2);

// Фильтруем ID из первого файла, которых нет во втором
const diff = file1.filter(id => !setFile2.has(id));

// Выводим результат и записываем в файл
console.log(diff,'файл result.txt c id пользователей, которые не прошли экзамен, успешно создан');
fs.writeFileSync('result.txt', diff.join('\n'), 'utf-8');
