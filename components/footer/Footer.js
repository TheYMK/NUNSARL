import React from 'react';

function Footer() {
	return (
		<React.Fragment>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<ul className="social">
								<li>
									<a href="https://www.facebook.com/NUN-SARL-350644339435823">
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/nun_sarl/">
										<i className="fa fa-instagram" />
									</a>
								</li>
								<li>
									<a href="https://twitter.com/NunSarl">
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/company/nun-sarl">
										<i className="fa fa-linkedin" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<p className="copyright">Copyright &copy; 2020 NUN SARL, tous droit reservés</p>
						</div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default Footer;
