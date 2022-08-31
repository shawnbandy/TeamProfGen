const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const Employee = require('./lib/Employee');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');

// TODO: create a promise function to wait for completion of the prompts
// TODO: probably should just immediately create the HTML elements, so that way I can append cards to it with the information

inquirer.prompt([])

const createManager = () => {
    inquirer.prompt([
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
        return {managerName, managerID, managerEmail, managerOffice}

    })

}

const createEmployee = () => {
    inquirer.prompt([

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
        return {employeeName, employeeID, employeeEmail}
    })

}

const createEngineer = () => {
    inquirer.prompt([

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
        return {engineerName, engineerID, engineerEmail, engineerGithub}
    })

}

const createIntern = () => {
    inquirer.prompt([

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
        return {internName, internID, internEmail, internSchool}
    })

}