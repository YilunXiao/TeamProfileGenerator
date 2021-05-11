const Employee = require('../lib/Employee');

describe('Employee parent class', () => {
    it('Should be able to be created with a name attribute', () => {
        const name = 'john';
        const employee = new Employee(name);
        expect(employee.name).toEqual(name);
    })
})