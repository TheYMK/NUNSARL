import React from 'react';
import Link from 'next/link';

function InfoC() {
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
								src="/static/images/aboutnun.jpg"
								className="rounded img-fluid d-block mx-auto"
								alt="App"
							/>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
							<div className="left-heading">
								<h2 className="section-title" style={{ fontWeight: '700' }}>
									Qui sommes-nous?
								</h2>
							</div>
							<div className="left-text">
								<p>
									Nous sommes une agence de conseil en communication pluri-média basé aux Comores.
									Nous somme l’agence qui vous offre la meilleure approche de communication façonnée à
									votre image. Nous sommes votre prestataire de services de qualité. Nous vous
									accompagnons dans le développement de votre notoriété avec un regard moderne,
									professionnel et objectif. Nous vous proposons des stratégies globales de
									communication tangibles qui répondent efficacement aux objectifs qualitatifs et
									quantitatifs en adéquation avec la taille et le budget de votre entreprise.<br />
									<br />
									Nous offrons de l’innovation, de la créativité, de l’expertise technologique aux
									entreprises. Notre force c’est{' '}
									<strong style={{ color: '#eb444d' }}>savoir communiquer</strong> et notre spécialité
									c’est <strong style={{ color: '#eb444d' }}>le Marketing Digital</strong>.
								</p>
								<Link href="/about">
									<a className="main-button text-white">En savoir plus</a>
								</Link>
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

export default InfoC;
