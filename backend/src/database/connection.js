const knex = require('knex');
const config = require('../../knexfile');

const configuration =
	process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(configuration);

module.exports = connection;
