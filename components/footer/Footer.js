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
									<a href="#">
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-linkedin" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-rss" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-dribbble" />
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
