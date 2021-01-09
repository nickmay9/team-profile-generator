const inquierer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const [managerArr, engineerArr, internArr] = [];

const managerPrompt = [{
    type: 'input',
    name: 'managerName',
    message: "What is the team manager's name?"
},
{
    type: 'input',
    name: 'managerID',
    message: "What is the manager's employee ID?"
},
{
    type: 'input',
    name: 'managerEmail',
    message: "What is the manager's email?"
},
{
    type: 'input',
    name: 'managerOffice',
    message: "What is the manager's office number?"
},
{
    type: 'confirm',
    name: 'next',
    message: 'Want to add more team members?',
    default: true
}];


const selectEmployee = () => {
    return inquierer.prompt({
            type: 'list',
            name: 'employee',
            message: 'Who do you want to add?',
            choices: [
                'Engineer',
                'Intern'
            ]
        })
}
const engineerPrompt = () => {
    return inquierer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's GitHub username?"
        },
        {
            type: 'confirm',
            name: 'next',
            message: 'Would you like to add more team members?',
            default: true
        }
    ]);
};

const internPrompt = () => {
    return inquierer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school is the intern attending?'
        },
        {
            type: 'confirm',
            name: 'next',
            message: 'Would you like to add more team members?',
            default: true
        }
    ]);
};

inquierer.prompt(managerPrompt).then((answers) => {
    //create manager
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);

    if (answers.next){
        selectNext();
    }
});

const selectNext = () => {
    selectEmployee().then(employeeAnswer => {
        if(employeeAnswer === 'Engineer'){
            engineerPrompt().then(answers =>{
                //create engineer
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);

                if(engineer.next){
                    selectNext();
                }
            });
        } else {
            internPrompt().then(intern => {
                //create intern
                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

                if(intern.next){
                    selectNext();
                }
            });
        }

    });
};