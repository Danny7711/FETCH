

fetch('https://dummy.restapiexample.com/api/v1/create', {
 method: 'POST', // Указываем метод
 headers: {
   'Content-Type': 'application/json' // Указываем тип данных
 },
 body: JSON.stringify(data) // Преобразуем объект в JSON-строку
})
 .then(response => response.json())
 .then(data => console.log('Успех:', data))
 .catch(error => console.error('Ошибка:', error));
