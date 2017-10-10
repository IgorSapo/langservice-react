const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
console.log('The config is ' + config);
module.exports = require('knex')(config);
