const fs = require("fs");


const inquirer = require("inquirer");


const generateTheMarkdown = require("./utils/generateMarkdown");






function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question.";
    }
}


const questions = [
    // Question for the Title
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: validateInput,
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description of the project.",
        validate: validateInput,
    },

   

    // Question for Installation
    {
        type: "input",
        name: "installation",
        message: "How will you install the software.",
        validate: validateInput,
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use the program.",
        validate: validateInput,
    },

    // Question for License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project below.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: validateInput,
    },

    // Question for Contributing 
    {
        type: "input",
        name: "contributing",
        message: "How can users help to contribute to your project.",
        validate: validateInput,
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any further testing instructions you would like to provide for this project.",
        validate: validateInput,
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        },
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}



function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./example/README.md", data);
    });
}


init();
