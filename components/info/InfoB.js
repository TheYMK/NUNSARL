import React from 'react';

function InfoB() {
	return (
		<React.Fragment>
			<section className="section padding-bottom-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
							<div className="left-heading">
								<h2 className="section-title">
									Pourquoi choisir une agence de communication pour développer votre activité?
								</h2>
							</div>
							<div className="left-text">
								<p>
									<strong style={{ color: '#eb444d' }}>NUN SARL</strong> met en place des stratégies
									d’acquisition digitales qui sont en adéquation avec votre vision globale et vos
									besoins. En tant qu'agence de communication, nous recherchons les meilleurs leviers
									et associations de ces derniers pour vous aider à vous développer dans les
									meilleures conditions. Choisir de faire confiance à une agence de communication
									c’est choisir de travailler avec des experts en marketing digital.
									<br />
									<br />
									En tant qu’agence de communication interactive nous développons des supports de
									communication adaptés à la stratégie que nous vous proposons afin que vous ayez une
									solution clé en main ! L’agence digitale est donc le meilleur moyen d’accéder
									rapidement à une expertise qualifiée pour le développement de votre activité.
								</p>
							</div>
						</div>
						<div className="col-lg-1" />
						<div
							className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
							data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
						>
							<img
								src="/static/images/right-img.jpg"
								className="rounded img-fluid d-block mx-auto"
								alt="App"
							/>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default InfoB;
