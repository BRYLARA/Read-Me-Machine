const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./markdown")


inquirer
.prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Describe your application',
      name: 'description',
    },
    {
        type: 'input',
        message: "What is your applications name",
        name: 'title'
    },
    {
        type: "input",
        message: "What command should be ran to install dependencies?",
        name: "installation",
        default: "npm install",
      },
      {
        type: "input",
        message: "What command should be ran for testing?",
        name: "test",
        default: "npm test",
      },
      {
        type: "input",
        name: "usage",
        message: "What should the user know about using this repository?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What should the user know about contributing to this repository?",
      },
    ])
    
.then((resData) => {
  //Run Generate Markdown function and pass response data in
  let testData = markDown(resData)

  //Calling writeToFile
  writeToFile(testData)
}

)
;

// TODO: Create a function to write README file - maybe create an output folder.
function writeToFile(data) {
fs.writeFile('README.md', data, function (err) {
if (err) throw err;
console.log('README.md has been generated');
});
}



