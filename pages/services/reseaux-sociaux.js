import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ServicesInfoLeft from '../../components/services/ServiceInfoLeft';
import ServiceInfoRight from '../../components/services/ServiceInfoRight';
import Footer from '../../components/footer/Footer';
import ServiceBanner from '../../components/services/ServiceBanner';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';

function ThirdServicePage({ router }) {
	const head = () => (
		<Head>
			<title>NUN SARL | Réseaux sociaux</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Les réseaux sociaux représentent aujourd’hui le premier point de contact d’une organisation avec un utilisateur et un client potentiel. Au premier coup d’œil, vous devez le convaincre de la pertinence et de la qualité de votre contenu pour l’inciter à aller plus loin. NUN SARL crée pour vous une stratégie de communication précise et adaptée sur les réseaux sociaux."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta
				property="og:title"
				content={`Des contenus percutants pour une communication performante | NUN SARL`}
			/>
			<meta
				property="og:description"
				content="Les réseaux sociaux représentent aujourd’hui le premier point de contact d’une organisation avec un utilisateur et un client potentiel. Au premier coup d’œil, vous devez le convaincre de la pertinence et de la qualité de votre contenu pour l’inciter à aller plus loin. NUN SARL crée pour vous une stratégie de communication précise et adaptée sur les réseaux sociaux."
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
			<Layout>
				{/* Banner */}
				<ServiceBanner
					title={'Réseaux sociaux'}
					description={
						'Contact media, médiaplanning, achat d’espace média et hors média, conférence de presse, suivi de retombées médiatiques'
					}
				/>
				<div className="container mt-5 p-5">
					<p className="text-center" style={{ color: '#777' }}>
						Les réseaux sociaux représentent aujourd’hui le premier point de contact d’une organisation avec
						un utilisateur et un client potentiel. Au premier coup d’œil, vous devez le convaincre de la
						pertinence et de la qualité de votre contenu pour l’inciter à aller plus loin. NUN SARL crée
						pour vous une stratégie de communication précise et adaptée sur les réseaux sociaux.
					</p>
				</div>

				<ServicesInfoLeft
					title={'Des contenus percutants pour une communication performante'}
					description={`La plupart des entreprises et des marques se contentent de pousser des actualités sur les réseaux sociaux en espérant attirer une communauté fidèle. Nous vous aidons à aller plus loin, en créant des contenus qui suivent les dernières tendances visuelles et des messages qui attirent l’attention et suscitent des réactions importantes de votre audience.`}
					imgSrc={'/static/images/services/3/2.jpg'}
				/>
				<ServiceInfoRight
					title={'Chaque réseau social a son utilité : sachez tirer parti de son ADN'}
					description={`Il ne suffit pas de faire un copier/coller d’une photo Facebook sur Instagram pour gagner des followers. Chaque plateforme attire des utilisateurs différents, aussi bien en termes d’intérêts que de démographie. Nous concevons des publications sur mesure pour correspondre à leurs attentes, qu’il s’agisse d’informer, de promouvoir ou tout simplement de se changer les idées.`}
					imgSrc={'/static/images/services/3/1.jpg'}
				/>

				<div className="row">
					<div className="col-lg-12">
						<div className="hr" />
					</div>
				</div>

				<ServicesInfoLeft
					title={'Définir des objectifs et s’exprimer pour les atteindre'}
					description={`Une communication social media réussie est une communication qui atteint son but. Chez NUN SARL, nous établissons avec vous le ton de votre prise de parole pour vous démarquer des autres, nous définissons des objectifs atteignables et réalisables et nous suivons les indicateurs clés de votre réussite. C’est cette approche rationnelle qui fait de nos clients des leaders d’opinion sur les réseaux sociaux.`}
					imgSrc={'/static/images/services/3/3.jpg'}
				/>
			</Layout>
		</React.Fragment>
	);
}

export default withRouter(ThirdServicePage);
