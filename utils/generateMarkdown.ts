// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }
// sections.push('## License/n${licenseBadge} ${licenseLink}');

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
    ## Description/n${data.description}

    ## Table of Contents/n${data.tableOfContents}

    ## Installation/n${data.install}

    ## Usage/n${data.usage}

    ## Credits/n${data.credits}

    ## License/n${data.license}

    ## Badges

    ## How to Contribute/n${data.contribute}

    ## Tests/n${data.tests}
    
    ## Questions/n${data.questions}
  `;
  }
module.exports = generateMarkdown;
