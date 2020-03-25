const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const rescuer_id = request.headers.authorization;

		const incidents = await connection('incidents')
			.where('rescuer_id', rescuer_id)
			.select('*');

		return response.json(incidents);
	}
};
