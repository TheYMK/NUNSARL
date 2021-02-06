import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ServicesInfoLeft from '../../components/services/ServiceInfoLeft';
import ServiceInfoRight from '../../components/services/ServiceInfoRight';
import Footer from '../../components/footer/Footer';
import ServiceBanner from '../../components/services/ServiceBanner';

function FourthServicePage() {
	return (
		<React.Fragment>
			<Layout>
				{/* Banner */}
				<ServiceBanner
					title={'Développement Web & Mobile'}
					description={'Site internet, application web & mobile.'}
				/>
				<div className="container mt-5 p-5">
					<p className="text-center" style={{ color: '#777' }}>
						Un site internet est souvent le coeur du dispositif digital d’une marque ou d’une entreprise. Il
						représente dans de nombreux cas le point de contact clé entre l’entreprise et ses
						prospects/clients/candidats. Le dispositif digital converge régulièrement vers lui afin de
						présenter l’entité et de générer des prises de contact, des ventes, des candidatures, etc.{' '}
						<strong style={{ color: '#eb444d' }}>NUN SARL</strong> a déjà accompagné de nombreuses
						entreprises dans la création de site web de marque et corporate.
					</p>
				</div>

				<ServicesInfoLeft
					title={'L’atout qui va vous faire réussir'}
					description={`Générer des demandes entrantes, susciter des candidatures, valoriser votre marque, gagner en légitimité, rendre fiers vos collaborateurs, …. votre site internet a tous ces pouvoirs si sa réalisation est prise en charge par une agence possédant les différentes expertises concernées.`}
					imgSrc={'/static/images/services/4/1.jpg'}
				/>
				<ServiceInfoRight
					title={'Un design très valorisant'}
					description={`NUN SARL conçoit des interfaces graphiques en phase avec les dernières tendances du moment. Après une phase d’UX en mode co-création et l’analyse des « persona », le studio créatif désigne le site en faisant la synthèse entre votre brief, votre charte graphique et les tendances digitales esthétiques qui valoriseront au mieux votre entreprise ou votre marque. `}
					imgSrc={'/static/images/services/4/2.jpg'}
				/>

				<div className="row">
					<div className="col-lg-12">
						<div className="hr" />
					</div>
				</div>

				<ServicesInfoLeft
					title={'Des contenus de grande qualité. Sans y passer trop de temps.'}
					description={`NUN SARL peut vous aider dans la création des contenus du site. Qu’il s’agisse de la rédaction des textes, des photographies, de vidéos ou de motion design, Adveris dispose d’un réseau de partenaires pouvant répondre à tous les besoins, dans tous les secteurs d’activité.`}
					imgSrc={'/static/images/services/4/3.jpg'}
				/>
			</Layout>
		</React.Fragment>
	);
}

export default FourthServicePage;
