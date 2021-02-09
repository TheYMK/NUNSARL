import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/header/Banner';

const MentionsLegalesPage = () => {
	return (
		<div>
			<Layout>
				<Banner title={'Mentions Legales'} />
				<div className="container-fluid">
					<div className="mt-5 p-5">
						<h1>MENTIONS LEGALES :</h1>

						<p>
							<strong> </strong>
							<br />
							Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004
							pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance
							des utilisateurs et visiteurs du site :{' '}
							<a href="http://www.nun-agency.com" target="_blank">
								www.nun-agency.com
							</a>{' '}
							les informations suivantes :
						</p>
						<br />
						<p>
							<strong>ÉDITEUR</strong>
						</p>

						<p>
							Le site{' '}
							<a href="http://www.nun-agency.com" target="_blank">
								www.nun-agency.com
							</a> est la propriété exclusive de
							<strong> NUN AGENCY</strong>, qui l'édite.
						</p>
						<br />
						<p>
							<strong>NUN AGENCY</strong>
							<strong> </strong>
							<br />
							Tél  : <strong>+269 334 6427</strong>
						</p>

						<p>
							<strong>Moroni, Malouzini </strong>
							<strong>99397 Moroni</strong>
							<br />
						</p>

						<p>
							Adresse de courrier électronique : <strong>contactshopnun@gmail.com</strong> <br />
							 <br />
							Directeur de la  publication : <strong>Kaym Kassai</strong>
							<br />
							Contactez le responsable de la publication : <strong>kaymkassai269@gmail.com</strong>
						</p>

						<p> </p>

						<p>
							<strong>HÉBERGEMENT</strong>
						</p>

						<p>
							Le site est hébergé par <strong>
								AMAZON WEB SERVICES EMEA SOCIÉTÉ À RESPONSABILITÉ LIMITÉE 38 AVENUE JOHN F. KENNEDY,
								L-1855 LUXEMBOURG B186284 LUXEMBOURG
							</strong>
							<br />
							<br />
							<u>
								<strong>CREDITS :</strong>
							</u>{' '}
							les mentions légales ont étés générées par{' '}
							<strong>
								<a href="https://www.generer-mentions-legales.com">mentions légales</a>
							</strong>
							<br />
							Horaires de la <strong>
								<a href="http://www.patinoire.biz/p+patinoire-de-lyon---charlemagne+113.html">
									Patinoire Lyon
								</a>
							</strong>
						</p>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default MentionsLegalesPage;
