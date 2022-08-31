// TODO: have name, id, email properties
// TODO have getName, getID, getEmail, getRole function



class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    getName(){
        console.log(`Name of this employee is ${this.name}`)
    }

    getID(){
        console.log(`Name of this employee is ${this.id}`)
    }

    getEmail(){
        console.log(`Name of this employee is ${this.email}`)
    }

    getRole(){
        return this.role;
    }

}





module.exports = Employee;