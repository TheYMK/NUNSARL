import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import WelcomeArea from '../components/welcome/WelcomeArea';
import Services from '../components/services/Services';
import InfoA from '../components/info/InfoA';
import InfoB from '../components/info/InfoB';
import InfoC from '../components/info/InfoC';
import Formations from '../components/formations/Formations';
import Testimonials from '../components/testimonials/Testimonials';
import PricingPlans from '../components/pricing/PricingPlans';
import Team from '../components/team/Team';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import { withRouter } from 'next/router';
import { DOMAIN, FB_APP_ID } from '../config';
import Portfolio from '../components/portfolio/Portfolio';
import { getProjects } from '../actions/project';
import OurMission from '../components/mission/OurMission';
import { getMembers } from '../actions/team';

const Home = ({ router, projects, members }) => {
	const head = () => (
		<Head>
			<title>NUN SARL | Agence de communication digitale</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="NUN SARL représente une agence de communication digital. Son rôle est d’optimiser la présence en ligne des entreprises et de les aider à acquérir une clientèle cible. Mieux encore, la fidéliser, entretenir sa confiance. Chaque partenaire est unique, chaque projet représente un nouveau challenge."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta
				property="og:title"
				content={`Création de stratégies et expériences digitales sur mesure | NUN SARL`}
			/>
			<meta
				property="og:description"
				content="NUN SARL représente une agence de communication digital. Son rôle est d’optimiser la présence en ligne des entreprises et de les aider à acquérir une clientèle cible. Mieux encore, la fidéliser, entretenir sa confiance. Chaque partenaire est unique, chaque projet représente un nouveau challenge."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content="NUN SARL" />
			<meta property="og:image" content="/static/images/seo.png" />
			<meta property="og:image:secure_url" content="/static/images/seo.png" />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<WelcomeArea />
				<Services />
				<InfoC />
				<OurMission />
				<Formations />
				<Portfolio projects={projects} />
				<Team members={members} />
				{/* <Testimonials /> */}
				<Contact />
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getProjects().then((res) => {
		return getMembers().then((result) => {
			return {
				props: {
					projects: res.data,
					members: result.data
				}
			};
		});
	});
}

export default withRouter(Home);
