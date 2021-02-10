import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { auth } from '../../../actions/firebase';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdateUser } from '../../../actions/auth';
import Banner from '../../../components/header/Banner';
import Head from 'next/head';

function RegisterComplete() {
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		loading: false
	});

	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();

	const { email, password, loading } = values;

	useEffect(() => {
		setValues({ ...values, email: window.localStorage.getItem('emailForRegistration') });
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });

		if (!email || !password) {
			toast.error("L'email est requis!");
			setValues({ ...values, loading: false });
			return;
		}

		if (password.length < 6) {
			toast.error('Le mot de passe doit contenir au moins 6 caractères!');
			setValues({ ...values, loading: false });
			return;
		}

		try {
			const result = await auth.signInWithEmailLink(email, window.location.href);
			if (result.user.emailVerified) {
				// remove user email from local storage
				window.localStorage.removeItem('emailForRegistration');
				// get user id token
				let user = auth.currentUser;
				await user.updatePassword(password);

				const idTokenResult = await user.getIdTokenResult();

				// redux store
				console.log('user', user, 'idTokenResult', idTokenResult);
				createOrUpdateUser(idTokenResult.token)
					.then((response) => {
						dispatch({
							type: 'LOGGED_IN_USER',
							payload: {
								name: response.data.name,
								email: response.data.email,
								token: idTokenResult.token,
								role: response.data.role,
								_id: response.data._id
							}
						});
						toast.success(
							'Bienvenu sur notre site. Nous vous souhaitons une experience satisfaisante avec nous.'
						);
					})
					.catch((err) => console.log(err));

				// redirect
				Router.push('/');
			}
		} catch (err) {
			console.log(err);
			setValues({ ...values, loading: false });
			toast.error(err.message);
		}
	};

	const registerCompleteForm = () => (
		<form>
			<div className="form-group">
				<input type="email" className="form-control" value={email} disabled />
			</div>
			<div className="form-group">
				<input
					type="password"
					className="form-control"
					value={password}
					onChange={(e) => setValues({ ...values, password: e.target.value })}
					placeholder="Enter your password..."
					autoFocus
				/>
			</div>

			<Button onClick={handleSubmit} type="primary" shape="round" block size="large" loading={loading}>
				Proceed
			</Button>
		</form>
	);

	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<title>NUN SARL | Complete registration</title>
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<Banner title={'Complete registration'} />
				<div className="container-fluid p-5">
					<div className="row">
						<div className="col-md-6 offset-md-3">
							<h4 className="mb-5">Complete Registration</h4>
							{registerCompleteForm()}
						</div>
					</div>
				</div>
			</Layout>
		</React.Fragment>
	);
}

export default RegisterComplete;
