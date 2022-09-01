// TODO: have name, id, email properties
// TODO have getName, getID, getEmail, getRole function



class Employee {

    constructor(name, id, email, role){
        this.name = name;
        this.id = Number(id);
        this.email = email;
        this.role = role
    }

    getName(){
        return `${this.name}`
    }

    getID(){
        return Number(this.id)
    }

    getEmail(){
        return `${this.email}`
    }

    getRole(){
        return `${this.role}`
    }

}

module.exports = Employee;