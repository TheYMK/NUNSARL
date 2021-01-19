import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
	return (
		<section id="team" className="teams section">
			<div className="container">
				<div className="center-heading">
					<h2 className="section-title">Notre Équipe</h2>
				</div>
				<div className="row mt-5">
					<TeamMember
						imgSrc={'/static/images/team/rayyane.jpg'}
						name={'Dini Athoumani Rayyane'}
						jobTitle={'CEO'}
						twitter_link={'https://twitter.com/kassai_kaym'}
						linkedin_link={'https://www.linkedin.com/in/kaym-kassai-693011157/'}
					/>
					<TeamMember
						imgSrc={'/static/images/team/kaym.jpg'}
						name={'Kaym Kassai'}
						jobTitle={'Développeur Web'}
						twitter_link={'https://twitter.com/kassai_kaym'}
						linkedin_link={'https://www.linkedin.com/in/kaym-kassai-693011157/'}
					/>
					<TeamMember
						imgSrc={'/static/images/team/raihane.jpg'}
						name={'Raihane Mansoibou'}
						jobTitle={'Agent Commercial'}
						twitter_link={'https://twitter.com/kassai_kaym'}
						linkedin_link={'https://www.linkedin.com/in/kaym-kassai-693011157/'}
					/>
					<TeamMember
						imgSrc={'/static/images/team/subira.jpg'}
						name={'Subira Ahamada'}
						jobTitle={'Assistant Administratif'}
						twitter_link={'https://twitter.com/kassai_kaym'}
						linkedin_link={'https://www.linkedin.com/in/kaym-kassai-693011157/'}
					/>
				</div>
			</div>
		</section>
	);
};

export default Team;
