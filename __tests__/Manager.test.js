const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Nick', 0, 'nick@gmail.com', 5);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('tests all functions of Manager class', () => {
    const manager = new Manager('Nick', 0, 'nick@gmail.com', 5);

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe('Manager');
});