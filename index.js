const { getAllEmployees } = require('./controller/controller');

// Get the table element from the HTML document
const table = document.getElementById('employee-table');

// Create a function to display the employee data in the table
const displayEmployees = (employees) => {
  // Clear any existing rows from the table
  table.innerHTML = '';

  // Create a table header row
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th>Name</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Designation</th>
    <th>Employee Type</th>
  `;
  table.appendChild(headerRow);

  // Create a row for each employee and append it to the table
  employees.forEach(employee => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>${employee.designation}</td>
      <td>${employee.employee_type}</td>
    `;
    table.appendChild(row);
  });
};

// Call the getAllEmployees function and display the data in the table
getAllEmployees().then(employees => {
  displayEmployees(employees);
}).catch(error => {
  console.error('Error getting employees:', error);
});
