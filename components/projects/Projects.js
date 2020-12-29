import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {
	return (
		<React.Fragment>
			<section className="section" id="projects">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center-heading">
								<h2 className="section-title">Découvrez nos réalisations</h2>
							</div>
						</div>
						<div className="offset-lg-3 col-lg-6">
							<div className="center-text">
								<p />
							</div>
						</div>
					</div>
					{/* Blogs Start */}
					<div className="row">
						<ProjectItem
							title={'Graphisme'}
							description={
								"Notre vision est de développer la visibilité de votre marque en tenant compte de la lisibilité et l'identité de votre entreprise.La partie graphique permet de cibler au mieux vos contacts entrants et d'améliorer la qualité de votre trafic."
							}
						/>
						{/* <ProjectItem />
						<ProjectItem /> */}
					</div>
					{/* Blogs End */}
				</div>
			</section>
		</React.Fragment>
	);
}

export default Projects;
