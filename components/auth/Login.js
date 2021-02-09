import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../../actions/firebase';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { REGISTER_REDIRECT_URL } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

import { createOrUpdateUser, getCurrentUser } from '../../actions/auth';

function Login() {
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		loading: false
	});
	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const { email, password, loading } = values;

	const router = useRouter();
	const { from } = router.query;

	useEffect(
		() => {
			if (user && user.token) {
				getCurrentUser(user.token).then((res) => {
					if (router.query.from) {
						Router.push(`/${from}`);
					} else {
						if (res.data.role === 'admin') {
							Router.push('/admin/dashboard');
						} else {
							Router.push('/user/dashboard');
						}
					}
				});
			}
		},
		[ user ]
	);

	const roleBasedRedirect = (res) => {
		if (router.query.from) {
			Router.push(`/${from}`);
		} else {
			if (res.data.role === 'admin') {
				Router.push('/admin/dashboard');
			} else {
				Router.push('/user/dashboard');
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		try {
			// log the user in
			const result = await auth.signInWithEmailAndPassword(email, password);
			const { user } = result;

			const idTokenResult = await user.getIdTokenResult();

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
						'Bienvenu cher visiteur! Nous vous souhaitons une experience satisfaisante avec nos services.'
					);
					roleBasedRedirect(response);
				})
				.catch((err) => console.log(err));

			// Router.push('/');
		} catch (err) {
			console.log(err);
			toast.error(err.message);
			setValues({ ...values, loading: false });
		}
	};

	const googleLogin = async () => {
		setValues({ ...values, loading: true });
		auth
			.signInWithPopup(googleAuthProvider)
			.then(async (result) => {
				const { user } = result;
				const idTokenResult = await user.getIdTokenResult();
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
							'Bienvenu cher visiteur! Nous vous souhaitons une experience satisfaisante avec nos services.'
						);
						roleBasedRedirect(response);
					})
					.catch((err) => console.log(err));

				// Router.push('/');
			})
			.catch((err) => {
				setValues({ ...values, loading: false });
				console.log(err);
				toast.error(err.message);
			});
	};

	const loginForm = () => (
		<form>
			<div className="form-group">
				<input
					type="email"
					className="form-control"
					value={email}
					onChange={(e) => setValues({ ...values, email: e.target.value })}
					placeholder="johndoe@xxx.xx"
					autoFocus
				/>
			</div>
			<div className="form-group">
				<input
					type="password"
					className="form-control"
					value={password}
					onChange={(e) => setValues({ ...values, password: e.target.value })}
					placeholder="••••••••••"
				/>
			</div>

			<Button
				onClick={handleSubmit}
				type="primary"
				className="mb-2"
				shape="round"
				block
				size="large"
				loading={loading}
				disabled={!email || password.length < 6}
			>
				Se connecter
			</Button>
		</form>
	);

	return (
		<React.Fragment>
			<div className="">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<h4 className="mb-4">Connectez-vous à votre compte admin</h4>
						{loginForm()}

						{/* <Button
							onClick={googleLogin}
							type="danger"
							className=""
							icon={<GoogleOutlined />}
							shape="round"
							block
							size="large"
							loading={loading}
						>
							Login with Google
						</Button> */}

						<Link href="/auth/password/forgot">
							<a className="float-right text-danger mt-3">Mot de passe oublié?</a>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Login;
