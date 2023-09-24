// Implementation of the employee object
let employee = {
    name: 'Sam',
  };
  
  // Function to update an employee with a new key-value pair (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
  
  // Function to destructively update an employee with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from a clone of the employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete a key from the employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Import the chai library for assertions
  const { expect } = require('chai');
  
  // Define the test suite
  describe('employees', function () {
    describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
      beforeEach(function () {
        // Reset the employee object
        employee = {
          name: 'Sam',
        };
      });
  
      it('returns an employee with the original key value pairs and the new key value pair', function () {
        const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
        expect(updatedEmployee).to.eql({
          name: 'Sam',
          streetAddress: '11 Broadway',
        });
      });
  
      it('does not modify the original employee, but rather returns a clone with the new data', function () {
        updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
        expect(employee['streetAddress']).to.equal(undefined);
      });
    });
  
    describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
      beforeEach(function () {
        // Reset the employee object
        employee = {
          name: 'Sam',
        };
      });
  
      it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
        const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
        expect(updatedEmployee).to.eql({
          name: 'Sam',
          streetAddress: '12 Broadway',
        });
  
        expect(employee).to.eql({
          name: 'Sam',
          streetAddress: '12 Broadway',
        });
      });
    });
  
    describe('deleteFromEmployeeByKey(employee, key)', function () {
      beforeEach(function () {
        // Reset the employee object
        employee = {
          name: 'Sam',
        };
      });
  
      it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
        const newEmployee = deleteFromEmployeeByKey(employee, 'name');
        expect(newEmployee['name']).to.equal(undefined);
        expect(typeof newEmployee).to.equal('object');
      });
  
      it('does not modify the original employee (it is non-destructive)', function () {
        deleteFromEmployeeByKey(employee, 'name');
        expect(employee['name']).to.equal('Sam');
      });
    });
  
    describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
      beforeEach(function () {
        // Reset the employee object
        employee = {
          name: 'Sam',
        };
      });
  
      it('returns employee without the deleted key/value pair', function () {
        const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
        expect(newEmployee['name']).to.equal(undefined);
      });
  
      it('modifies the original employee', function () {
        const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
        expect(employee['name']).to.equal(undefined);
        expect(employee).to.equal(newEmployee);
      });
    });
  });
  
