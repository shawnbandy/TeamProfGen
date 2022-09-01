const Employee = require("../Employee");
const employee = new Employee("name", "123", "email", "employee");


describe('Employee', () => {
    describe('getName', () => {
        it('should console.log the name of the employee', () => {
            expect(employee.getName()).toEqual('name')
        })
        it('should always return a string', () =>{
            expect(typeof employee.getName()).toEqual('string')
        })
    })
    describe('getID', () =>{
        it('should return the number', () =>{
            expect(employee.getID()).toEqual(123)
        })
        it('should be a number', () =>{
            expect(typeof employee.getID()).toEqual("number");
        })
    })
    describe('getEmail', () =>{
        it('should return the email', () =>{
            expect(employee.getEmail()).toEqual("email")
        })
        it('should be a string', () =>{
            expect(typeof employee.getEmail()).toEqual("string");
        })
    })
    describe('getRole', () =>{
        it('should return the role ', () =>{
            expect(employee.getRole()).toEqual("employee")
        })
        it('should be a string', () =>{
            expect(typeof employee.getRole()).toEqual("string");
        })
    })
}) 