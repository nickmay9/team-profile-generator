const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Nick', 0, 'nick@gmail.com', 'UNF');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('tests all functions of Intern class', () => {
    const intern = new Intern('Nick', 0, 'nick@gmail.com', 'UNF');

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
});