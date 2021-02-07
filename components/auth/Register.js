import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../actions/firebase';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { REGISTER_REDIRECT_URL } from '../../config';

const Register = () => {
	const [ values, setValues ] = useState({
		email: '',
		loading: false
	});

	const { user } = useSelector((state) => ({ ...state }));
	const { email, loading } = values;

	useEffect(
		() => {
			if (user && user.token) {
				Router.push('/');
			}
		},
		[ user ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });

		try {
			const config = {
				url: REGISTER_REDIRECT_URL,
				handleCodeInApp: true
			};

			await auth.sendSignInLinkToEmail(email, config);
			toast.success(
				`Vous allez recevoir un email dans peu de temps ${email}. Cliquez sur le lien pour completer la création de votre compte!`
			);

			// save user email in local storage
			window.localStorage.setItem('emailForRegistration', email);

			setValues({ ...values, email: '', loading: false });
		} catch (err) {
			console.log(err);
			toast.error(err.message);
		}
	};

	const registerForm = () => (
		<form>
			<div className="form-group">
				<input
					type="email"
					id="email"
					className="form-control"
					value={email}
					onChange={(e) => setValues({ ...values, email: e.target.value, loading: false })}
					placeholder="johndoe@xxxx.xx"
					autoFocus
				/>
			</div>

			<Button onClick={handleSubmit} type="danger" shape="round" block size="large" loading={loading}>
				S'enregister
			</Button>
		</form>
	);

	return (
		<React.Fragment>
			<div className="">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<h4 className="mb-4">Saisissez une adresse email</h4>
						{registerForm()}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Register;
