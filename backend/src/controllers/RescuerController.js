const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
	async index(request, response) {
		const rescuers = await connection('rescuers').select('*');

		return response.json(rescuers);
	},

	async create(request, response) {
		const { name, bio, email, whatsapp, city, state } = request.body;

		const id = crypto.randomBytes(4).toString('HEX');

		await connection('rescuers').insert({
			id,
			name,
			bio,
			email,
			whatsapp,
			city,
			state
		});

		return response.json({ id });
	}
};
