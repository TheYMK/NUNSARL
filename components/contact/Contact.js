import React, { useState } from 'react';
import { Spin } from 'antd';
import { sendMessage } from '../../actions/form';
import { toast } from 'react-toastify';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Contact() {
	const [ values, setValues ] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [ loading, setLoading ] = useState(false);
	const { name, email, message } = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		sendMessage(values)
			.then((res) => {
				toast.success(
					'Votre message a bien été reçu. Nous nous engageons a vous répondre le plus rapidement possible.'
				);
				setValues({ ...values, name: '', email: '', message: '' });
				setLoading(false);
			})
			.catch((err) => {
				toast.error(`Une erreur s'est produite lors de l'envoie de votre message. Veuillez réessayer.`);
				setValues({ ...values, name: '', email: '', message: '' });
				setLoading(false);
			});
	};

	return (
		<React.Fragment>
			<section className="section colored" id="contact-us">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center-heading">
								<h2 className="section-title" style={{ fontWeight: '700' }}>
									Contactez Nous
								</h2>
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
									<p>+269 3346427 / +269 4700053</p>
									<p>contactshopnun@gmail.com</p>
								</div>
							</div>

							<div className="col-lg-8 col-md-6 col-sm-12">
								<div className="contact-form">
									<form id="contact" onSubmit={handleSubmit}>
										<div className="row">
											<div className="col-lg-6 col-md-12 col-sm-12">
												<fieldset>
													<input
														name="name"
														type="text"
														className="form-control"
														id="name"
														value={name}
														onChange={(e) => setValues({ ...values, name: e.target.value })}
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
														value={email}
														onChange={(e) =>
															setValues({ ...values, email: e.target.value })}
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
														value={message}
														onChange={(e) =>
															setValues({ ...values, message: e.target.value })}
														required=""
													/>
												</fieldset>
											</div>
											<div className="col-lg-12">
												<fieldset>
													<button type="submit" id="form-submit" className="main-button">
														{loading ? <Spin indicator={antIcon} /> : 'Envoyer'}
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
