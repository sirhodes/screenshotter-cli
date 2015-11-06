const Promise = require('bluebird');
const inquirer = require('inquirer');

module.exports = getAnswers;

function getAnswers() {
  return new Promise(function(resolve, reject) {
    inquirer
    .prompt(
      [
        {
          type: 'input',
          name: 'fileToRead',
          message: 'Please write the relative path to your file: '
        },
        {
          type: 'checkbox',
          name: 'devicesToGrab',
          message: 'Which screen resolutions will you need screenshots of?',
          choices: [
            '320x480',
            '320x568',
            '376x667',
            '414x736',
            '768x1024',
            '1024x768',
            '1336x768',
            '1336x768',
            '1024x720',
            '1440x900'
          ]
        },
        {
          type: 'confirm',
          name: 'crop',
          message: 'Do you want to crop to each device?'
        }
      ],
      resolve
    );

  });
}
