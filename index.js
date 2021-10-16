import { readFile } from "fs/promises";
import inquirer from "inquirer";
import Mustache from "mustache";

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the Title of your project?",
    type: "input",
  },
  { name: "description", message: "Enter Description", type: "editor" },
  { name: "installation", message: "Install Instructions", type: "editor" },
  {
    name: "license",
    message: "Select License",
    type: "list",
    choices: ["MIT", "GPL", "LGPL", "Apache", "Unlicense"],
  },
];

const licenseDescriptions = {
  MIT: "This project is released under the [MIT License](https://opensource.org/licenses/MIT)",
};

const licenseBadges = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  GPL: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

async function renderTemplate(answers) {
  // Mustache.render(template, data)
  const template = await readFile("./readme-template.ms", "utf-8");
  return Mustache.render(template, answers);
}

inquirer.prompt(questions).then(async (ans) => {
  // add license data to ans

  // if (ans.license === "MIT"){
  //    ans.licenseBadge = licenseBadges.MIT;
  // } else if (ans.license === "GPL") {
  //   ans.licenseBadge = licenseBadges.GPL;
  // }

  ans.licenseBadge = licenseBadges[ans.license];
  ans.licenseDescription = licenseDescriptions[ans.license];

  console.log(await renderTemplate(ans));

  // convert ans to markdown using mustache
  // write result to file
});

/*
inquirer
  .prompt([
    { name: "name", message: "what's your name?", type: "input" },
    { name: "lifeStory", message: "tell me your life story.", type: "editor" },
  ])
  .then((ans) => {
    console.log("hello " + ans.name);
    console.log(ans.lifeStory);
  });
*/
