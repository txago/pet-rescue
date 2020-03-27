import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.scss';

export default function Profile() {
	const [incidents, setIncidents] = useState([]);

	const history = useHistory();

	const rescuerId = localStorage.getItem('rescuerId');
	const rescuerName = localStorage.getItem('rescuerName');

	useEffect(() => {
		api
			.get('profile', {
				headers: {
					Authorization: rescuerId
				}
			})
			.then(response => {
				setIncidents(response.data);
			});
	}, [rescuerId]);

	async function handleDeleteIncident(id) {
		try {
			await api.delete(`incidents/${id}`, {
				headers: { Authorization: rescuerId }
			});

			setIncidents(incidents.filter(incident => incident.id !== id));
		} catch (err) {
			alert('Erro ao deletar o incidente, tente novamente.');
		}
	}

	function handleLogout() {
		localStorage.clear();
		history.push('/');
	}

	return (
		<>
			<nav className='navbar navbar-expand-lg bg-purple navbar-dark'>
				<Link to={'/'} className='navbar-brand mb-0 h1 profile'>
					PETRESCUE
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarToggler'
					aria-controls='navbarToggler'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarToggler'>
					<p className='navbar-nav ml-auto mr-auto my-sm-2 mt-2 my-lg-0 text-white'>
						Olá, {rescuerName}
					</p>
					<Link
						to={'/incidents/new'}
						className='btn btn-success my-2 my-sm-0 mr-2'>
						Cadastrar novo pet
					</Link>
					<button
						onClick={handleLogout}
						type='button'
						className='btn btn-outline-light my-2 my-sm-0'>
						Sair
					</button>
				</div>
			</nav>

			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='page-title border-bottom my-4'>Pets cadastrados</h1>
					</div>
				</div>
				<div className='row'>
					{incidents.map(incident => (
						<div
							key={incident.id}
							className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
							<div className='card mb-4'>
								<div className='card-body'>
									<h5 className='card-title'>{incident.title}</h5>
									<p className='card-text'>{incident.description}</p>
									<button
										onClick={() => handleDeleteIncident(incident.id)}
										className='btn btn-sm btn-outline-danger'>
										Remover
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
