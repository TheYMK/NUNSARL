import React from 'react';

const OurMission = () => {
	return (
		<React.Fragment>
			<div className="section container" id="mission">
				<div className="mission-item">
					<div className="mission-content">
						{/* <i className="ri-information-fill" /> */}
						<i className="mb-4">
							<img src="/static/images/nunlogo.png" />
						</i>
						<h5 className="text-center" style={{ fontWeight: '700' }}>
							NOTRE MISSION
						</h5>
						<div className="mission-info">
							<p className="user-name px-5" style={{ textAlign: 'justify' }}>
								Notre mission consiste à proposer et à développer des solutions innovantes de qualités
								accessibles et adaptés aux besoins des entreprises et au grand public. Nous étudions les
								problèmes de chaque secteur économique et nous proposons des solutions et outils
								technologiques innovantes de haute performance et fiabilité. Nous participons activement
								au programme national de l’administration numérique et de l’économie digitale des îles
								des Comores.
							</p>
							<p className="user-name px-5" style={{ textAlign: 'justify' }}>
								Notre vision est simple : devenir le leader national de référence dans le domaine de la
								technologie de l’information et de la communication en contribuant à son développement à
								sa mise en application dans l’intérêt des entreprises et du grand public.
							</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default OurMission;
