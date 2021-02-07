import React from 'react';
import Layout from '../../../components/Layout';
import Banner from '../../../components/header/Banner';
import Login from '../../../components/auth/Login';

const LoginPage = () => {
	return (
		<React.Fragment>
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
