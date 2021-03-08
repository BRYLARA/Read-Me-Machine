// function for licenses and read me table of contents goes here

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
     
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'

    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'

    case 'Eclipse Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'

    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'

    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'

    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

    default:
    return '';
  }
}
// Create a function that returns the license 
function renderLicenseLink(license) { }

// function that returns the license section of README
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  renderLicenseBadge(data.license)
  let licenseChoice = renderLicenseBadge(data.license)

  return `# ${data.title} 
${licenseChoice}
## Description 
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation 
${data.installation}
## Usage 
${data.usage}
## License 
${data.license}
## Contributing 
${data.contributing}
## Tests 
${data.tests}
## Questions 
Please direct any questions to [${data.personName}](mailto:${data.email}?subject=[GitHub]) and find my github profile here: https://github.com/${data.questions}
`;
}
  
  module.exports = generateMarkdown;
