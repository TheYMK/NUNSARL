import React from 'react';
import Layout from '../../../components/Layout';
import Banner from '../../../components/header/Banner';
import Login from '../../../components/auth/Login';
import Head from 'next/head';

const LoginPage = () => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<title>NUN SARL | Se Connecter</title>
		</Head>
	);
	return (
		<React.Fragment>
			{head()}
			<Layout>
				<Banner title={'Se Connecter'} />
				<div className="mt-md-5" />
				<div className="container-fluid px-3 mb-3">
					<Login />
				</div>
			</Layout>
			{/*  */}
			{/*  */}
		</React.Fragment>
	);
};

export default LoginPage;
