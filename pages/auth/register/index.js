import React from 'react';
import Layout from '../../../components/Layout';
import Banner from '../../../components/header/Banner';
import Register from '../../../components/auth/Register';

const RegisterPage = () => {
	return (
		<React.Fragment>
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
