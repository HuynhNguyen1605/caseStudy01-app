// Tạo mảng NV
const employees = [];

// Add NV to list
function addEmployees() {
  const employeeCountInput = document.getElementById("employeeCount");
  const count = parseInt(employeeCountInput.value);

  // Kiểm tra đầu vào phải lớn hơn 0
  if (isNaN(count) || count <= 0) {
    alert("Số lượng nhân viên không hợp lệ!");
    return;
  }

  // Tạo DSNV
  for (let i = 0; i < count; i++) {
    const id = employees.length + 1;
    const fullName = prompt(`Nhập tên đầy đủ của nhân viên ${id}:`);
    const baseSalary = parseFloat(
      prompt(`Nhập lương cơ bản của nhân viên ${id}:`)
    );
    const productQuantity = parseInt(
      prompt(`Nhập số lượng sản phẩm của nhân viên ${id}:`)
    );

    const productSalary = 100;

    const employee = {
      id,
      fullName,
      baseSalary,
      productSalary,
      productQuantity,
    };

    employees.push(employee);
  }

  displayEmployees();
}

function displayEmployees() {
  const employeeList = document.getElementById("employeeList");
  //Xoá DSNV cũ
  employeeList.innerHTML = "";

  // Bảng DSNV
  const table = document.createElement("table");
  table.innerHTML = `<tr>
                        <th>ID</th>
                        <th>Tên đầy đủ</th>
                        <th>Lương cơ bản</th>
                        <th>Lương sản phẩm</th>
                        <th>Số lượng sản phẩm</th>
                        <th>Tổng lương</th>
                     </tr>`;

  //Thêm TTNV
  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${employee.id}</td>
                     <td>${employee.fullName}</td>
                     <td>${employee.baseSalary}</td>
                     <td>${employee.productSalary}</td>
                     <td>${employee.productQuantity}</td>
                     <td id="result${employee.id}"></td>`;

    //Hiển thị tổng lương
    const total = calculateTotalSalary(employee);
    const resultDiv = row.querySelector(`#result${employee.id}`);
    resultDiv.innerHTML = `<p><strong>Tổng lương:</strong> ${total.toFixed(
      3
    )} VND</p>`;

    table.appendChild(row);
  });

  employeeList.appendChild(table);
}

//Hàm tính tổng lương nhân viên
function calculateTotalSalary(employee) {
  const baseSalary = employee.baseSalary;
  const productQuantity = employee.productQuantity;
  const productSalary = 100;

  let salary = baseSalary + productSalary * productQuantity;

  if (productQuantity < 50) {
    salary *= 0.9;
  } else if (productQuantity > 50) {
    const extraProduct = productQuantity - 50;

    salary += extraProduct * productSalary * 0.1;
  }

  return salary;
}

//Sắp xếp NV
const sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", sortEmployeesBySalary);

function sortEmployeesBySalary() {
  employees.sort((a, b) => {
    const salaryA = calculateTotalSalary(a);
    const salaryB = calculateTotalSalary(b);

    return salaryA - salaryB;
  });

  displayEmployees();
}

//Xoá nhân viên
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", deleteEmployee);

function deleteEmployee() {
  const employeeIdToDelete = parseInt(
    prompt("Nhập ID của nhân viên muốn xóa:")
  );

  const indexToDelete = employees.findIndex(
    (employee) => employee.id === employeeIdToDelete
  );

  if (indexToDelete !== -1) {
    employees.splice(indexToDelete, 1);

    displayEmployees();
  } else {
    alert("Xoá không thành công!");
  }
}

//Sửa thông tin nhân viên
const editButton = document.getElementById("editButton");
editButton.addEventListener("click", editEmployee);

function editEmployee() {
  const employeeIdToEdit = parseInt(prompt("Nhập ID của nhân viên muốn sửa: "));

  const indexToEdit = employees.findIndex(
    (employee) => employee.id === employeeIdToEdit
  );

  if (indexToEdit !== -1) {
    employees.fullName = prompt("Nhập tên mới cho nhân viên: ");
    employees.baseSalary = prompt("Nhập lương cơ bản mới cho nhân viên: ");
    employees.productQuantity = prompt(
      "Nhập số lượng sản phẩm mới cho nhân viên: "
    );

    displayEmployees();
  } else {
    alert("Sửa thông tin nhân viên không thành công!");
  }
}

//Tìm kiếm nhân viên có tổng lương cao nhất

function findMaxSalaryEmployee(employeesList) {
  // employeesList;
}
