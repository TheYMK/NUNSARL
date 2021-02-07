import React from 'react';
import Layout from '../../components/Layout';
import PortfolioDetails from '../../components/portfolio/PortfolioDetails';
import { getSingleProject, getRelatedProject } from '../../actions/project';
import RelatedProjects from '../../components/portfolio/RelatedProjects';
import Banner from '../../components/header/Banner';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';

const ProjectPage = ({ project, relatedProjects, router }) => {
	const head = () => (
		<Head>
			<title>NUN SARL | Portfolio</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta name="description" content="" />
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Nos Réalisations | NUN SARL`} />
			<meta property="og:description" content="" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content="NUN SARL" />
			<meta property="og:image" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
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

export default withRouter(ProjectPage);
