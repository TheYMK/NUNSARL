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

function SecondServicePage({ router }) {
	const head = () => (
		<Head>
			<title>NUN SARL | Identité visuelle et graphique</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Chez NUN SARL nous croyons beaucoup à la force des marques. Dans un monde consumeriste hyper-concurrentiel nous cherchons avant tout des points de repères. Nous voulons nous retrouver dans des marques qui nous sont proches, qui portent non seulement nos valeurs mais surtout notre identité"
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Saisir les valeurs de la marque pour les sublimer | NUN SARL`} />
			<meta
				property="og:description"
				content="Chez NUN SARL nous croyons beaucoup à la force des marques. Dans un monde consumeriste hyper-concurrentiel nous cherchons avant tout des points de repères. Nous voulons nous retrouver dans des marques qui nous sont proches, qui portent non seulement nos valeurs mais surtout notre identité"
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
					title={'Identité visuelle et graphique'}
					description={'Charte graphique, packaging, tous supports imprimés (brochure, dépliant, PLV, etc.)'}
				/>
				<div className="container mt-5 p-5">
					<p className="text-center" style={{ color: '#777' }}>
						Chez <strong style={{ color: '#eb444d' }}>NUN SARL</strong> nous croyons beaucoup à la force des
						marques. Dans un monde consumeriste hyper-concurrentiel nous cherchons avant tout des points de
						repères. Nous voulons nous retrouver dans des marques qui nous sont proches, qui portent non
						seulement nos valeurs mais surtout notre identité
					</p>
				</div>

				<ServicesInfoLeft
					title={'Saisir les valeurs de la marque pour les sublimer'}
					description={`La compréhension des enjeux de la marque est essentielle. L’uniformisation des styles donne aujourd’hui des identités très proches qu’il s’agisse de marques de luxe par exemple ou de start-up. Mais il ne suffit pas d’imiter les autres pour exister. Une identité forte aujourd’hui permet d’optimiser la mémorisation du consommateur et de véhiculer son ADN. Le logo est un marqueur tellement fort que dépassé il plombe tous les efforts de communication. Mais capitaliser sur l’histoire pour mieux aller de l’avant est un exercice passionnant et transformant pour les entreprises.`}
					imgSrc={'/static/images/services/2/1.jpg'}
				/>
				<ServiceInfoRight
					title={'La méthodologie ne s’improvise pas'}
					description={`Une expérience sur les enjeux des marques positionne NUN SARL comme un spécialiste de la création d’identités visuelles marquantes et disruptives. Sans faire de concurrence aux leaders que sont les pure players du branding, NUN SARL adopte une approche pragmatique de la recherche d’identités de marques qui sont ensuite déclinées dans l’univers digital.`}
					imgSrc={'/static/images/services/2/2.jpg'}
				/>

				<div className="row">
					<div className="col-lg-12">
						<div className="hr" />
					</div>
				</div>

				<ServicesInfoLeft
					title={'Dépasser le logo pour construire un Brand book de référence'}
					description={`Le logo n’est pas une fin en soi. Il doit s’insérer dans un univers graphique qui dépasse aujourd’hui le simple univers de la charte graphique pour devenir un Brand book. L’atomic design fixe ainsi les éléments de base de la communication visuelle en travaillant en même temps le manifeste de la marque comme point de départ de tout le storytelling.`}
					imgSrc={'/static/images/services/2/3.jpg'}
				/>
			</Layout>
		</React.Fragment>
	);
}

export default withRouter(SecondServicePage);
