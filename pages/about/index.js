import React from 'react';
import InfoA from '../../components/info/InfoA';
import InfoB from '../../components/info/InfoB';
import Layout from '../../components/Layout';

const AboutUsPage = () => {
	return (
		<React.Fragment>
			<Layout>
				<div className="single-service">
					<div className="header-text">
						<div className="container">
							<div className="row">
								<div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
									<h1>À Propos de nous</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-5 p-5">
					<InfoA />
					<InfoB />
				</div>
			</Layout>
		</React.Fragment>
	);
};

export default AboutUsPage;
