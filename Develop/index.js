// TODO: Include packages needed for this application
const fs = require('fs'); // For file system operations
const inquirer = require('inquirer'); // For user prompts
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How should users install your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should users use your application?',
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'How can users contribute to your project?',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'How can users run tests for your application?',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPL v3', 'Apache License 2.0', 'Other'],
    },
    {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
    },
    {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    },
    {
    type: 'input',
    name: 'screenshots',
    message: 'Provide URLs to project screenshots (comma-separated):',
    },
    {
    type: 'input',
    name: 'demoLink',
    message: 'Provide a link to a live demo or video demo:',
    },
    {
    type: 'input',
    name: 'acknowledgments',
    message: 'Acknowledge any libraries, tools, or contributors (comma-separated):',
    },
    {
    type: 'input',
    name: 'badges',
    message: 'Provide badge URLs for build status, code coverage, etc. (comma-separated):',
    },
    {
    type: 'input',
    name: 'documentationLink',
    message: 'Provide a link to project documentation (if applicable):',
    },
    {
    type: 'input',
    name: 'installationScripts',
    message: 'Provide installation scripts or commands (if applicable):',
    },
    {
    type: 'input',
    name: 'deploymentInfo',
    message: 'Provide information on how to deploy your project (if applicable):',
    },
    {
    type: 'input',
    name: 'changelog',
    message: 'Include a changelog or version history (if applicable):',
    },
    {
    type: 'input',
    name: 'securityInfo',
    message: 'Address security considerations (if applicable):',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(`Failed to write ${fileName} file: ${err}`);
      } else {
        console.log(`${fileName} has been successfully generated!`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      // Process user's answers and enhance the README content here
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    }).catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();