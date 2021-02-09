import React from 'react';

function InfoA() {
	return (
		<React.Fragment>
			<section className="section padding-top-70 padding-bottom-0" id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
							<div className="left-heading">
								<h2 className="section-title">
									Nos objectifs: <br />
									<strong>Devenir le partenaire de votre réussite</strong>
								</h2>
							</div>
							<div className="left-text">
								<p>
									<i className="ri-arrow-right-circle-fill" /> Vous permettre de communiquer de façon
									efficace et atteindre des cibles précises <br />
									<br />
									<i className="ri-arrow-right-circle-fill" /> Apportez des nouvelles approches
									technologiques complètes et novices ! <br />
									<br />
									<i className="ri-arrow-right-circle-fill" />Devenir le partenaire indispensable pour
									votre réussite
								</p>
							</div>
						</div>
						<div className="col-lg-1" />
						<div
							className="col-lg-5 col-md-12 col-sm-12 align-self-center"
							data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
						>
							<img
								src="/static/images/left-img.webp"
								className="rounded img-fluid d-block mx-auto"
								alt="App"
							/>
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
