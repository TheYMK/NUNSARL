import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ServicesInfoLeft from '../../components/services/ServiceInfoLeft';
import ServiceInfoRight from '../../components/services/ServiceInfoRight';
import Footer from '../../components/footer/Footer';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import ServiceBanner from '../../components/services/ServiceBanner';

function FourthServicePage({ router }) {
	const head = () => (
		<Head>
			<title>NUN SARL | Développement Web & Mobile</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Un site internet est souvent le coeur du dispositif digital d’une marque ou d’une entreprise. Il
				représente dans de nombreux cas le point de contact clé entre l’entreprise et ses
				prospects /clients/candidats. Le dispositif digital converge régulièrement vers lui afin de
				présenter l’entité et de générer des prises de contact, des ventes, des candidatures, etc...
				NUN SARL a déjà accompagné de nombreuses entreprises dans la création de site web de marque et corporate."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`L’atout qui va vous faire réussir | NUN SARL`} />
			<meta
				property="og:description"
				content="Un site internet est souvent le coeur du dispositif digital d’une marque ou d’une entreprise. Il
				représente dans de nombreux cas le point de contact clé entre l’entreprise et ses
				prospects /clients/candidats. Le dispositif digital converge régulièrement vers lui afin de
				présenter l’entité et de générer des prises de contact, des ventes, des candidatures, etc...
				NUN SARL a déjà accompagné de nombreuses entreprises dans la création de site web de marque et corporate."
			/>
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
				{/* Banner */}
				<ServiceBanner
					title={'Développement Web & Mobile'}
					description={'Site internet, application web & mobile.'}
				/>
				<div className="container mt-5 p-5">
					<p className="text-center" style={{ color: '#777' }}>
						Un site internet est souvent le coeur du dispositif digital d’une marque ou d’une entreprise. Il
						représente dans de nombreux cas le point de contact clé entre l’entreprise et ses prospects
						/clients/candidats. Le dispositif digital converge régulièrement vers lui afin de présenter
						l’entité et de générer des prises de contact, des ventes, des candidatures, etc.{' '}
						<strong style={{ color: '#eb444d' }}>NUN SARL</strong> a déjà accompagné de nombreuses
						entreprises dans la création de site web de marque et corporate.
					</p>
				</div>

				<ServicesInfoLeft
					title={'L’atout qui va vous faire réussir'}
					description={`Générer des demandes entrantes, susciter des candidatures, valoriser votre marque, gagner en légitimité, rendre fiers vos collaborateurs, …. votre site internet a tous ces pouvoirs si sa réalisation est prise en charge par une agence possédant les différentes expertises concernées.`}
					imgSrc={'/static/images/services/4/1.webp'}
				/>
				<ServiceInfoRight
					title={'Un design très valorisant'}
					description={`NUN SARL conçoit des interfaces graphiques en phase avec les dernières tendances du moment. Après une phase d’UX en mode co-création et l’analyse des « persona », le studio créatif désigne le site en faisant la synthèse entre votre brief, votre charte graphique et les tendances digitales esthétiques qui valoriseront au mieux votre entreprise ou votre marque. `}
					imgSrc={'/static/images/services/4/2.webp'}
				/>

				<div className="row">
					<div className="col-lg-12">
						<div className="hr" />
					</div>
				</div>

				<ServicesInfoLeft
					title={'Des contenus de grande qualité. Sans y passer trop de temps.'}
					description={`NUN SARL peut vous aider dans la création des contenus du site. Qu’il s’agisse de la rédaction des textes, des photographies, de vidéos ou de motion design, Adveris dispose d’un réseau de partenaires pouvant répondre à tous les besoins, dans tous les secteurs d’activité.`}
					imgSrc={'/static/images/services/4/3.webp'}
				/>
			</Layout>
		</React.Fragment>
	);
}

export default withRouter(FourthServicePage);
