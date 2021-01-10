const inquirer = require('inquirer');
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./src/generate-site');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const [managerArr, engineerArr, internArr] = [[], [], []];

const teamPrompt = [
    {
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
        type: 'recursive',
        name: 'next',
        message: 'Want to add more team members?',
        prompts: [
            {
                type: 'list',
                name: 'employee',
                message: 'Who do you want to add?',
                choices: [
                    'Engineer',
                    'Intern'
                ],
            },
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
                when: ({employee}) => {
                    if(employee === 'Engineer') return true;
                    else return false;
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is the engineer's employee ID?",
                when: ({employee}) => {
                    if(employee === 'Engineer') return true;
                    else return false;
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
                when: ({employee}) => {
                    if(employee === 'Engineer') return true;
                    else return false;
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?",
                when: ({employee}) => {
                    if(employee === 'Engineer') return true;
                    else return false;
                }
            },
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
                when: ({employee}) => {
                    if(employee === 'Intern') return true;
                    else return false;
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the intern's employee ID?",
                when: ({employee}) => {
                    if(employee === 'Intern') return true;
                    else return false;
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?",
                when: ({employee}) => {
                    if(employee === 'Intern') return true;
                    else return false;
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What school is the intern attending?',
                when: ({employee}) => {
                    if(employee === 'Intern') return true;
                    else return false;
                }
            } 

        ]
    }
];

inquirer.prompt(teamPrompt)
.then((answers) => {
    //create manager
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
    managerArr.push(manager);

    if(answers.next){
        for(let i=0; i<answers.next.length; i++){
            if(answers.next[i].employee === 'Engineer'){
                const engineer = new Engineer(answers.next[i].engineerName, answers.next[i].engineerID, answers.next[i].engineerEmail, answers.next[i].engineerGithub);
                engineerArr.push(engineer);      
            } else {
                const intern = new Intern(answers.next[i].internName, answers.next[i].internID, answers.next[i].internEmail, answers.next[i].internSchool);
                internArr.push(intern); 
            } 
        }
        
        
    }
    return;
})
.then(() => {
    return generatePage(managerArr, engineerArr, internArr);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
});
