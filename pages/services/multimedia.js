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

function FifthServicePage({ router }) {
	const head = () => (
		<Head>
			<title>NUN SARL | Multimédia</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Que l’on veuille diffuser des messages au plus grand nombre, développer sa communauté ou même tout simplement l’animer et l’engager, les investissements médias sur les réseaux sociaux sont aujourd’hui devenus une obligation. Pour répondre à vos attentes et développer des communautés actives et impliquées, nous nous engageons toujours sur des résultats garantis avec comme ambition de toujours les dépasser !"
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Cibler les futurs fans de votre marque | NUN SARL`} />
			<meta
				property="og:description"
				content="Que l’on veuille diffuser des messages au plus grand nombre, développer sa communauté ou même tout simplement l’animer et l’engager, les investissements médias sur les réseaux sociaux sont aujourd’hui devenus une obligation. Pour répondre à vos attentes et développer des communautés actives et impliquées, nous nous engageons toujours sur des résultats garantis avec comme ambition de toujours les dépasser !"
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
				<ServiceBanner title={'Multimédia'} description={'Spot publicitaire (TV et Radio), publi-reportage'} />
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

export default withRouter(FifthServicePage);
