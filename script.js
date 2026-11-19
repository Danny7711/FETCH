// fetch('	https://dummy.restapiexample.com/api/v1/employees')
//  .then(response => response.json()) // Преобразуем ответ в JSON
//            .then(data => {
//                const employeeTable = document.getElementById('employee-table').getElementsByTagName('tbody')[0];
//                data.data.forEach(employee => {
//                    const row = document.createElement('tr');
//                    const idCell = document.createElement('td');
//                    idCell.textContent = employee.id;
//                    row.appendChild(idCell);
//                    const nameCell = document.createElement('td');
//                    nameCell.textContent = employee.employee_name;
//                    row.appendChild(nameCell);
//                    const ageCell = document.createElement('td');
//                    ageCell.textContent = employee.employee_age;
//                    row.appendChild(ageCell);
//                    const salaryCell = document.createElement('td');
//                    salaryCell.textContent = employee.employee_salary;
//                    row.appendChild(salaryCell);
//                    employeeTable.appendChild(row);
//                });
//            })

//  .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку

 const data = { username: 'john_doe', salary: '400000', age:'31' };

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
