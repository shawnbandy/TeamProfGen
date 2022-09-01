const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office){
        const maniName = name;
        const maniId = id;
        const maniEmail = email;     
        const maniRole = "Manager"

        super(maniName, Number(maniId), maniEmail, maniRole)

        this.office = Number(office)

    }
    getOffice(){
        console.log(`Office is ${this.office}`);
    }
}

module.exports = Manager;