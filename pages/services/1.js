import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import ServicesInfoLeft from '../../components/services/ServiceInfoLeft';
import ServiceInfoRight from '../../components/services/ServiceInfoRight';
import ServiceBanner from '../../components/services/ServiceBanner';
import Footer from '../../components/footer/Footer';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';

function FirstServicePage({ router }) {
	const head = () => (
		<Head>
			<title>NUN SARL | Conseil et stratégie</title>
			<meta
				name="description"
				content="L’objectif de nos conseils en stratégie digitale est d’élaborer un plan de marketing numérique précis qui prend en compte vos objectifs marketing globaux. Accroître votre notoriété, augmenter vos revenus, gagner en efficacité, réduire les coûts et mieux communiquer avec vos clients, font partie des priorités essentielles à la réussite de votre entreprise."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta
				property="og:title"
				content={`Pourquoi faire appel à un conseiller en stratégie digitale ? | NUN SARL`}
			/>
			<meta
				property="og:description"
				content="L’objectif de nos conseils en stratégie digitale est d’élaborer un plan de marketing numérique précis qui prend en compte vos objectifs marketing globaux. Accroître votre notoriété, augmenter vos revenus, gagner en efficacité, réduire les coûts et mieux communiquer avec vos clients, font partie des priorités essentielles à la réussite de votre entreprise."
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
				{/* Banner */}
				<ServiceBanner title={'Conseil & stratégie'} />
				<div className="container mt-5 p-5">
					<p className="text-center" style={{ color: '#777' }}>
						L’objectif de nos conseils en stratégie digitale est d’élaborer un plan de marketing numérique
						précis qui prend en compte vos objectifs marketing globaux. Accroître votre notoriété, augmenter
						vos revenus, gagner en efficacité, réduire les coûts et mieux communiquer avec vos clients, font
						partie des priorités essentielles à la réussite de votre entreprise.
					</p>
				</div>
				<ServicesInfoLeft
					title={'Pourquoi faire appel à un conseiller en stratégie digitale ?'}
					description={`Le fait de vouloir mettre en place une bonne stratégie de communication en ligne invite à prendre plus de temps dans les études et la réalisation des procédés. Se confier à nos professionnels pour la mise en place de votre stratégie digitale vous permet d’obtenir un gain de temps considérable pour la réalisation d’autres projets pour le développement de votre entreprise.
				Avec cela, vous pouvez ajuster votre budget selon vos moyens et vos besoins. À l’instar d’une meilleure action, faire appel à une agence de conseil en stratégie digitale vous permet de gérer vos priorités tout le long de vos projets. En nous confiant votre projet, nous vous proposons une réponse sur-mesure pour répondre à vos besoins. `}
					imgSrc={'/static/images/services/1/1.jpg'}
				/>
				<ServiceInfoRight
					title={`Ensemble, déclenchons et accélérons la transformation digitale qui rendra votre organisation plus efficace.
				`}
					description={`Votre stratégie digitale vous permet-elle de rester en résonance avec un consommateur hyperconnecté, féru d’innovations, de contenus personnalisés toujours disponibles, qui s’affranchit de l’interaction humaine dans son parcours d’achat ? Dans cet environnement versatile, évaluez-vous vos performances en temps réel pour ré-ajuster vos actions en conséquence ?L’agence 1min30 vous accompagne dans la transformation digitale qui vous fera atteindre vos objectifs.`}
					imgSrc={'/static/images/services/1/2.jpg'}
				/>
			</Layout>
		</React.Fragment>
	);
}

export default withRouter(FirstServicePage);
