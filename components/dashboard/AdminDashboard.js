import React from 'react';
import ManageProjects from './ManageProjects';

const AdminDashboard = () => {
	return (
		<React.Fragment>
			<section id="admin-menu" className="admin-menu">
				<div className="">
					<ul className="nav nav-tabs row d-flex">
						<li className="nav-item col-3" data-aos="zoom-in">
							<a className="nav-link active show" data-toggle="tab" href="#tab-1">
								<i className="ri-briefcase-4-fill" />
								<h4 className="d-none d-lg-block">Projets</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
							<a className="nav-link" data-toggle="tab" href="#tab-2">
								<i className="ri-group-fill" />
								<h4 className="d-none d-lg-block">Equipes</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
							<a className="nav-link" data-toggle="tab" href="#tab-3">
								<i className="ri-service-fill" />
								<h4 className="d-none d-lg-block">Services</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
							<a className="nav-link" data-toggle="tab" href="#tab-4">
								<i className="ri-shopping-cart-fill" />
								<h4 className="d-none d-lg-block">Demandes</h4>
							</a>
						</li>
					</ul>

					<div className="tab-content" data-aos="fade-up">
						<div className="tab-pane active show" id="tab-1">
							<ManageProjects />
						</div>
						<div className="tab-pane" id="tab-2">
							{/* <ManageBlogs /> */}
							team
						</div>
						<div className="tab-pane" id="tab-3">
							{/* <ManageOrders /> */}
							services
						</div>
						<div className="tab-pane" id="tab-4">
							{/* <ManageAccounts /> */}
							Demandes
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AdminDashboard;
