import React from 'react';
import Layout from '../../components/Layout';
import PortfolioDetails from '../../components/portfolio/PortfolioDetails';
import { getSingleProject, getRelatedProject } from '../../actions/project';
import RelatedProjects from '../../components/portfolio/RelatedProjects';
import Banner from '../../components/header/Banner';

const ProjectPage = ({ project, relatedProjects }) => {
	return (
		<React.Fragment>
			<Layout>
				<Banner title={'Detail du projet'} />
				<div className="container">
					<PortfolioDetails project={project} />

					<div className="portfolio container">
						<hr />
						<h3 className="mb-5">Voir aussi</h3>
						<RelatedProjects relatedProjects={relatedProjects} className="mb-5" />
					</div>
				</div>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleProject(params.slug).then((res) => {
		return getRelatedProject(res.data._id).then((result) => {
			return {
				props: {
					project: res.data,
					relatedProjects: result.data
				}
			};
		});
	});
}

export default ProjectPage;
