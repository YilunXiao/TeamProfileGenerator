const Intern = require('../lib/Intern');

describe('Intern class object', () => {
    it('Should be able to be created with a name id and email attribute like the Employee class in addition to an office number', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const school = 'NYU';
        const intern = new Intern(name, id, email, school);
        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
    })

    it('Should include Employee methods', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const school = 'NYU';
        const intern = new Intern(name, id, email, school);
        expect(intern.getName()).toEqual(name);
        expect(intern.getId()).toEqual(id);
        expect(intern.getEmail()).toEqual(email);
    })

    it('Should override Employee method getRole() to return "Intern" instead of "Employee"', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const school = 'NYU';
        const intern = new Intern(name, id, email, school);
        expect(intern.getRole()).toEqual('Intern');
    })

    it('Should have a method which returns the school attribute', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const school = 'NYU';
        const intern = new Intern(name, id, email, school);
        expect(intern.getSchool()).toEqual(school);
    })

})