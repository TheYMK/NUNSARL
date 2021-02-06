import React from 'react';
import TeamMember from './TeamMember';

const Team = ({ members }) => {
	return (
		<section id="team" className="teams section">
			<div className="container">
				<div className="center-heading">
					<h2 className="section-title" style={{ fontWeight: '700' }}>
						Notre Équipe
					</h2>
				</div>
				<div className="row mt-5 d-flex justify-content-center">
					{members.map((m, i) => (
						<TeamMember
							imgSrc={m.images[0].url}
							name={m.full_name}
							jobTitle={m.job_title}
							jobDescription={m.description}
							twitter_link={m.twitter_link}
							linkedin_link={m.linkedin_link}
							key={i}
						/>
					))}
					{/* <TeamMember
						imgSrc={'/static/images/team/rayyane.jpg'}
						name={'Dini Athoumani Rayyane'}
						jobTitle={'CEO'}
						jobDescription={
							'Attaché de Presse du Ministre des Finances , du Budget et du secteur bancaire chez Ministère des Finances du budget et du secteur Bancaire-Comores.'
						}
						twitter_link={'https://twitter.com/Radak35'}
						linkedin_link={'https://www.linkedin.com/in/dini-athoumani-rayyane-05a2b2121/'}
					/>
					<TeamMember
						imgSrc={'/static/images/team/kaym.jpg'}
						name={'Kaym Kassai'}
						jobTitle={'Développeur / Rédacteur Web'}
						jobDescription={'Ingénieur logiciel, expert dans le domaine du développement web & mobile.'}
						twitter_link={'https://twitter.com/kassai_kaym'}
						linkedin_link={'https://www.linkedin.com/in/kaym-kassai-693011157/'}
					/>
					<TeamMember
						imgSrc={'/static/images/team/raihane.jpg'}
						name={'Raihane Mansoibou'}
						jobTitle={'Agent Commercial'}
						jobDescription={'Experte en gestion financière et administrative'}
						twitter_link={''}
						linkedin_link={'https://www.linkedin.com/in/raihane-mansoibou-63a867204/'}
					/>
					<TeamMember
						imgSrc={'/static/images/team/subira.jpg'}
						name={'Subira Ahamada'}
						jobTitle={'Assistant Administratif'}
						jobDescription={
							'Assistant administratif contractuel chargé de programme, organisation de la recherche et gestion des projets'
						}
						twitter_link={''}
						linkedin_link={'https://www.linkedin.com/in/ahmada-ibrahim-alias-eric-49233552/'}
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Team;
