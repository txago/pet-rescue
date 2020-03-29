const connection = require('../../src/database/connection');
const request = require('supertest');
const app = require('../../src/app');

describe('Rescuer', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('Should be able to create a new Rescuer', async () => {
		const response = await request(app)
			.post('/rescuers')
			.send({
				name: 'Thiago Menezes',
				bio: 'Gateiro profissonal.',
				email: 'thiago@thiago.com',
				whatsapp: '11912345678',
				city: 'São Paulo',
				state: 'SP'
			});

		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	});
});
