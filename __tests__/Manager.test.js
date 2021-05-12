const Manager = require('../lib/Manager');

describe('Manager class object', () => {
    it('Should be able to be created with a name id and email attribute like the Employee class in addition to an office number', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const officeNumber = 404;
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);
    })

    it('Should include Employee methods', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const officeNumber = 404;
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.getName()).toEqual(name);
        expect(manager.getId()).toEqual(id);
        expect(manager.getEmail()).toEqual(email);
    })

    it('Should override Employee method getRole() to return "Manager" instead of "Employee"', () => {
        const name = 'john';
        const id = 123;
        const email = 'abc@gmail.com';
        const officeNumber = 404;
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.getRole()).toEqual('Manager');
    })

})