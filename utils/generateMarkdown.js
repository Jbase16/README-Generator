// Function to get the appropriate badge for a license type
// Returns an empty string if no valid license is provided
function fetchLicenseBadge(licenseType) {
  switch (licenseType) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "GNU GPLv3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "ISC":
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    default:
      return ""; // If no license or an unsupported one is provided
  }
}

// Function to get the corresponding license link
// If no license is selected, returns an empty string
function getLicenseLink(licenseType) {
  const licenseLinks = {
    "MIT": "[MIT](https://opensource.org/licenses/MIT)",
    "GNU GPLv3": "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)",
    "Apache 2.0": "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)",
    "ISC": "[ISC](https://opensource.org/licenses/ISC)"
  };

  // Returning the correct link or empty if no match
  return licenseLinks[licenseType] || "";
}

// Function to add a license section to the README if a valid license exists
function addLicenseSection(licenseType) {
  if (licenseType && licenseType !== 'None') {
    return `## License
This project is licensed under the ${licenseType} license.`;
  }
  return ""; // No license section added if no valid license is provided
}

// Function that creates the markdown structure for the README file
function generateMarkdown(data) {
  const { title, description, installation, usage, contributing, tests, license, email, github } = data;

  return `# ${title}

${fetchLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${license !== 'None' ? '- [License](#license)' : ''}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

${addLicenseSection(license)}

## Questions
If you have any questions, feel free to contact me by email at [${email}](mailto:${email}) or check out my GitHub profile: [https://github.com/${github}](https://github.com/${github}).
`;
}

export default generateMarkdown;
