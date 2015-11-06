#! /Users/Seth/.nvm/versions/node/v4.2.1/bin/node
const Promise = require('bluebird');
const Pageres = require('pageres');
const meow = require('meow');
const subarg = require('subarg');

var getAnswers = require('./lib/getAnswers');
getAnswers()
.then((answers)=> {
  var screenSizes = [];
  answers.devicesToGrab
    .forEach(x => {
      console.log(x);
    });
  console.log(screenSizes);
});
