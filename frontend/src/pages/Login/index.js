import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import petHomeImg from '../../assets/login-bg.jpg';

import api from '../../services/api';

import './styles.scss';

export default function Login() {
	const [id, setId] = useState('');
	const history = useHistory();

	async function handleLogin(evt) {
		evt.preventDefault();

		try {
			const response = await api.post('sessions', { id });

			localStorage.setItem('rescuerId', id);
			localStorage.setItem('rescuerName', response.data.name);

			history.push('/profile');
		} catch (err) {
			alert('Falha no login, tente novamente.');
		}
	}

	return (
		<div
			className='login-bg'
			style={{ backgroundImage: 'url(' + petHomeImg + ')' }}>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-sm-12 col-md-6 col-lg-4'>
						<h1 className='mt-4 text-primary'>
							Pet<span className='opacity-70'>Rescue</span>
						</h1>
						<form className='mb-4' onSubmit={handleLogin}>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label
										htmlFor='inputId'
										className='col-form-label col-form-label-lg'>
										Faça o seu login
									</label>
									<input
										type='text'
										className='form-control form-control-lg'
										id='inputId'
										placeholder='Digite sua ID'
										value={id}
										onChange={evt => setId(evt.target.value)}
									/>
								</div>
							</div>
							<button type='submit' className='btn btn-primary btn-lg mb-4'>
								Entrar
							</button>
						</form>
						🐶<Link to='/register'>Não tem cadastro? Faça aqui.</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
