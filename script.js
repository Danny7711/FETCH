fetch('	https://dummy.restapiexample.com/api/v1/employees')
 .then(response => response.json()) // Преобразуем ответ в JSON
 .then(data => console.log(data))    // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку
