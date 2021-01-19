import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/header/Banner';
import Admin from '../../components/auth/Admin';
import AdminDashboard from '../../components/dashboard/AdminDashboard';

const AdminDashboardPage = () => {
	return (
		<React.Fragment>
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
