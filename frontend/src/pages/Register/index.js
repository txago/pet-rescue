import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.scss';

import petRegisterImg from '../../assets/register-bg.jpg';

export default function Register() {
	const [name, setName] = useState('');
	const [bio, setBio] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [state, setEstate] = useState('');

	const history = useHistory();

	async function handleRegister(evt) {
		evt.preventDefault();

		const data = { name, bio, email, whatsapp, city, state };

		try {
			const response = await api.post('rescuers', data);
			alert(`Seu ID de acesso: ${response.data.id}`);
			history.push('/');
		} catch (err) {
			alert('Erro no cadastro, tente novamente.');
		}
	}

	return (
		<div
			className='register-bg pb-4'
			style={{ backgroundImage: 'url(' + petRegisterImg + ')' }}>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-sm-12 col-md-6 col-lg-5'>
						<h1 className='register mt-4 text-secondary'>Cadastre-se</h1>
						<p>
							Faça o seu cadastro para utilizar a plataforma e ajudar pets e
							pessoas se encontarem.
						</p>
						<form onSubmit={handleRegister} className='mb-4'>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label htmlFor='inputName' className='col-form-label'>
										Seu nome completo
									</label>
									<input
										type='text'
										className='form-control'
										id='inputName'
										placeholder='Ex.: Maria dos Santos'
										value={name}
										onChange={evt => setName(evt.target.value)}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label htmlFor='textareaBio' className='col-form-label'>
										Sobre você
									</label>
									<textarea
										type='text'
										className='form-control'
										id='textareaBio'
										rows='3'
										placeholder='Um pouco sobre o que você faz ou gosta...'
										value={bio}
										onChange={evt => setBio(evt.target.value)}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label htmlFor='inputEmail' className='col-form-label'>
										E-mail
									</label>
									<input
										type='email'
										className='form-control'
										id='inputEmail'
										placeholder='login@dominio.com'
										value={email}
										onChange={evt => setEmail(evt.target.value)}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label htmlFor='inputWhatsapp' className='col-form-label'>
										Whatsapp
									</label>
									<input
										type='text'
										className='form-control'
										id='inputWhatsapp'
										placeholder='Número com DDD para contatos de adoção'
										value={whatsapp}
										onChange={evt => setWhatsapp(evt.target.value)}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label htmlFor='inputCity' className='col-form-label'>
										Cidade
									</label>
									<input
										type='text'
										className='form-control'
										id='inputCity'
										placeholder='Ex.: São Paulo'
										value={city}
										onChange={evt => setCity(evt.target.value)}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div className='form-group col-12'>
									<label htmlFor='inputState' className='col-form-label'>
										Estado
									</label>
									<input
										type='text'
										className='form-control'
										id='inputState'
										placeholder='Ex.: SP'
										value={state}
										onChange={evt => setEstate(evt.target.value)}
									/>
								</div>
							</div>
							<button type='submit' className='btn btn-primary btn-lg mb-4'>
								Cadastrar
							</button>
						</form>
						🐱<Link to='/'>Voltar para o login</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
