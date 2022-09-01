const { create } = require('domain');
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// TODO: probably will have to move all this to a separate JS file in the /lib
// TODO: will have to have a function that's recursive so inquirer is continually called to add people, but then have an option to quit
// TODO: create a promise function to wait for completion of the prompts
// TODO: probably should just immediately create the HTML elements, so that way I can append cards to it with the information
// TODO: and then after making the individual, you can add them to an array and then iterate over the array when you're creating cards


//!current issue is that when we get to the .then(), if there's more than one function, it doesn't wait for any of them to finish
inquirer.prompt([
    {
        type: 'input',
        message: 'test',
        name: 'test'
    }

])
.then((answer) =>{
    const manager = createManager();
       

})

const teamArray = [];

const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the team manager?',
            name: 'managerName'
        },
    
        {
            type: 'number',
            message: 'What is the employee ID of the team manager?',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'What is the email of the team manager?',
            name: 'managerEmail'
        },
        {
            type: 'number',
            message: 'What is the office number of the team manager?',
            name: 'managerOffice'
        }
    ])
    .then((answers) =>{
        console.log(answers);
        const {managerName, managerID, managerEmail, managerOffice} = answers;
        const managerPerson = new Manager(managerName, managerID, managerEmail, managerOffice);
        teamArray.push(managerPerson);
    })

}

const createEmployee = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of the Employee?',
            name: 'employeeName'
        },
    
        {
            type: 'number',
            message: 'What is their employee ID?',
            name: 'employeeID'
        },

        {
            type: 'input',
            message: 'What is the email of the employee?',
            name: 'employeeEmail'
        },

    ])
    .then((answers) =>{

        const {employeeName, employeeID, employeeEmail} = answers;
        const employeePerson = new Employee(employeeName, employeeID, employeeEmail)
        teamArray.push(employeePerson);
    })

}

const createEngineer = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName'
        },
    
        {
            type: 'number',
            message: 'What is their employee ID?',
            name: 'employeeID'
        },

        {
            type: 'input',
            message: 'What is the email of the engineer?',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'What is the Github username of the engineer?',
            name: 'engineerGithub'
        }

    ])
    .then((answers) =>{
        const {engineerName, engineerID, engineerEmail, engineerGithub} = answers;
        const engineerPerson = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub)
        teamArray.push(engineerPerson)
    })

}

const createIntern = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'internName'
        },
    
        {
            type: 'number',
            message: 'What is their employee ID?',
            name: 'internID'
        },

        {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'What is the school this intern attends?',
            name: 'internSchool'
        }

    ])
    .then((answers) =>{
        const {internName, internID, internEmail, internSchool} = answers;
        const internPerson = new Intern(internName, internID, internEmail, internSchool);
        teamArray.push(internPerson)
    })

}

const askForAnotherEmployee = function(){
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: 'Add another employee?'
        }
        .then((answer) =>{
            if (answer.choice == true){
                return true;
            } else {
                return false;
            }
        })
    ])
}

const chooseEmployee = function(){
    let choiceData;
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select the employee to add.',
            choices: ['Employee', 'Engineer', 'Intern'],
            name: 'choice'
        }
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
    ])
}

