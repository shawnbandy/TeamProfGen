const Intern = require("../Intern");
const intern = new Intern("name", "123", "email", "mercer")

describe('Intern', () => {
    describe('getName', () => {
        it('should console.log the name of the employee', () => {
            expect(intern.getName()).toEqual('name')
        })
        it('should always return a string', () =>{
            expect(typeof intern.getName()).toEqual('string')
        })
    })
    describe('getID', () =>{
        it('should return the number', () =>{
            expect(intern.getID()).toEqual(123)
        })
        it('should be a number', () =>{
            expect(typeof intern.getID()).toEqual("number");
        })
    })
    describe('getEmail', () =>{
        it('should return the email', () =>{
            expect(intern.getEmail()).toEqual("email")
        })
        it('should be a string', () =>{
            expect(typeof intern.getEmail()).toEqual("string");
        })
    })
    describe('getRole', () =>{
        it('should return the role ', () =>{
            expect(intern.getRole()).toEqual("Intern")
        })
        it('should be a string', () =>{
            expect(typeof intern.getRole()).toEqual("string");
        })
    })
    describe('getSchool', () =>{
        it('should return the school', () =>{
            expect(intern.getSchool()).toEqual("mercer")
        })
        it('should be a string', () =>{
            expect(typeof intern.getSchool()).toEqual("string");
        })
    })
}) 