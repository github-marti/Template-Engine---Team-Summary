// questions for inquirer
const questions = {
    manager : [{
            type: "input",
            message: "What's the manager's name?",
            name: "name",
            validate: value => isNaN(value) ? true : "Please enter a valid name."
        },
        {
            type: "input",
            message: "What's the manager's id number?",
            name: "id",
            validate: value => !isNaN(value) ? true : "Please enter a valid ID number."
        },
        {
            type: "input",
            message: "What's the manager's e-mail address?",
            name: "email",
            validate: value => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value) ? true : "Please enter a valid e-mail address."
        },
        {
            type: "input",
            message: "What's the manager's office number?",
            name: "variable",
            validate: value => !isNaN(value) ? true : "Please enter a valid room number."
        }],
    engineer : [{
            type: "input",
            message: "What's the engineer's name?",
            name: "name",
            validate: value => isNaN(value) ? true : "Please enter a valid name."
        },
        {
            type: "input",
            message: "What's the engineer's ID number?",
            name: "id",
            validate: value => !isNaN(value) ? true : "Please enter a valid name."
        },
        {
            type: "input",
            message: "What's the engineer's e-mail address?",
            name: "email",
            validate: value => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value) ? true: "Please enter a valid e-mail address."
        },
        {
            type: "input",
            message: "What the engineer's GitHub username?",
            name: "variable",
            validate: value => value.split(' ').length < 2 ? true : "Please enter a valid GitHub username."
        }],
    intern : [{
            type: "input",
            message: "What's the intern's name?",
            name: "name",
            validate: value => isNaN(value) ? true : "Please enter a valid name."
        },
        {
            type: "input",
            message: "What's the intern's ID number?",
            name: "id",
            validate: value => !isNaN(value) ? true : "Please enter a valid ID number."
        },
        {
            type: "input",
            message: "What's the intern's e-mail address?",
            name: "email",
            validate: value => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value) >= 2 ? true: "Please enter a valid e-mail address."
        },
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "variable",
            validate: value => isNaN(value) ? true : "Please enter a valid school name."
        }],
    next : [{
            type: "list",
            message: "What type of employee would you like to add next?",
            choices: ["Engineer", "Intern", "I'm done adding employees"],
            name: "employeetype"
        }]
    };

module.exports = questions;