# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

Node.js Challenge: Professional README Generator
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

IMPORTANT
Some of the technologies we use in this course (GraphQL and MERN) don't work well with Node.js v18, so you you'll need to ensure that you're using Node.js v16. Please follow the instructions outlined in the Node Installation Guide on the Full-Stack Blog Links to an external site.to ensure that you're using Node.js v18. Once these problems have been resolved in the future, you'll be able to use Node.js v18 as your runtime environment.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package Links to an external site.. Review the Professional README Guide Links to an external site.as a reminder of everything that a high-quality, professional README should contain.

IMPORTANT
In order to install inquirer, please use npm i inquirer@8.2.4.

The application will be invoked by using the following command:

node index.js
Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit 2.2.4: Screencastify Tutorial in Module 2 of the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video and add it to the README of your project.

IMPORTANT
Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

Before you start, clone the starter code Links to an external site..

User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
Getting Started
Here are some guidelines to help you get started:

Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

Refer to the Video Submission Guide Links to an external site.on the Full-Stack Blog for additional guidance on creating a video.

Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Deliverables: 20%
A sample README generated using the application must be submitted.

Your GitHub repository containing your application code.

Walkthrough Video: 27%
A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

Technical Acceptance Criteria: 40%
Satisfies all of the above acceptance criteria plus the following:

Uses the Inquirer package Links to an external site..
Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to walkthrough video.

How to Submit the Challenge
You are required to submit the following for review:

A walkthrough video demonstrating the functionality of the application.

A sample README.md file for a project repository generated using your application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

NOTE
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

Comments are disabled for graded submissions in BootCamp Spot. If you have questions about your feedback, please notify your instructional staff or the Student Success Manager. If you would like to resubmit your work for an improved grade, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.


