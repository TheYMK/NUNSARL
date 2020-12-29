import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import WelcomeArea from '../components/welcome/WelcomeArea';
import Services from '../components/services/Services';
import InfoA from '../components/info/InfoA';
import InfoB from '../components/info/InfoB';
import Formations from '../components/formations/Formations';
import Testimonials from '../components/testimonials/Testimonials';
import PricingPlans from '../components/pricing/PricingPlans';
import Team from '../components/team/Team';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function Home() {
	return (
		<React.Fragment>
			<Layout>
				<WelcomeArea />
				<Services />
				<InfoA />
				<InfoB />
				<Formations />
				<Testimonials />
				{/* <PricingPlans /> */}
				<Team />
				<Projects />
				<Contact />
				<Footer />
			</Layout>
		</React.Fragment>
	);
}
