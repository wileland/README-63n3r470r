// Function to return a license badge based on the selected license
function renderLicenseBadge(license) {
  // Define license badge URLs or SVGs based on your chosen licenses
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    // Add more license badges as needed
    'BSD 3-Clause License': '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };

  // Return the license badge based on the selected license
  return licenseBadges[license] || '';
}

// Function to return the license link based on the selected license
function renderLicenseLink(license) {
  // Define license URLs or documentation links based on your chosen licenses
  const licenseLinks = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)',
    'GNU GPL v3': '[GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    // Add more license links as needed
  };

  // Return the license link based on the selected license
  return licenseLinks[license] || '';
}

// Function to generate the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `
## License
This project is licensed under the ${license} License.

${renderLicenseBadge(license)}
For more details, see the [${license}](#license) file.
`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description
${data.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.contributing ? '- [Contributing](#contributing)\n' : ''}
${data.tests ? '- [Tests](#tests)\n' : ''}
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${data.contributing ? `## Contributing
${data.contributing}
` : ''}

${data.tests ? `## Tests
${data.tests}
` : ''}

${renderLicenseSection(data.license)}

${
  // Screenshots section
  data.screenshots
    ? `
## Screenshots
${data.screenshots
      .split(',')
      .map((screenshot) => `![Screenshot](${screenshot.trim()})`)
      .join('\n')}
`
    : ''
}

${
  // Demo section
  data.demoLink
    ? `
## Demo
You can watch a demo of this project [here](${data.demoLink}).
`
    : ''
}

${
  // Acknowledgments section
  data.acknowledgments
    ? `
## Acknowledgments
${data.acknowledgments
      .split(',')
      .map((acknowledgment) => `- ${acknowledgment.trim()}`)
      .join('\n')}
`
    : ''
}

${
  // Badges section
  data.badges
    ? `
## Badges
${data.badges
      .split(',')
      .map((badge) => badge.trim())
      .join('\n')}
`
    : ''
}

${
  // Documentation section
  data.documentationLink
    ? `
## Documentation
You can find the project's documentation [here](${data.documentationLink}).
`
    : ''
}

${
  // Installation Scripts section
  data.installationScripts
    ? `
## Installation Scripts
${data.installationScripts}
`
    : ''
}

${
  // Deployment section
  data.deploymentInfo
    ? `
## Deployment
${data.deploymentInfo}
`
    : ''
}

${
  // Changelog section
  data.changelog
    ? `
## Changelog
${data.changelog}
`
    : ''
}

${
  // Security section
  data.securityInfo
    ? `
## Security
${data.securityInfo}
`
    : ''
}

## Questions
For questions or inquiries, please contact:
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;