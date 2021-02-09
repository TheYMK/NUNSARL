import React from 'react';

function InfoB() {
	return (
		<React.Fragment>
			<section className="section padding-bottom-100">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
							data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
						>
							<img
								src="/static/images/right-img.webp"
								className="rounded img-fluid d-block mx-auto"
								alt="App"
							/>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
							<div className="left-heading">
								<h2 className="section-title">Pourquoi nous faire confiance ?</h2>
							</div>
							<div className="left-text">
								<p>
									Parce que chez <strong style={{ color: '#eb444d' }}>NUN SARL</strong> nous sommes à
									votre écoute Nous avons de nombreuses références au niveau local et international
									Nous disposons d’une équipe complète qui est formée à toutes les facettes qui
									réalise un travail rapide et épuré. Notre savoir-faire est fondamental pour un réel
									gain de temps et pour tous types d’entreprises.
									<br />
									<br />
									<strong>Fait nous confiance pour:</strong> Nos valeurs, nos compétences, notre état
									d’esprit, notre souci de l’autre, notre sens de l’exactitude, notre performance
									technique, notre créativité…
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default InfoB;
