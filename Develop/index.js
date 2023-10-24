// TODO: Include packages needed for this application
const fs = require('fs'); // For file system operations
const inquirer = require('inquirer'); // For user prompts

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md has been successfully generated!');
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      // Generate the README content based on user input
      const readmeContent = `
  # ${answers.projectTitle}
  
  ## Description
  ${answers.projectDescription}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  // Add more sections as needed
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  // Add more sections as needed
  
  `;
// Write the README file
writeToFile('README.md', readmeContent);
});
}
// Function call to initialize app
init();
