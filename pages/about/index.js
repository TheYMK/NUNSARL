import React from 'react';
import InfoA from '../../components/info/InfoA';
import InfoB from '../../components/info/InfoB';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';

const AboutUsPage = ({ router }) => {
	const head = () => (
		<Head>
			<title>NUN SARL | Portfolio</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Nous sommes une agence de conseil en communication pluri-média basé aux Comores. Nous somme l’agence qui vous offre la meilleure approche de communication façonnée à votre image. Nous sommes votre prestataire de services de qualité. Nous vous accompagnons dans le développement de votre notoriété avec un regard moderne, professionnel et objectif. Nous vous proposons des stratégies globales de communication tangibles qui répondent efficacement aux objectifs qualitatifs et quantitatifs en adéquation avec la taille et le budget de votre entreprise. Nous offrons de l’innovation, de la créativité, de l’expertise technologique aux entreprises. Notre force c’est savoir communiquer et notre spécialité c’est le Marketing Digital."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Qui sommes-nous? | NUN SARL`} />
			<meta
				property="og:description"
				content="Nous sommes une agence de conseil en communication pluri-média basé aux Comores. Nous somme l’agence qui vous offre la meilleure approche de communication façonnée à votre image. Nous sommes votre prestataire de services de qualité. Nous vous accompagnons dans le développement de votre notoriété avec un regard moderne, professionnel et objectif. Nous vous proposons des stratégies globales de communication tangibles qui répondent efficacement aux objectifs qualitatifs et quantitatifs en adéquation avec la taille et le budget de votre entreprise. Nous offrons de l’innovation, de la créativité, de l’expertise technologique aux entreprises. Notre force c’est savoir communiquer et notre spécialité c’est le Marketing Digital."
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
				<div className="single-service">
					<div className="header-text">
						<div className="container">
							<div className="row">
								<div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
									<h1>À Propos de nous</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-5 p-5">
					<InfoA />
					<InfoB />
				</div>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(AboutUsPage);
