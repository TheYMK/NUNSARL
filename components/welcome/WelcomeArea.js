import React from 'react';
import Link from 'next/link';

function WelcomeArea() {
	return (
		<React.Fragment>
			<div className="welcome-area" id="welcome">
				<div className="header-text">
					<div className="container">
						<div className="row">
							<div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
								<h1>
									Création de <strong>stratégies</strong> <br />et <strong>expériences</strong>{' '}
									digitales sur mesure
								</h1>
								<p>Nous faisons de votre ambition un projet collectif.</p>
								<Link href="#contact">
									<a className="main-button-slider">Contactez nous</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default WelcomeArea;
