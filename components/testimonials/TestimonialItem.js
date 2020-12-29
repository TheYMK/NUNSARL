import React from 'react';

function TestimonialItem({ message, imgSrc, name, company, jobTitle }) {
	return (
		<React.Fragment>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="team-item">
					<div className="team-content">
						<i>
							<img src="/static/images/testimonial-icon.png" alt="" />
						</i>
						<p>{message}</p>
						<div className="user-image">
							<img src="http://placehold.it/60x60" alt="" />
						</div>
						<div className="team-info">
							<h3 className="user-name">
								{name} ({company})
							</h3>
							<span>{jobTitle}</span>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default TestimonialItem;
