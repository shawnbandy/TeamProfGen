const Manager = require('../Manager');
const manager = new Manager("name", "123", "email", "321")

describe('Manager', () => {
    describe('getName', () => {
        it('should console.log the name of the employee', () => {
            expect(manager.getName()).toEqual('name')
        })
        it('should always return a string', () =>{
            expect(typeof manager.getName()).toEqual('string')
        })
    })
    describe('getID', () =>{
        it('should return the number', () =>{
            expect(manager.getID()).toEqual(123)
        })
        it('should be a number', () =>{
            expect(typeof manager.getID()).toEqual("number");
        })
    })
    describe('getEmail', () =>{
        it('should return the email', () =>{
            expect(manager.getEmail()).toEqual("email")
        })
        it('should be a string', () =>{
            expect(typeof manager.getEmail()).toEqual("string");
        })
    })
    describe('getRole', () =>{
        it('should return the role ', () =>{
            expect(manager.getRole()).toEqual("Manager")
        })
        it('should be a string', () =>{
            expect(typeof manager.getRole()).toEqual("string");
        })
    })
    describe('getOffice', () =>{
        it('should return the office', () =>{
            expect(manager.getOffice()).toEqual(321)
        })
        it('should be a string', () =>{
            expect(typeof manager.getOffice()).toEqual("number");
        })
    })
}) 