import React from 'react';

const TeamMember = ({ name, jobTitle, jobDescription, twitter_link, linkedin_link, imgSrc }) => {
	return (
		<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
			<div className="team">
				<div className="team-img">
					<img src={imgSrc} className="img-fluid" alt="" />
					<div className="social">
						<p className="mb-2">{jobDescription}</p>
						<a href={twitter_link} target={twitter_link.length > 0 ? 'blank' : ''}>
							<i className="fa fa-twitter" />
						</a>
						<a href={linkedin_link} target={linkedin_link.length > 0 ? 'blank' : ''}>
							<i className="fa fa-linkedin" />
						</a>
					</div>
				</div>
				<div className="team-info">
					<h4>{name}</h4>
					<span>{jobTitle}</span>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
