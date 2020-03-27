import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.scss';

export default function Login() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const history = useHistory();

	const rescuerId = localStorage.getItem('rescuerId');

	async function handleNewIncident(evt) {
		evt.preventDefault();

		const data = {
			title,
			description
		};

		try {
			await api.post('incidents', data, {
				headers: {
					Authorization: rescuerId
				}
			});
			history.push('/profile');
		} catch (err) {
			alert('Erro na criação de pet, tente novamente.');
		}
	}

	return (
		<div className='incident-bg pb-4'>
			<div className='container'>
				<div className='row align-items-center justify-content-center'>
					<div className='col-sm-12 col-md-6'>
						<h1 className='register mt-4 text-secondary'>Cadastrar novo pet</h1>
						<p className='lead'>
							Conte um pouco mais sobre o pet que você quer disponibilizar para
							adoção.
						</p>
						<form onSubmit={handleNewIncident} className='mb-4'>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label
										htmlFor='inputTitle'
										className='col-form-label col-form-label-lg'>
										Título
									</label>
									<input
										type='text'
										className='form-control form-control-lg'
										id='inputTitle'
										placeholder='Ex.: Gato preto, cerca de 1 ano, brincalhão'
										aria-describedby='titleHelp'
										value={title}
										onChange={evt => setTitle(evt.target.value)}
									/>
									<small id='titleHelp' className='text-muted'>
										Use um título pequeno e claro, ex.: "Cachorro SRD, pequeno
										porte, para adoção"
									</small>
								</div>
							</div>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label
										htmlFor='textareaDescription'
										className='col-form-label col-form-label-lg'>
										Descrição
									</label>
									<textarea
										type='text'
										className='form-control form-control-lg'
										id='textareaDescription'
										rows='3'
										placeholder='Ex.: Gatinho preto, encontrado na rua de trás da minha casa. Tem por volta de 1 ano, é extremamente brincalhão e carinhoso...'
										aria-describedby='descriptionHelp'
										value={description}
										onChange={evt => setDescription(evt.target.value)}
									/>
									<small id='descriptionHelp' className='text-muted'>
										Conte de forma breve como encontrou o pet, qual são as
										características, por exemplo cor, tamanho, idade média, ou
										se tem alguma necessidade especial.
									</small>
								</div>
							</div>
							<button type='submit' className='btn btn-primary btn-lg mb-4'>
								Cadastrar
							</button>
						</form>
						🐱<Link to='/profile'>Voltar para home</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
