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
									link={'/services/conseil-and-strategie'}
								/>
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem
									title="Identité visuelle et graphique"
									icon={'fas fa-bullseye'}
									link={'/services/identite-visuelle-et-graphique'}
								/>
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem
									title="Réseaux sociaux"
									icon={'fas fa-hashtag'}
									link={'/services/reseaux-sociaux'}
								/>
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem
									title="Développement Web & Mobile"
									icon={'fas fa-code'}
									link={'/services/developpement-web-and-mobile'}
								/>
								{/* Service Item End */}
								{/* Service Item Start */}
								{/* <ServiceItem title="Studio de création" /> */}
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem title="Multimédia" icon={'fas fa-video'} link={'/services/multimedia'} />
								{/* Service Item End */}
								{/* Service Item Start */}
								<ServiceItem
									title="Référencement"
									icon={'fas fa-globe'}
									link={'/services/referencement'}
								/>
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
