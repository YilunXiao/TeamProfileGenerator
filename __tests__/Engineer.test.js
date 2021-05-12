const Engineer = require('../lib/Engineer');

describe('Engineer class object', () => {
    it('Should be able to be created with a name id and email attribute like the Employee class in addition to an office number', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const gitHub = 'DalinarKholin';
        const engineer = new Engineer(name, id, email, gitHub);
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.gitHub).toEqual(gitHub);
    })

    it('Should include Employee methods', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const gitHub = 'DalinarKholin';
        const engineer = new Engineer(name, id, email, gitHub);
        expect(engineer.getName()).toEqual(name);
        expect(engineer.getId()).toEqual(id);
        expect(engineer.getEmail()).toEqual(email);
    })

    it('Should override Employee method getRole() to return "Engineer" instead of "Employee"', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const gitHub = 'DalinarKholin';
        const engineer = new Engineer(name, id, email, gitHub);
        expect(engineer.getRole()).toEqual('Engineer');
    })

    it('Should have a method which returns the github name', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const gitHub = 'DalinarKholin';
        const engineer = new Engineer(name, id, email, gitHub);
        expect(engineer.getGithub()).toEqual(gitHub);
    })

})