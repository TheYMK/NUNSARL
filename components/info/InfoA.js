import React from 'react';

function InfoA() {
	return (
		<React.Fragment>
			<section className="section padding-top-70 padding-bottom-0" id="about">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-5 col-md-12 col-sm-12 align-self-center"
							data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
						>
							<img
								src="/static/images/left-img.jpg"
								className="rounded img-fluid d-block mx-auto"
								alt="App"
							/>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
							<div className="left-heading">
								<h2 className="section-title">
									Notre objectif: <br />
									<strong>Devenir le partenaire de votre réussite</strong>
								</h2>
							</div>
							<div className="left-text">
								<p>
									<strong style={{ color: '#eb444d' }}>NUN SARL</strong> représente une agence de
									communication digital. Son rôle est d’optimiser la présence en ligne des entreprises
									et de les aider à acquérir une clientèle cible. Mieux encore, la fidéliser,
									entretenir sa confiance. Chaque partenaire est unique, chaque projet représente un
									nouveau challenge.
									<br />
									<br />
									Depuis sa création, <strong style={{ color: '#eb444d' }}>NUN SARL</strong> a pour
									objectif d'accompagner de nombreuses sociétés dans la définition de leur stratégie
									de présence en ligne et hors ligne. Analyser ses enjeux, et l’accompagner pour les
									relever.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="hr" />
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default InfoA;
