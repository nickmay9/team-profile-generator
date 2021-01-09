const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Nick', 0, 'nick@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('tests all functions of Employee class', () => {
    const employee = new Employee('Nick', 0, 'nick@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee');
});