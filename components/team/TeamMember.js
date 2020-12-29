import React from 'react';

function TeamMember({ imgSrc, fullname, jobTitle, description }) {
	return (
		<React.Fragment>
			<div className="col-xs-12 col-sm-6 col-md-4">
				<div className="image-flip">
					<div className="mainflip flip-0">
						<div className="frontside">
							<div className="card">
								<div className="card-body text-center">
									<p>
										<img className="img-fluid" src={imgSrc} alt="team member" />
										<h4 className="card-title mt-3" style={{ fontSize: '18px' }}>
											{fullname}
										</h4>
										<p className="card-text">{jobTitle}</p>
									</p>
								</div>
							</div>
						</div>
						<div className="backside">
							<div className="card">
								<div className="card-body text-center mt-4">
									<h4 className="card-title">{fullname}</h4>
									<p className="card-text">{description}</p>
									<ul className="list-inline">
										<li className="list-inline-item">
											<a
												className="social-icon text-xs-center"
												target="_blank"
												href="https://www.fiverr.com/share/qb8D02"
											>
												<i className="fa fa-facebook" />
											</a>
										</li>
										<li className="list-inline-item">
											<a
												className="social-icon text-xs-center"
												target="_blank"
												href="https://www.fiverr.com/share/qb8D02"
											>
												<i className="fa fa-twitter" />
											</a>
										</li>
										<li className="list-inline-item">
											<a
												className="social-icon text-xs-center"
												target="_blank"
												href="https://www.fiverr.com/share/qb8D02"
											>
												<i className="fa fa-skype" />
											</a>
										</li>
										<li className="list-inline-item">
											<a
												className="social-icon text-xs-center"
												target="_blank"
												href="https://www.fiverr.com/share/qb8D02"
											>
												<i className="fa fa-google" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default TeamMember;
