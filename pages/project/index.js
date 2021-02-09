import React from 'react';
import Banner from '../../components/header/Banner';
import Layout from '../../components/Layout';
import { getProjects } from '../../actions/project';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import Link from 'next/link';

const ProjectPage = ({ projects }) => {
	return (
		<React.Fragment>
			<Layout>
				<Banner title={'Nos Réalisations'} />
				<div className="container">
					<div className="mt-5 p-5">
						<p className="text-center" style={{ color: '#777' }}>
							Découvrez la liste incroyable de projets réalisés par notre agence. Qu'attendez-vous pour
							proposer le votre ?
							<br />
							Parcourez quelques uns des projets de nos clients et découvrez nos expertises en stratégie
							digitales, graphisme, création de site web et bien d'autres domaine.
						</p>
					</div>
					<div className="row mt-5">
						{projects.map((p) => (
							<PortfolioItem
								key={p._id}
								imgSrc={p.images.length > 0 ? p.images[0].url : '/static/images/noimage.jpg'}
								title={p.name}
								category={p.category}
								slug={p.slug}
								client={p.client}
							/>
						))}
					</div>
				</div>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getProjects().then((res) => {
		return {
			props: {
				projects: res.data
			}
		};
	});
}

export default ProjectPage;
