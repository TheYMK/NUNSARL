import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/header/Banner';
import Admin from '../../components/auth/Admin';
import AdminDashboard from '../../components/dashboard/AdminDashboard';
import Head from 'next/head';

const AdminDashboardPage = () => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<title>NUN SARL | Tableau de bord</title>
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<Admin>
					<Banner title={'Dashboard'} />
					<div className="container-fluid mt-5 p-5">
						<AdminDashboard />
					</div>
				</Admin>
			</Layout>
		</React.Fragment>
	);
};

export default AdminDashboardPage;
