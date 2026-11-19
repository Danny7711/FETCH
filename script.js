fetch('	https://dummy.restapiexample.com/api/v1/employees')
 .then(response => response.json()) // Преобразуем ответ в JSON
           .then(data => {
               const employeeTable = document.getElementById('employee-table').getElementsByTagName('tbody')[0];
               data.data.forEach(employee => {
                   const row = document.createElement('tr');
                   const idCell = document.createElement('td');
                   idCell.textContent = employee.id;
                   row.appendChild(idCell);
                   const nameCell = document.createElement('td');
                   nameCell.textContent = employee.employee_name;
                   row.appendChild(nameCell);
                   const ageCell = document.createElement('td');
                   ageCell.textContent = employee.employee_age;
                   row.appendChild(ageCell);
                   const salaryCell = document.createElement('td');
                   salaryCell.textContent = employee.employee_salary;
                   row.appendChild(salaryCell);
                   employeeTable.appendChild(row);
               });
           })

 .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку
