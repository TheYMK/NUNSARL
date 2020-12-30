import React from 'react';
import ServiceItem from './ServiceItem';

function Services() {
	return (
		<React.Fragment>
			<section className="section home-feature" id="services">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="row">
								{/* Service Item Start */}
								<ServiceItem
									title="Conseil & stratégie"
									icon={'fas fa-handshake'}
									link={'/services/1'}
								/>
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem title="Identité de marque" icon={'fas fa-bullseye'} link={'/services/2'} />
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem title="Réseaux sociaux" icon={'fas fa-hashtag'} link={'/services/3'} />
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem
									title="Développement web & mobile"
									icon={'fas fa-code'}
									link={'/services/4'}
								/>
								{/* Service Item End */}
								{/* Service Item Start */}
								{/* <ServiceItem title="Studio de création" /> */}
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem title="Médiatisation" icon={'fas fa-video'} link={'/services/5'} />
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem title="Référencement" icon={'fas fa-globe'} link={'/services/6'} />
								{/* Service Item End */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Services;
