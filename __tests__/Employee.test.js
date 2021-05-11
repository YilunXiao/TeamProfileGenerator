const Employee = require('../lib/Employee');

describe('Employee parent class', () => {
    it('Should be able to be created with a name id and email attribute', () => {
        const name = 'john';
        const id = '123';
        const email = 'abc@gmail.com';
        const employee = new Employee(name, id, email);
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    })

    it('Should have a method which gets the employees name', () => {
        const name = 'john';
        const id = '123';
        const email = 'abc@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.getName()).toEqual(name);
    })

    it('Should have a method which gets the employees ID', () => {
        const name = 'john';
        const id = '123';
        const email = 'abc@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.getId()).toEqual(id);
    })

    it('Should have a method which gets the employees email', () => {
        const name = 'john';
        const id = '123';
        const email = 'abc@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.getEmail()).toEqual(email);
    })

    it('Should have a method which gets the employees role', () => {
        const name = 'john';
        const id = '123';
        const email = 'abc@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.getRole()).toEqual('Employee');
    })
})