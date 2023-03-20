// Write your solution in this file!
const employee = {
    name: "Sam",
    };
  
  function updateEmployeeWithKeyAndValue(employee,streetAddress, value ) {
    return {...employee,streetAddress: '11 Broadway'};
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = '12 Broadway';
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, name) {
    let newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }