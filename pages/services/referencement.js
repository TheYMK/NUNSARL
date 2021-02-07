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

function SixthServicePage({ router }) {
	const head = () => (
		<Head>
			<title>NUN SARL | Référencement</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Ne laissez plus votre SITE WEB dans l'ombre confiez-nous le. Chez NUN SARL nous gérons le référencement de votre site internet."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Analyse métier pour mieux cerner vos besoins | NUN SARL`} />
			<meta
				property="og:description"
				content="Ne laissez plus votre SITE WEB dans l'ombre confiez-nous le. Chez NUN SARL nous gérons le référencement de votre site internet."
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
					title={'Référencement'}
					description={'Référencement naturel, Analyse de trafic, Analyse de l’ergonomie, etc...'}
				/>
				<div className="container mt-5 p-5">
					<p className="text-center" style={{ color: '#777' }}>
						Ne laissez plus votre SITE WEB dans l'ombre confiez-nous le. Chez NUN SARL nous gérons le
						référencement de votre site internet.
					</p>
				</div>

				<ServicesInfoLeft
					title={'Analyse métier pour mieux cerner vos besoins'}
					description={`Le rôle principal de NUN SARL, au-delà de vous hisser dans les premières positions des résultats des moteurs, c’est de bien vous connaître.

                Pour mieux comprendre vos besoins, nous analysons l’identité de votre entreprise et de votre distinction propre, comme une « psychanalyse » de votre activité ! C’est ainsi que la connaissance de votre métier et de votre personnalité « professionnelle » sera une véritable force pour avancer, avec vous, dans une stratégie globale.

                Nous aurons pour seul but de vous accompagner en ayant une vision alternative de votre entité pour une meilleure complémentarité. Seul vous connaissez votre entreprise, son organisation, vos collaborateurs, vos clients, et tous les rouages qui composent l’activité de votre entreprise.`}
					imgSrc={'/static/images/services/6/1.jpg'}
				/>

				<section className="section padding-bottom-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
								<div className="left-heading">
									<h2 className="section-title">
										Qu’analyse-t-on lors d’un audit de référencement ?
									</h2>
								</div>
								<div className="left-text">
									<p>
										Notre expertise en référencement organique nous a amenés à remarquer que près de
										90% des sites Internet ont une absence d’optimisation SEO. Souvent avec des
										balises meta description ou Title absentes ou mal optimisées. Ces défauts sont
										d’entrée rédhibitoires pour indexer correctement votre site internet par
										l’algorithme Google. C’est pourquoi, pour élaborer une stratégie web et évaluer
										l’ampleur des actions à mener pour l’amélioration du positionnement de votre
										Site Internet dans les résultats des moteurs de recherche, il convient
										d’effectuer un audit de référencement afin d’élaborer le projet sur des bases
										saines.
									</p>
									<p>
										Ce que nous analysons pour vous: <br /> <br />
										• <strong>Analyse de l’architecture du site Internet</strong>
										<br />
										• <strong>Analyse des codes sources</strong>
										<br />
										• <strong>Analyse de l’ergonomie</strong>
										<br />
										• <strong>Analyse des balises</strong>
										<br />
										• <strong>Analyse de la vitesse d’affichage</strong>
										<br />
										• <strong>Analyse de mots ou d’expressions-clés</strong>
										<br />
										• <strong>Analyse de positionnement ou visibilité</strong>
										<br />
									</p>
								</div>
							</div>
							<div className="col-lg-1" />
							<div
								className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
								data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
							>
								<img
									src={'/static/images/services/6/2.jpeg'}
									className="rounded img-fluid d-block mx-auto"
									alt="App"
								/>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
}

export default withRouter(SixthServicePage);
