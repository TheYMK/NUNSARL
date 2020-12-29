import React from 'react';

function Contact() {
	return (
		<React.Fragment>
			<section className="section colored" id="contact-us">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center-heading">
								<h2 className="section-title">Contactez Nous</h2>
							</div>
						</div>
						<div className="offset-lg-3 col-lg-6">
							<div className="center-text">
								<p />
							</div>
						</div>

						<div className="row container">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<h5 className="margin-bottom-30">Informations</h5>
								<div className="contact-text">
									<p>Route D’iconi Malouzini</p>
									<p>+269 3326321 / +269 4700053 / +269 3326321</p>
									<p>contactshopnun@gmail.com</p>
								</div>
							</div>

							<div className="col-lg-8 col-md-6 col-sm-12">
								<div className="contact-form">
									<form id="contact" action="" method="get">
										<div className="row">
											<div className="col-lg-6 col-md-12 col-sm-12">
												<fieldset>
													<input
														name="name"
														type="text"
														className="form-control"
														id="name"
														placeholder="Votre nom complet"
														required
													/>
												</fieldset>
											</div>
											<div className="col-lg-6 col-md-12 col-sm-12">
												<fieldset>
													<input
														name="email"
														type="email"
														className="form-control"
														id="email"
														placeholder="Votre adresse e-mail "
														required
													/>
												</fieldset>
											</div>
											<div className="col-lg-12">
												<fieldset>
													<textarea
														name="message"
														rows="6"
														className="form-control"
														id="message"
														placeholder="Votre message..."
														required=""
													/>
												</fieldset>
											</div>
											<div className="col-lg-12">
												<fieldset>
													<button type="submit" id="form-submit" className="main-button">
														Envoyer
													</button>
												</fieldset>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Contact;
