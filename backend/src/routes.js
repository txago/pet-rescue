const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const RescuerController = require('./controllers/RescuerController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// New Login
routes.post(
	'/sessions',
	celebrate({
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	}),
	SessionController.create
);
// Show Rescuer
routes.get('/rescuers', RescuerController.index);
// New Rescuer
routes.post(
	'/rescuers',
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required(),
			bio: Joi.string(),
			email: Joi.string()
				.required()
				.email(),
			whatsapp: Joi.string()
				.required()
				.min(9)
				.max(12),
			city: Joi.string().required(),
			state: Joi.string()
				.required()
				.length(2)
		})
	}),
	RescuerController.create
);
// Show Profile
routes.get(
	'/profile',
	celebrate({
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	}),
	ProfileController.index
);
// Show Incidents
routes.get(
	'/incidents',
	celebrate({
		[Segments.QUERY]: Joi.object().keys({
			page: Joi.number()
		})
	}),
	IncidentController.index
);
// New Incident
routes.post(
	'/incidents',
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			title: Joi.string().required(),
			description: Joi.string().required()
		}),
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	}),
	IncidentController.create
);
// Delete Incident
routes.delete(
	'/incidents/:id',
	celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			id: Joi.number().required()
		})
	}),
	IncidentController.delete
);

module.exports = routes;
