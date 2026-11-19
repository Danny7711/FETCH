fetch('https://api.example.com/data')
 .then(response => response.json()) // Преобразуем ответ в JSON
 .then(data => console.log(data))    // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку
