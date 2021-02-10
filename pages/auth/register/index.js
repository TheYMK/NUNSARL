import React from 'react';
import Layout from '../../../components/Layout';
import Banner from '../../../components/header/Banner';
import Register from '../../../components/auth/Register';
import Head from 'next/head';

const RegisterPage = () => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<title>NUN SARL | Création de compte</title>
		</Head>
	);
	return (
		<React.Fragment>
			{head()}
			<Layout>
				<Banner title={'Création de compte'} />
				<div className="mt-md-5" />
				<div className="container-fluid px-3 mb-5">
					<Register />
				</div>
			</Layout>
			{/*  */}
			{/*  */}
		</React.Fragment>
	);
};

export default RegisterPage;
