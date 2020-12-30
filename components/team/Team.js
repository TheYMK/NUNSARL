import React from 'react';
import TeamMember from './TeamMember';

function Counter() {
	return (
		<React.Fragment>
			<section className="counter teamsection" id="team">
				<div className="content">
					<div className="container">
						<h5 className="teamsection-title h1">Notre Équipe</h5>
						<div className="row">
							<TeamMember
								imgSrc={'/static/images/team1.jpeg'}
								fullname={'DINI ATHOUMANI RAYYANE'}
								description={
									'Attaché de Presse du Ministre des Finances , du Budget et du secteur Bancaire chez MINISTÈRE DES FINANCES DU BUDGET ET DU SECTEUR BANCAIRE-COMORES'
								}
								jobTitle={'CEO'}
							/>
							<TeamMember
								imgSrc={'/static/images/team2.jpg'}
								fullname={'KAYM KASSAI'}
								description={
									'Ingénieur logiciel de formation. Développeur Web Fullstack de profession.'
								}
								jobTitle={'Développeur & Rédacteur Web'}
							/>
							<TeamMember
								imgSrc={'/static/images/team1.jpeg'}
								fullname={'DINI ATHOUMANI RAYYANE'}
								description={
									'Attaché de Presse du Ministre des Finances , du Budget et du secteur Bancaire chez MINISTÈRE DES FINANCES DU BUDGET ET DU SECTEUR BANCAIRE-COMORES'
								}
								jobTitle={'CEO'}
							/>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Counter;
