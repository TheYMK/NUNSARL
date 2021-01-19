import React from 'react';
import Layout from '../../../components/Layout';
import Banner from '../../../components/header/Banner';
import Login from '../../../components/auth/Login';

const LoginPage = () => {
	return (
		<React.Fragment>
			<Layout>
				<Banner title={'Login Page'} />
				<div className="container-fluid mt-0 p-5">
					<Login />
				</div>
			</Layout>
			{/*  */}
			{/*  */}
		</React.Fragment>
	);
};

export default LoginPage;
