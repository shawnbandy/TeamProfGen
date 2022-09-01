const Engineer = require("../Engineer");
const engineer = new Engineer("name", "123", "email", "github")

describe('Engineer', () => {
    describe('getName', () => {
        it('should console.log the name of the employee', () => {
            expect(engineer.getName()).toEqual('name')
        })
        it('should always return a string', () =>{
            expect(typeof engineer.getName()).toEqual('string')
        })
    })
    describe('getID', () =>{
        it('should return the number', () =>{
            expect(engineer.getID()).toEqual(123)
        })
        it('should be a number', () =>{
            expect(typeof engineer.getID()).toEqual("number");
        })
    })
    describe('getEmail', () =>{
        it('should return the email', () =>{
            expect(engineer.getEmail()).toEqual("email")
        })
        it('should be a string', () =>{
            expect(typeof engineer.getEmail()).toEqual("string");
        })
    })
    describe('getRole', () =>{
        it('should return the role ', () =>{
            expect(engineer.getRole()).toEqual("Engineer")
        })
        it('should be a string', () =>{
            expect(typeof engineer.getRole()).toEqual("string");
        })
    })
    describe('getGitHub', () =>{
        it('should return the role ', () =>{
            expect(engineer.getGitHub()).toEqual("github")
        })
        it('should be a string', () =>{
            expect(typeof engineer.getGitHub()).toEqual("string");
        })
    })
}) 