const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const htmlGenerator = require('./htmlGenerator');
const questions = require('./questions');

// array into which the user's inputted employees will be added
const employeeArray = [];


// initial function that directs users to add a manager
const init = () => {
    console.log(chalk.yellow('\nWelcome to the Employee Summary CLI!'));
    console.log(chalk.yellow("We're going to ask you some questions about your employees\nand then return an HTML page displaying your team's information."));
    console.log(chalk.yellow("Let's start with the manager.\n"));

    addEmployee(questions.manager, "Manager");
};


// general add employee function 
const addEmployee = function(question, role) {
    inquirer.prompt(question)
        .then(function(answer) {
            answer.role = role;
            employeeArray.push(answer);
            getNextEmployee();
        });
};

// asks what employee the user would like to add next or ends the process
// and generates the HTML if user has no more employees to add
const getNextEmployee = function() {
    inquirer.prompt(questions.next)
        .then(function({employeetype}) {
            let newEmployee = employeetype.toLowerCase();
            switch (employeetype) {
                case "Engineer":
                case "Intern":
                    addEmployee(questions[newEmployee], employeetype);
                    break;
                default :
                    console.log(chalk.magenta('\nThanks for using me!\n'));
                    const html = htmlGenerator(employeeArray);
                    return buildTeam(html);
            }
        });
};

// generates final html document with html generated from the htmlGenerator function
function buildTeam(html) {
    fs.writeFile(__dirname + '/output/team.html', html, 'utf8', function(err) {
        if (err) throw err;
        console.log('file successfully written!');
    });
};

// start program
init();