const { makeBadge } = require('badge-maker');

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseSection(data) {
  const licenseUrl = {
    'MIT License': 'https://opensource.org/license/mit/',
    'Apache License 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'BSD 3-Clause "New" or "Revised" License': 'https://opensource.org/license/bsd-3-clause/',
    'BSD 2-Clause "Simplified" License': 'https://opensource.org/license/bsd-2-clause/',
    'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Eclipse Public License 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
    'GNU General Public License v3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'GNU Affero General Public License v3.0': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
    'GNU General Public License v2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html',
    'GNU Lesser General Public License v2.1': 'https://www.gnu.org/licenses/lgpl-2.1.html',
    'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
    'The Unlicense': 'https://unlicense.org/'
  }

  const licenseLink = `Use the following link to learn more about the license: (${licenseUrl[data.license]})`;
  return licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const format = {
    label: 'license',
    message: data.license, // Use data.license here
    color: '#008080',
  };

  const tableOfContents =
    `- [Installation](#installation)\n` +
    `- [Usage](#usage)\n` +
    `- [License](#license)\n` +
    `- [Contributing](#contributing)\n` +
    `- [Tests](#tests)\n` +
    `- [Questions](#questions)`;

  const licenseLink = renderLicenseSection(data);
  const badgeSvg = makeBadge(format);

  return `# ${data.title}\n${badgeSvg}

## Description\n${data.description}

## Table of Contents\n${tableOfContents}

## Installation\n${data.needInstall}

## Usage\n${data.usage}

## License\n${data.license}\n${licenseLink}

## How to Contribute\n${data.contribute}

## Tests\n${data.test}
  
## Questions\n[${data.gitName} on GitHub](https://github.com/${data.gitName})\n\n${data.email}`;
}

const initialTemplate = generateMarkdown({
  title: '',
  description: '',
  install: '',
  usage: '',
  license: '',
  contribute: '',
  tests: '',
  questions: '',
});

module.exports = generateMarkdown;