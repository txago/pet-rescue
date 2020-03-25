const connection = require('../database/connection');

module.exports = {
	async create(request, response) {
		const { id } = request.body;

		const rescuer = await connection('rescuers')
			.where('id', id)
			.select('name')
			.first();

		if (!rescuer) {
			return response
				.status(400)
				.json({ error: 'No rescuer found with this ID.' });
		}

		return response.json(rescuer);
	}
};
