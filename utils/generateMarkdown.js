// TODO: Create a function that returns a license badge based on which license is passed in
const licenseData = require('./license.json');
// If there is no license, return an empty string
const renderLicenseLink = licenseInfoResult => {
  if (!licenseInfoResult) return '';
  const licenseSourceUrl = licenseData.licenseRoot + licenseInfoResult.endpoint;
  return licenseSourceUrl;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseBadge = licenseInfoResult => {
  if (!licenseInfoResult) return '';
  const badgeIconUrl = licenseData.badgeTemplate
    .replace('@name', licenseInfoResult.endpoint.replace('-', '_'))
    .replace('@color', licenseInfoResult.badgeColor);
    return `
  [![License: ${licenseInfoResult.name}](${badgeIconUrl})](${renderLicenseLink(licenseInfoResult)})
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseInfoResult => {
  if (!licenseInfoResult) return '';
  const licenseInfo = licenseInfoResult.default
    ? `\n${licenseInfoResult.info}` : `\nThis application is distributed under the [${licenseInfoResult.name}](${renderLicenseLink(licenseInfoResult)}) license.`;
    return renderLicenseBadge(licenseInfoResult) + licenseInfo;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = readmeData => {
  const licenseInfoResult = licenseData.licenseInfo.find(choiceData => choiceData.name === readmeData.licenseType);

module.exports = generateMarkdown;
return `
  # ${readmeData.title}
  ## Description
  ${readmeData.description}
  ## License
  ${renderLicenseSection(licenseInfoResult)}
  ## Table of contents
  - [License](#License)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Testing](#Testing)
  - [Contributions](#Contributions)
  ## Usage
  ${readmeData.usage}
  ## Installation
  ${readmeData.installation}
  ## Tests
  ${readmeData.tests}
  ## Contributors
  Contributors: 
  ${readmeData.contributions}
  ## Questions
  Find me on GitHub: <https://github.com/${readmeData.githubName}>
  \nReach me by email: ${readmeData.email}
  `;
}

module.exports = {
  generateMarkdown
}