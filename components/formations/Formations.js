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
		'Outils bureautiques',
		'Développement de carrière',
		'Outils de productivité',
		'Analyse de données'
	];

	const creativityFirstColumn = [
		'3D & Animation',
		'Statistiques web',
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
									<h1 style={{ fontWeight: '700' }}>Nos formations spécialisées</h1>
									<p>
										Nous offrons des ateliers de formation en entreprise, à distance en ligne ou en
										organisant des évènements. Nos formations sont régies principalement par des
										modules de Business, de Leadership et management, de la Transformation
										numérique, IT - Digital, Communication et Marketing. Notre processus
										d'apprentissage comprend un animateur formateur principal, des vidéos animées,
										des exercices de renforcement par glisser-déposé, des fiches techniques ainsi
										que différents types de multimédia - qui sont tous accessibles n'importe où
										depuis votre mobile, ordinateur portable ou ordinateur de bureau. Efficace,
										interactif et amusant!
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
								title={'Technologie & Créativité'}
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
