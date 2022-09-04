const { create } = require('domain');
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const HTMLgen = require('./lib/HTMLgen');

// // TODO: will have to have a function that's recursive so inquirer is continually called to add people, but then have an option to quit
// // TODO: and then after making the individual, you can add them to an array and then iterate over the array when you're creating cards
// // TODO: add validation to the inq to make sure the user doesn't break it
// // TODO: make the HTML in another JS file
// // TODO: make HTML class test

//*team array will store objects. the objects will be the employee information 
const teamArray = [];

//*this will store the employee information as an HTML card
const teamHtmlArray = [];


//*this is the first thing the user gets when they run the application
const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the team manager?',
            name: 'managerName',
            validate: input => { return !input ? "Please enter your name" : true}
        },
    
        {
            type: 'input',
            message: 'What is the employee ID of the team manager?',
            name: 'managerID',
            validate: input => { return isNaN(input) ? "Please enter a number" : true; }
        },
        {
            type: 'input',
            message: 'What is the email of the team manager?',
            name: 'managerEmail',
            validate: input => { return !input ? "Please enter your email" : true}
        },
        {
            type: 'input',
            message: 'What is the office number of the team manager?',
            name: 'managerOffice',
            validate: input => { return isNaN(input) ? "Please enter a number" : true; }
        }
    ])
    .then((answers) =>{
        //*gets their answers, then makes a new Manager object with those answers
        const {managerName, managerID, managerEmail, managerOffice} = answers;
        const managerPerson = new Manager(managerName, managerID, managerEmail, managerOffice);
        console.log(`Manager email: ${managerPerson.getEmail()}\nManager ID: ${managerPerson.getID()}\nManager office: ${managerPerson.getOffice()}\nManager role: ${managerPerson.getRole()}`)
        //*pushes the manager to the array, always will be index 0
        teamArray.push(managerPerson);
    })

}

const createEmployee = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of the Employee?',
            name: 'employeeName',
            validate: input => { return !input ? "Please enter your name" : true}
        },
    
        {
            type: 'input',
            message: 'What is their employee ID?',
            name: 'employeeID',
            validate: input => { return isNaN(input) ? "Please enter a number" : true; }
        },

        {
            type: 'input',
            message: 'What is the email of the employee?',
            name: 'employeeEmail',
            validate: input => { return !input ? "Please enter your email" : true}
        },

    ])
    .then((answers) =>{
        //*creates a generic employee and then pushes it to the array
        const {employeeName, employeeID, employeeEmail} = answers;
        const employeePerson = new Employee(employeeName, employeeID, employeeEmail)
        console.log(`Employee email: ${employeePerson.getEmail()}\nEmployee ID: ${employeePerson.getID()}\nEmployee role: ${employeePerson.getRole()}`)
        teamArray.push(employeePerson);
    })
    .then(askForAnotherEmployee)
    //*the above will reroute to ask for another employee 
}

const createEngineer = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName',
            validate: input => { return !input ? "Please enter your name" : true}
        },
    
        {
            type: 'input',
            message: 'What is their employee ID?',
            name: 'engineerID',
            validate: input => { return isNaN(input) ? "Please enter a number" : true }
        },

        {
            type: 'input',
            message: 'What is the email of the engineer?',
            name: 'engineerEmail',
            validate: input => { return !input ? "Please enter your email" : true}
        },
        {
            type: 'input',
            message: 'What is the Github username of the engineer?',
            name: 'engineerGithub',
            validate: input => { return !input ? "Please enter your username" : true}
        }

    ])
    .then((answers) =>{
        //*creates an engineer and then pushes it to the array
        const {engineerName, engineerID, engineerEmail, engineerGithub} = answers;
        const engineerPerson = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub)
        console.log(`Engineer email: ${engineerPerson.getEmail()}\nEngineer ID: ${engineerPerson.getID()}\nEngineer github: ${engineerPerson.getGitHub()}\nEngineer role: ${engineerPerson.getRole()}`)
        teamArray.push(engineerPerson)
    })
    .then(askForAnotherEmployee)

}

const createIntern = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'internName',
            validate: input => { return !input ? "Please enter your name" : true}
        },
    
        {
            type: 'input',
            message: 'What is their employee ID?',
            name: 'internID',
            validate: input => { return isNaN(input) ? "Please enter a number" : true; }
        },

        {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'internEmail',
            validate: input => { return !input ? "Please enter your email" : true}
        },
        {
            type: 'input',
            message: 'What is the school this intern attends?',
            name: 'internSchool',
            validate: input => { return !input ? "Please enter your school" : true}
        }

    ])
    .then((answers) =>{
        //*creates an intern and then pushes it to the array
        const {internName, internID, internEmail, internSchool} = answers;
        const internPerson = new Intern(internName, internID, internEmail, internSchool);
        console.log(`Intern email: ${internPerson.getEmail()}\nIntern ID: ${internPerson.getID()}\nIntern school: ${internPerson.getSchool()}\nIntern role: ${internPerson.getRole()}`)
        teamArray.push(internPerson)
        
    })
    .then(askForAnotherEmployee)

}

const askForAnotherEmployee = () =>{
    //*this will prompt for an employee, and if yes, we reroute to the choose employee function
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: 'Add another employee?'
        }

    ])
    .then((answer) =>{
        if (answer.choice == true){
            chooseEmployee();
        } else {
            const htmlGen = new HTMLgen(teamArray);
            for (let i = 0; i < teamArray.length; i++){
                teamHtmlArray.push(htmlGen.cardGenerator(teamArray[i]))
            }
            //htmlGen.htmlGenerate(teamHtmlArray)
        }
    })
}

const chooseEmployee = () =>{
    //*asks for the type of employee to add, and then returns the function of that decision
    let choiceData;
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Please select the employee to add.',
            choices: ['Employee', 'Engineer', 'Intern'],
            name: 'choice'
        }
    ])
    .then((answer) =>{
        const {choice} = answer;
        switch (choice){
            case 'Employee' :
                choiceData = createEmployee()
                break;
            case 'Engineer' :
                choiceData = createEngineer()
                break;
            case 'Intern' :
                choiceData = createIntern()
                break;
        }
        return choiceData;
    })
}



createManager()
    .then(askForAnotherEmployee)

