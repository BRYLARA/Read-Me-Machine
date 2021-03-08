const inquirer = require("inquirer");
const fs = require("fs");
// const util = require('util');
// const Choices = require("inquirer/lib/objects/choices");
// const { type } = require("os");
// const path = require("path");
// const generateMarkdown = require("../homework 9/markdown");
const generatorMarkdown = require("./markdown")


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
    // {
    //     type:'list',
    //     messages: 'What licenses do you need for your project?'
    //     choices: ["APACHE 2.0", "MIT", "BSD 3", "NONE"],
    //     name: 'license'
    // },
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

// // function that writes the README file below
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//   }
//   function init() {
//     inquirer.prompt(questions).then((inquirerResponses) => {
//       console.log("Generating ...");
//       writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
//     });
//   }
  
//   // function call to initialize program
//   init();
function writeToFile(fileName, data) {

    fs.writeFile("./demo/"+fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("Successfully wrote: " + fileName);
    })
    
    }
    
    
    // initialization function
    function init() {
      inquirer.prompt(questions)
      .then(function(data) {
        writeToFile("DemoREADME.md", generatorMarkdown(data));
      })
    }
    
    
    // run the app
    init();


