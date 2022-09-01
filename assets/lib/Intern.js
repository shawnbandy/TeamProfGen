const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        const internName = name;
        const internId = id;
        const internEmail = email;     
        const internRole = "Intern"

        super(internName, Number(internId), internEmail, internRole)

        this.school = school

    }
    getSchool(){
        console.log(`School is ${this.school}`);
    }
}

module.exports = Intern;