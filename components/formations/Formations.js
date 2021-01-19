import React from 'react';
import { useState } from 'react';
import FormationItem from './FormationItem';

function Formations() {
	const businessFirstColumn = [
		'Compétences professionnelles',
		'Leadership et management',
		'Transformation numérique',
		'Communication',
		'Compétences en marketing',
		'Présentations'
	];

	const businessSecondColumn = [
		'SEO',
		'Statistiques web',
		'Outils bureautiques',
		'Développement de carrière',
		'Outils de productivité',
		'Analyse de données'
	];

	const creativityFirstColumn = [
		'3D & Animation',
		'Rendu visuel',
		'Architecture',
		'Design industriel',
		'Illustration',
		'Contenus web interactifs'
	];

	const creativitySecondColumn = [
		'Design web',
		'Expérience utilisateur',
		"Retouche d'images & Photographie",
		'Vidéo & Audio',
		'CMS'
	];

	return (
		<React.Fragment>
			<section className="mini" id="formations">
				<div className="mini-content">
					<div className="container">
						<div className="row">
							<div className="offset-lg-3 col-lg-6">
								<div className="info">
									<h1>Nos formations spécialisées</h1>
									<p>
										Ce sont vos spécificités qui nous permettent de mettre en place des programmes
										entièrement sur-mesure pour vos formations intra-entreprise. Nos formations
										inter-entreprise permettent également à vos salariés de se former en-dehors de
										l’entreprise et de rencontrer des salariés d’autres horizons. Nous nous occupons
										de toute la logistique et de l’organisation.
									</p>
								</div>
							</div>
						</div>
						{/* Mini Boxes Start */}
						<div className="row">
							<FormationItem
								title={'Business'}
								firstColumn={businessFirstColumn}
								secondColumn={businessSecondColumn}
								icon={'fas fa-briefcase'}
							/>
							<FormationItem
								title={'Créativité'}
								firstColumn={creativityFirstColumn}
								secondColumn={creativitySecondColumn}
								icon={'fas fa-lightbulb'}
							/>
						</div>
						{/* Mini Boxes End */}
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

//
//
//
//
//
// CAO
// Modélisation 3D
// Architecture
// Design industriel
// Modélisation industrielle
// Rendu visuel
// Tout afficherAfficher tous les CAO
// Design & Illustration
// Illustration
// Mise en page
// Peinture numérique
// Typographie
// Design & Illustration
// Design web
// CMS
// Standards du web
// Graphisme web
// Expérience utilisateur
// Contenus web interactifs
// Design web
// Retouche d'images & Photographie
// Correction d'images
// Retouche de photos
// Photomontage
// Exportation d'images
// Organisation des images
//  Retouche d'images & Photographie
// Vidéo & Audio
// Montage vidéo
// Motion graphics
// Mixage audio
// Compositing
// Effets spéciaux

export default Formations;
