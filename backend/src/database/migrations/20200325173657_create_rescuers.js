exports.up = function(knex) {
	return knex.schema.createTable('rescuers', function(table) {
		table.string('id').primary();
		table.string('name').notNullable();
		table.string('bio').notNullable();
		table.string('email').notNullable();
		table.string('whatsapp').notNullable();
		table.string('city').notNullable();
		table.string('state', 2).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('rescuers');
};
