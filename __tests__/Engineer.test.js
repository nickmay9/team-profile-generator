const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Nick', 0, 'nick@gmail.com', 'nickmay9');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('tests all functions of Engineer class', () => {
    const engineer = new Engineer('Nick', 0, 'nick@gmail.com', 'nickmay9');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
});