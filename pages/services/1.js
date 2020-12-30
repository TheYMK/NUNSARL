import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ServicesInfoLeft from '../../components/services/ServiceInfoLeft';
import ServiceInfoRight from '../../components/services/ServiceInfoRight';
import ServiceBanner from '../../components/services/ServiceBanner';
import Footer from '../../components/footer/Footer';

function FirstServicePage() {
	return (
		<React.Fragment>
			<Layout />
			{/* Banner */}
			<ServiceBanner title={'Conseil & stratégie'} />
			<div className="container mt-5 p-5">
				<p className="text-center" style={{ color: '#777' }}>
					L’objectif de nos conseils en stratégie digitale est d’élaborer un plan de marketing numérique
					précis qui prend en compte vos objectifs marketing globaux. Accroître votre notoriété, augmenter vos
					revenus, gagner en efficacité, réduire les coûts et mieux communiquer avec vos clients, font partie
					des priorités essentielles à la réussite de votre entreprise.
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

			<Footer />
		</React.Fragment>
	);
}

export default FirstServicePage;
