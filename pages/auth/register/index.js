import React from 'react';
import Layout from '../../../components/Layout';
import Banner from '../../../components/header/Banner';
import Register from '../../../components/auth/Register';

const RegisterPage = () => {
	return (
		<React.Fragment>
			<Layout>
				<Banner title={'Register Page'} />
				<div className="container mt-0 p-5">
					<Register />
				</div>
			</Layout>
			{/*  */}
			{/*  */}
		</React.Fragment>
	);
};

export default RegisterPage;
