const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        const engiName = name;
        const engiId = id;
        const engiEmail = email;     
        const engiRole = "Engineer"

        super(engiName, Number(engiId), engiEmail, engiRole)

        this.gitHub = github

    }
    getGitHub(){
        return `${this.gitHub}`;
    }
}

module.exports = Engineer;