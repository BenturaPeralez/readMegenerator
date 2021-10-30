const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your decription of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'what is your table of contents?',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are your usage instructions?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines',
        name: 'contribution',
    },

    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'test',
    },

    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['ACADEMIC Free License v3.0', 'Creative Comons License Family', 'ISC', 'MIT', 'Apache License 2.0',],
        name: 'license'
    },

    {
        type: 'input',
        message: 'Enter your gitHub link here',
        name: 'gitHub',
    },

    {
        type: 'input',
        message: 'Enter your email here?',
        name: 'email',
    },

    
]).then (function (surveyResults){
    console.log(surveyResults)
    var readme=`

# Title:

${surveyResults.title}

license: ${surveyResults.license}

## Description: 

${surveyResults.description}

## Contents:

${surveyResults.contents}
  

## Installation instructions:

${surveyResults.installation}

## Usage instructions:
${surveyResults.usage}

## Contribution guidelines:
${surveyResults.contribution}

## Test instructions:
${surveyResults.test}

# Questions
GitHub: ${surveyResults.gitHub}

Email: ${surveyResults.email}

`
  
    fs.writeFile('generatedreadme.md',readme,function(err){
    if (err) {
        console.log(err)
    };
    })
    })
