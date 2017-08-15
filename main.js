var chalk = require('chalk');
var path = require('path'); 
var moment = require('moment');
console.log("it is" + " " + chalk.blue(moment().format('LLLL'))+ ".");
console.log("It is the " + chalk.magenta(moment().format('DDDo')) + " day of the year");
console.log("It is " + chalk.cyan(moment().format('ssss')) + " seconds into the day");
console.log("It " + chalk.green("is") + " during Daylight Savings Time.");
console.log("It " + chalk.red("is not") + " a leap year.");