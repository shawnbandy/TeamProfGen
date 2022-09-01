// TODO: have name, id, email properties
// TODO have getName, getID, getEmail, getRole function



class Employee {

    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }

    getName(){
        console.log(`Name of this employee is ${this.name}`)
    }

    getID(){
        console.log(`ID of this employee is ${this.id}`)
    }

    getEmail(){
        console.log(`Email of this employee is ${this.email}`)
    }

    getRole(){
        console.log(`Role is ${this.role}`)
    }

}

module.exports = Employee;