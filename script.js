// 1 задание 
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Заголовок:", data.title);
        console.log("Текст поста:", data.body);
    })
    .catch(error => {
        console.log("Ошибка:", error);
    });
