import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ServicesInfoLeft from '../../components/services/ServiceInfoLeft';
import ServiceInfoRight from '../../components/services/ServiceInfoRight';
import Footer from '../../components/footer/Footer';
import ServiceBanner from '../../components/services/ServiceBanner';

function FifthServicePage() {
	return (
		<React.Fragment>
			<Layout>
				{/* Banner */}
				<ServiceBanner title={'Médiatisation'} />
				<div className="container mt-5 p-5">
					<p className="text-center" style={{ color: '#777' }}>
						Que l’on veuille diffuser des messages au plus grand nombre, développer sa communauté ou même
						tout simplement l’animer et l’engager, les investissements médias sur les réseaux sociaux sont
						aujourd’hui devenus une obligation. Pour répondre à vos attentes et développer des communautés
						actives et impliquées, nous nous engageons toujours sur des résultats garantis avec comme
						ambition de toujours les dépasser !
					</p>
				</div>

				<ServicesInfoLeft
					title={`Cibler les futurs fans de votre marque.`}
					description={`Nous avons développé une forte expertise dans la gestion de campagnes de médiatisation sur les réseaux sociaux. Notre objectif, lorsque nous ciblons certaines catégories socio-démographiques d’internautes, est de créer des communautés actives et impliquées. Notre indicateur favori : le taux d’engagement.`}
					imgSrc={'/static/images/services/5/2.jpg'}
				/>
				<ServiceInfoRight
					title={'Optimisez votre visibilité.'}
					description={`Parce qu’on ne peut pas faire de feu sans étincelle, la médiatisation est aujourd’hui un élément indispensable pour donner de la visibilité à vos messages et campagnes. Des campagnes Adwords, aux investissements sur les réseaux sociaux, nous étudions, définissons et créons des campagnes que nous optimisons en vue d’atteindre les objectifs que nous nous sommes fixés, avec vous. Chaque campagne fait l’objet d’un reporting mensuel chiffré et détaillé pour un meilleur suivi de votre progression et une meilleure transparence sur les investissements que vous réalisez.`}
					imgSrc={'/static/images/services/5/3.jpg'}
				/>
			</Layout>
		</React.Fragment>
	);
}

export default FifthServicePage;
