const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const { page = 1 } = request.query;

		const [count] = await connection('incidents').count();

		const incidents = await connection('incidents')
			.join('rescuers', 'rescuers.id', '=', 'incidents.rescuer_id')
			.limit(5)
			.offset((page - 1) * 5)
			.select([
				'incidents.*',
				'rescuers.name',
				'rescuers.bio',
				'rescuers.email',
				'rescuers.whatsapp',
				'rescuers.city',
				'rescuers.state'
			]);

		response.header('X-Total-Count', count['count(*)']);

		return response.json(incidents);
	},

	async create(request, response) {
		const { title, description } = request.body;
		const rescuer_id = request.headers.authorization;

		const [id] = await connection('incidents').insert({
			title,
			description,
			rescuer_id
		});

		return response.json({ id });
	},

	async delete(request, response) {
		const { id } = request.params;
		const rescuer_id = request.headers.authorization;

		const incident = await connection('incidents')
			.where('id', id)
			.select('rescuer_id')
			.first();

		if (incident.rescuer_id !== rescuer_id) {
			return response.status(401).json({ error: 'Operation not permitted.' });
		}

		await connection('incidents')
			.where('id', id)
			.delete();

		return response.status(204).send();
	}
};
