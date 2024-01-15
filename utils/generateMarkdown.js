// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
  const format = {
    label: 'build',
    message: 'passed',
    color: 'brightgreen',
  }

  const svg = makeBadge(format)
  console.log(svg)

  try {makeBadge({})
} catch (e) {
  console.log(e)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  const tableOfContents = 
 `- [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`

  return `# ${data.title}

  ## Description/n${data.description}

  ## Table of Contents/n${tableOfContents}

  ## Installation/n${data.install}

  ## Usage/n${data.usage}

  ## License/n${data.license}

  ## Badges/n

  ## How to Contribute/n${data.contribute}

  ## Tests/n${data.tests}
  
  ## Questions/n${data.questions}`;
}

module.exports = generateMarkdown;



