const moment = require('moment');
const now = moment();

// console.log(now.format());
// console.log(now.format('X')); 
// console.log(now.valueOf());

const timestamp = 1486665705501;
const timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mm a'));