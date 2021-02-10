import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/header/Banner';
import Head from 'next/head';

const ConfidentialityPage = () => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<title>NUN SARL | Politique de confidentialité</title>
		</Head>
	);
	return (
		<div>
			{head()}
			<Layout>
				<Banner title={'Politique de confidentialité'} />
				<div className="container-fluid">
					<div className="mt-5 p-5">
						<p className="" style={{ color: '#777' }}>
							<strong>L’Éditeur:</strong> La personne, physique ou morale, qui édite les services de
							communication au public en ligne.
						</p>
						<br />
						<p className="" style={{ color: '#777' }}>
							<strong>Le Site:</strong> L’ensemble des sites, pages Internet et services en ligne proposés
							par l’Éditeur.
						</p>
						<br />
						<p className="" style={{ color: '#777' }}>
							<strong>L’Utilisateur:</strong> La personne utilisant le Site et L’Éditeur : La personne,
							physique ou morale, qui édite les services de communication au public en ligne. Le Site :
							L’ensemble des sites, pages Internet et services en ligne proposés par l’Éditeur.
							L’Utilisateur : La personne utilisant le Site et les services. Nature des données collectées
							dans le cadre de l’utilisation des Sites, l’Éditeur est susceptible de collecter les
							catégories de données suivantes concernant ses Utilisateurs : Données d’état-civil,
							d’identité, d’identification… Données de connexion (adresses IP, journaux d’événements…)
							Communication des données personnelles à des tiers
						</p>
						<br />
						<h1>Nature des données collectées</h1>
						<br />
						<h2>
							Dans le cadre de l’utilisation des Sites, l’Éditeur est susceptible de collecter les
							catégories de données suivantes concernant ses Utilisateurs :
						</h2>
						<br />
						<p>Données d’état-civil, d’identité, d’identification…</p>
						<p>Données de connexion (adresses IP, journaux d’événements…)</p>
						<br />
						<h2>Communication des données personnelles à des tiers Pas de communication à des tiers</h2>
						<br />
						<p>
							Vos données ne font l’objet d’aucune communication à des tiers. Vous êtes toutefois informés
							qu’elles pourront être divulguées en application d’une loi, d’un règlement ou en vertu d’une
							décision d’une autorité réglementaire ou judiciaire compétente.
						</p>
						<br />
						<h2>
							Information préalable pour la communication des données personnelles à des tiers en cas de
							fusion / absorption
						</h2>
						<br />
						<h2>Information préalable et possibilité d’opt-out avant et après la fusion / acquisition</h2>
						<br />
						<p>
							Dans le cas où nous prendrions part à une opération de fusion, d’acquisition ou à toute
							autre forme de cession d’actifs, nous nous engageons à garantir la confidentialité de vos
							données personnelles et à vous informer avant que celles-ci ne soient transférées ou
							soumises à de nouvelles règles de confidentialité.
						</p>
						<br />
						<h3>
							Finalit&eacute; de la r&eacute;utilisation des donn&eacute;es personnelles collect&eacute;es
						</h3>
						<br />
						<h3>Effectuer les op&eacute;rations relatives &agrave; la gestion des clients concernant</h3>
						<br />
						<ul>
							<li>
								les contrats ; les commandes ; les livraisons ; les factures ; la comptabilit&eacute; et
								en particulier la gestion des comptes clients
							</li>
							<li>
								un programme de fid&eacute;lit&eacute; au sein d&rsquo;une entit&eacute; ou plusieurs
								entit&eacute;s juridiques ;
							</li>
							<li>
								le suivi de la relation client tel que la r&eacute;alisation d&rsquo;enqu&ecirc;tes de
								satisfaction, la gestion des r&eacute;clamations et du service apr&egrave;s-vente
							</li>
							<li>
								la s&eacute;lection de clients pour r&eacute;aliser des &eacute;tudes, sondages et tests
								produits (sauf consentement des personnes concern&eacute;es recueilli dans les
								conditions pr&eacute;vues &agrave; l&rsquo;article 6, ces op&eacute;rations ne doivent
								pas conduire &agrave; l&rsquo;&eacute;tablissement de profils susceptibles de faire
								appara&icirc;tre des donn&eacute;es sensibles &ndash; origines raciales ou ethniques,
								opinions philosophiques, politiques, syndicales, religieuses, vie sexuelle ou
								sant&eacute; des personnes)
							</li>
						</ul>
						<br />
						<h3>Effectuer des op&eacute;rations relatives &agrave; la prospection</h3>
						<br />
						<ul>
							<li>
								la gestion d&rsquo;op&eacute;rations techniques de prospection (ce qui inclut notamment
								les op&eacute;rations techniques comme la normalisation, l&rsquo;enrichissement et la
								d&eacute;duplication)
							</li>
							<li>
								la s&eacute;lection de personnes pour r&eacute;aliser des actions de
								fid&eacute;lisation, de prospection, de sondage, de test produit et de promotion. Sauf
								consentement des personnes concern&eacute;es recueilli dans les conditions
								pr&eacute;vues &agrave; l&rsquo;article 6, ces op&eacute;rations ne doivent pas conduire
								&agrave; l&rsquo;&eacute;tablissement de profils susceptibles de faire appara&icirc;tre
								des donn&eacute;es sensibles (origines raciales ou ethniques, opinions philosophiques,
								politiques, syndicales, religieuses, vie sexuelle ou sant&eacute; des personnes)
							</li>
							<li>la r&eacute;alisation d&rsquo;op&eacute;rations de sollicitations</li>
						</ul>
						<br />
						<p>
							La gestion des impay&eacute;s et du contentieux, &agrave; condition qu&rsquo;elle ne porte
							pas sur des infractions et / ou qu&rsquo;elle n&rsquo;entra&icirc;ne pas une exclusion de la
							personne du b&eacute;n&eacute;fice d&rsquo;un droit, d&rsquo;une prestation ou d&rsquo;un
							contrat
						</p>
						<br />
						<p>
							<strong>La gestion des avis des personnes sur des produits, services ou contenus</strong>
						</p>
						<br />
						<p>
							<strong>Agr&eacute;gation des donn&eacute;es</strong>
						</p>
						<br />
						<p>
							<strong>Agr&eacute;gation avec des donn&eacute;es non personnelles</strong>
						</p>
						<br />
						<p>
							Nous pouvons publier, divulguer et utiliser les informations agr&eacute;g&eacute;es
							(informations relatives &agrave; tous nos Utilisateurs ou &agrave; des groupes ou
							cat&eacute;gories sp&eacute;cifiques d&rsquo;Utilisateurs que nous combinons de
							mani&egrave;re &agrave; ce qu&rsquo;un Utilisateur individuel ne puisse plus &ecirc;tre
							identifi&eacute; ou mentionn&eacute;) et les informations non personnelles &agrave; des fins
							d&rsquo;analyse du secteur et du march&eacute;, de profilage d&eacute;mographique, &agrave;
							des fins promotionnelles et publicitaires et &agrave; d&rsquo;autres fins commerciales.
						</p>
						<br />
						<h3>
							Agr&eacute;gation avec des donn&eacute;es personnelles disponibles sur les comptes sociaux
							de l&rsquo;Utilisateur
						</h3>
						<br />
						<p>
							Si vous connectez votre compte &agrave; un compte d&rsquo;un autre service afin de faire des
							envois crois&eacute;s, ledit service pourra nous communiquer vos informations de profil, de
							connexion, ainsi que toute autre information dont vous avez autoris&eacute; la divulgation.
							Nous pouvons agr&eacute;ger les informations relatives &agrave; tous nos autres
						</p>
						<br />
						<p>
							Utilisateurs, groupes, comptes, aux donn&eacute;es personnelles disponibles sur
							l&rsquo;Utilisateur.
						</p>
						<br />
						<h3>Collecte des donn&eacute;es d&rsquo;identit&eacute;</h3>
						<br />
						<h3>Consultation libre</h3>
						<br />
						<p>
							La consultation du Site ne n&eacute;cessite pas d&rsquo;inscription ni
							d&rsquo;identification pr&eacute;alable. Elle peut s&rsquo;effectuer sans que vous ne
							communiquiez de donn&eacute;es nominatives vous concernant (nom, pr&eacute;nom, adresse,
							etc). Nous ne proc&eacute;dons &agrave; aucun enregistrement de donn&eacute;es nominatives
							pour la simple consultation du Site.
						</p>
						<br />
						<h3>Collecte des donn&eacute;es d&rsquo;identification</h3>
						<br />
						<p>
							<strong>
								Utilisation de l&rsquo;identifiant de l&rsquo;utilisateur pour proposition de mise en
								relation et offres commerciales&nbsp;
							</strong>Nous utilisons vos identifiants &eacute;lectroniques pour rechercher des relations
							pr&eacute;sentes par connexion, par adresse mail ou par services. Nous pouvons utiliser vos
							informations de contact pour permettre &agrave; d&rsquo;autres personnes de trouver votre
							compte, notamment via des services tiers et des applications clientes. Vous pouvez
							t&eacute;l&eacute;charger votre carnet d&rsquo;adresses afin que nous soyons en mesure de
							vous aider &agrave; trouver des connaissances sur notre r&eacute;seau ou pour permettre
							&agrave; d&rsquo;autres Utilisateurs de notre r&eacute;seau de vous trouver. Nous pouvons
							vous proposer des suggestions, &agrave; vous et &agrave; d&rsquo;autres Utilisateurs du
							r&eacute;seau, &agrave; partir des contacts import&eacute;s de votre carnet
							d&rsquo;adresses. Nous sommes susceptibles de travailler en partenariat avec des
							soci&eacute;t&eacute;s qui proposent des offres incitatives. Pour prendre en charge ce type
							de promotion et d&rsquo;offre incitative, nous sommes susceptibles de partager votre
							identifiant &eacute;lectronique.
						</p>
						<br />
						<h3>Collecte des donn&eacute;es du terminal</h3>
						<br />
						<p>
							<strong>
								Collecte des donn&eacute;es de profilage et des donn&eacute;es techniques &agrave; des
								fins de fourniture du service&nbsp;
							</strong>Certaines des donn&eacute;es techniques de votre appareil sont collect&eacute;es
							automatiquement par le Site. Ces informations incluent notamment votre adresse IP,
							fournisseur d&rsquo;acc&egrave;s &agrave; Internet, configuration mat&eacute;rielle,
							configuration logicielle, type et langue du navigateur&hellip; La collecte de ces
							donn&eacute;es est n&eacute;cessaire &agrave; la fourniture des services.
						</p>
						<br />
						<h3>
							Collecte des donn&eacute;es techniques &agrave; des fins publicitaires, commerciales et
							statistiques
						</h3>
						<br />
						<p>
							Les donn&eacute;es techniques de votre appareil sont automatiquement collect&eacute;es et
							enregistr&eacute;es par le Site, &agrave; des fins publicitaires, commerciales et
							statistiques. Ces informations nous aident &agrave; personnaliser et &agrave;
							am&eacute;liorer continuellement votre exp&eacute;rience sur notre Site. Nous ne collectons
							ni ne conservons aucune donn&eacute;e nominative (nom, pr&eacute;nom, adresse&hellip;)
							&eacute;ventuellement attach&eacute;e &agrave; une donn&eacute;e technique. Les
							donn&eacute;es collect&eacute;es sont susceptibles d&rsquo;&ecirc;tre revendues &agrave; des
							tiers.
						</p>
						<br />
						<h3>Conservation des donn&eacute;es techniques</h3>
						<br />
						<h4>Dur&eacute;e de conservation des donn&eacute;es techniques</h4>
						<br />
						<p>
							Les donn&eacute;es techniques sont conserv&eacute;es pour la dur&eacute;e strictement
							n&eacute;cessaire &agrave; la r&eacute;alisation des finalit&eacute;s vis&eacute;es
							ci-avant.
						</p>
						<br />
						<h3>D&eacute;lai de conservation des donn&eacute;es personnelles et d&rsquo;anonymisation</h3>
						<br />
						<h4>Conservation des donn&eacute;es pendant la dur&eacute;e de la relation contractuelle</h4>
						<br />
						<p>
							Conform&eacute;ment &agrave; l&rsquo;article 6-5&deg; de la loi n&deg;78-17 du 6 janvier
							1978 relative &agrave; l&rsquo;informatique, aux fichiers et aux libert&eacute;s, les
							donn&eacute;es &agrave; caract&egrave;re personnel faisant l&rsquo;objet d&rsquo;un
							traitement ne sont pas conserv&eacute;es au-del&agrave; du temps n&eacute;cessaire &agrave;
							l&rsquo;ex&eacute;cution des obligations d&eacute;finies lors de la conclusion du contrat ou
							de la dur&eacute;e pr&eacute;d&eacute;finie de la relation contractuelle.
						</p>
						<br />
						<h4>
							Conservation des donn&eacute;es anonymis&eacute;es au del&agrave; de la relation
							contractuelle / apr&egrave;s la suppression du compte
						</h4>
						<br />
						<p>
							Nous conservons les donn&eacute;es personnelles pour la dur&eacute;e strictement
							n&eacute;cessaire &agrave; la r&eacute;alisation des finalit&eacute;s d&eacute;crites dans
							les pr&eacute;sentes CGU. Au-del&agrave; de cette dur&eacute;e, elles seront
							anonymis&eacute;es et conserv&eacute;es &agrave; des fins exclusivement statistiques et ne
							donneront lieu &agrave; aucune exploitation, de quelque nature que ce soit.
						</p>
						<br />
						<h3>Suppression des donn&eacute;es apr&egrave;s suppression du compte</h3>
						<br />
						<p>
							Des moyens de purge de donn&eacute;es sont mis en place afin d&rsquo;en pr&eacute;voir la
							suppression effective d&egrave;s lors que la dur&eacute;e de conservation ou
							d&rsquo;archivage n&eacute;cessaire &agrave; l&rsquo;accomplissement des finalit&eacute;s
							d&eacute;termin&eacute;es ou impos&eacute;es est atteinte. Conform&eacute;ment &agrave; la
							loi n&deg;78-17 du 6 janvier 1978 relative &agrave; l&rsquo;informatique, aux fichiers et
							aux libert&eacute;s, vous disposez par ailleurs d&rsquo;un droit de suppression sur vos
							donn&eacute;es que vous pouvez exercer &agrave; tout moment en prenant contact avec
							l&rsquo;&Eacute;diteur.
						</p>
						<br />
						<h4>Suppression des donn&eacute;es apr&egrave;s 3 ans d&rsquo;inactivit&eacute;</h4>
						<br />
						<p>
							Pour des raisons de s&eacute;curit&eacute;, si vous ne vous &ecirc;tes pas
							authentifi&eacute; sur le Site pendant une p&eacute;riode de trois ans, vous recevrez un
							e-mail vous invitant &agrave; vous connecter dans les plus brefs d&eacute;lais, sans quoi
							vos donn&eacute;es seront supprim&eacute;es de nos bases de donn&eacute;es.
						</p>
						<br />
						<h4>Suppression du compte</h4>
						<br />
						<h3>Suppression du compte &agrave; la demande</h3>
						<br />
						<p>
							L&rsquo;Utilisateur a la possibilit&eacute; de supprimer son Compte &agrave; tout moment,
							par simple demande &agrave; l&rsquo;&Eacute;diteur OU par le menu de suppression de Compte
							pr&eacute;sent dans les param&egrave;tres du Compte le cas &eacute;ch&eacute;ant.
						</p>
						<br />
						<h3>Suppression du compte en cas de violation des CGU</h3>
						<br />
						<p>
							En cas de violation d&rsquo;une ou de plusieurs dispositions des CGU ou de tout autre
							document incorpor&eacute; aux pr&eacute;sentes par r&eacute;f&eacute;rence,
							l&rsquo;&Eacute;diteur se r&eacute;serve le droit de mettre fin ou restreindre sans aucun
							avertissement pr&eacute;alable et &agrave; sa seule discr&eacute;tion, votre usage et
							acc&egrave;s aux services, &agrave; votre compte et &agrave; tous les Sites.
						</p>
						<br />
						<h3>
							Indications en cas de faille de s&eacute;curit&eacute; d&eacute;cel&eacute;e par
							l&rsquo;&Eacute;diteur
						</h3>
						<br />
						<h4>Information de l&rsquo;Utilisateur en cas de faille de s&eacute;curit&eacute;</h4>
						<br />
						<p>
							Nous nous engageons &agrave; mettre en oeuvre toutes les mesures techniques et
							organisationnelles appropri&eacute;es afin de garantir un niveau de s&eacute;curit&eacute;
							adapt&eacute; au regard des risques d&rsquo;acc&egrave;s accidentels, non autoris&eacute;s
							ou ill&eacute;gaux, de divulgation, d&rsquo;alt&eacute;ration, de perte ou encore de
							destruction des donn&eacute;es personnelles vous concernant.
						</p>
						<br />
						<p>
							Dans l&rsquo;&eacute;ventualit&eacute; o&ugrave; nous prendrions connaissance d&rsquo;un
							acc&egrave;s ill&eacute;gal aux donn&eacute;es personnelles vous concernant stock&eacute;es
							sur nos serveurs ou ceux de nos prestataires, ou d&rsquo;un acc&egrave;s non autoris&eacute;
							ayant pour cons&eacute;quence la r&eacute;alisation des risques identifi&eacute;s ci-dessus,
							nous nous engageons &agrave; :
						</p>
						<br />
						<ul>
							<li>Vous notifier l&rsquo;incident dans les plus brefs d&eacute;lais ;</li>
							<li>Examiner les causes de l&rsquo;incident et vous en informer ;</li>
							<li>
								Prendre les mesures n&eacute;cessaires dans la limite du raisonnable afin
								d&rsquo;amoindrir les effets n&eacute;gatifs et pr&eacute;judices pouvant
								r&eacute;sulter dudit incident
							</li>
						</ul>
						<br />
						<h3>Limitation de la responsabilit&eacute;</h3>
						<br />
						<p>
							En aucun cas les engagements d&eacute;finis au point ci-dessus relatifs &agrave; la
							notification en cas de faille de s&eacute;curit&eacute; ne peuvent &ecirc;tre
							assimil&eacute;s &agrave; une quelconque reconnaissance de faute ou de responsabilit&eacute;
							quant &agrave; la survenance de l&rsquo;incident en question.
						</p>
						<br />
						<h3>Transfert des donn&eacute;es personnelles &agrave; l&rsquo;&eacute;tranger</h3>
						<br />
						<h4>Pas de transfert en dehors de l&rsquo;Union europ&eacute;enne</h4>
						<br />
						<p>
							L&rsquo;&Eacute;diteur s&rsquo;engage &agrave; ne pas transf&eacute;rer les donn&eacute;es
							personnelles de ses Utilisateurs en dehors de l&rsquo;Union europ&eacute;enne.
						</p>
						<br />
						<h3>Modification des CGU et de la politique de confidentialit&eacute;</h3>
						<br />
						<p>
							En cas de modification des pr&eacute;sentes CGU, engagement de ne pas baisser le niveau de
							confidentialit&eacute; de mani&egrave;re substantielle sans l&rsquo;information
							pr&eacute;alable des personnes concern&eacute;es
						</p>
						<br />
						<p>
							Nous nous engageons &agrave; vous informer en cas de modification substantielle des
							pr&eacute;sentes CGU, et &agrave; ne pas baisser le niveau de confidentialit&eacute; de vos
							donn&eacute;es de mani&egrave;re substantielle sans vous en informer et obtenir votre
							consentement.
						</p>
						<br />
						<h3>Droit applicable et modalit&eacute;s de recours</h3>
						<br />
						<h4>Clause d&rsquo;arbitrage</h4>
						<br />
						<p>
							Vous acceptez express&eacute;ment que tout litige susceptible de na&icirc;tre du fait des
							pr&eacute;sentes CGU, notamment de son interpr&eacute;tation ou de son ex&eacute;cution,
							rel&egrave;vera d&rsquo;une proc&eacute;dure d&rsquo;arbitrage soumise au r&egrave;glement
							de la
						</p>
						<br />
						<p>
							plateforme d&rsquo;arbitrage choisie d&rsquo;un commun accord, auquel vous adh&eacute;rerez
							sans r&eacute;serve.
						</p>
						<br />
						<h3>Portabilit&eacute; des donn&eacute;es</h3>
						<br />
						<h4>Portabilit&eacute; des donn&eacute;es</h4>
						<br />
						<p>
							L&rsquo;&Eacute;diteur s&rsquo;engage &agrave; vous offrir la possibilit&eacute; de vous
							faire restituer l&rsquo;ensemble des donn&eacute;es vous concern
						</p>
						<br />
						<p>
							<strong>L&rsquo;&Eacute;diteur&nbsp;</strong>: La personne, physique ou morale, qui
							&eacute;dite les services de communication au public en ligne.
						</p>
						<br />
						<p>
							<strong>Le Site&nbsp;</strong>: L&rsquo;ensemble des sites, pages Internet et services en
							ligne propos&eacute;s par l&rsquo;&Eacute;diteur.
						</p>
						<br />
						<p>
							<strong>L&rsquo;Utilisateur&nbsp;</strong>: La personne utilisant le Site et
							L&rsquo;&Eacute;diteur : La personne, physique ou morale, qui &eacute;dite les services de
							communication au public en ligne.<br />Le Site : L&rsquo;ensemble des sites, pages Internet
							et services en ligne propos&eacute;s par l&rsquo;&Eacute;diteur.<br />L&rsquo;Utilisateur :
							La personne utilisant le Site et les services.<br />Nature des donn&eacute;es
							collect&eacute;es<br />Dans le cadre de l&rsquo;utilisation des Sites,
							l&rsquo;&Eacute;diteur est susceptible de collecter les cat&eacute;gories de donn&eacute;es<br />suivantes
							concernant ses Utilisateurs :<br />Donn&eacute;es d&rsquo;&eacute;tat-civil,
							d&rsquo;identit&eacute;, d&rsquo;identification&hellip;<br />Donn&eacute;es de connexion
							(adresses IP, journaux d&rsquo;&eacute;v&eacute;nements&hellip;)<br />Communication des
							donn&eacute;es personnelles &agrave; des tiers
						</p>
						<br />
						<h4>Nature des donn&eacute;es collect&eacute;es</h4>
						<br />
						<h4>
							Dans le cadre de l&rsquo;utilisation des Sites, l&rsquo;&Eacute;diteur est susceptible de
							collecter les cat&eacute;gories de donn&eacute;es suivantes concernant ses Utilisateurs :
						</h4>
						<br />
						<p>
							Donn&eacute;es d&rsquo;&eacute;tat-civil, d&rsquo;identit&eacute;,
							d&rsquo;identification&hellip;
						</p>
						<br />
						<p>
							Donn&eacute;es de connexion (adresses IP, journaux d&rsquo;&eacute;v&eacute;nements&hellip;)
						</p>
						<br />
						<h4>Communication des donn&eacute;es personnelles &agrave; des tiers</h4>
						<br />
						<h3>Pas de communication &agrave; des tiers</h3>
						<br />
						<p>
							Vos donn&eacute;es ne font l&rsquo;objet d&rsquo;aucune communication &agrave; des tiers.
							Vous &ecirc;tes toutefois inform&eacute;s qu&rsquo;elles pourront &ecirc;tre
							divulgu&eacute;es en application d&rsquo;une loi, d&rsquo;un r&egrave;glement ou en vertu
							d&rsquo;une d&eacute;cision d&rsquo;une autorit&eacute; r&eacute;glementaire ou judiciaire
							comp&eacute;tente.
						</p>
						<br />
						<h4>
							Information pr&eacute;alable pour la communication des donn&eacute;es personnelles &agrave;
							des tiers en cas de fusion / absorption
						</h4>
						<br />
						<h4>
							Information pr&eacute;alable et possibilit&eacute; d&rsquo;opt-out avant et apr&egrave;s la
							fusion / acquisition
						</h4>
						<br />
						<p>
							Dans le cas o&ugrave; nous prendrions part &agrave; une op&eacute;ration de fusion,
							d&rsquo;acquisition ou &agrave; toute autre forme de cession
						</p>
						<br />
						<p>
							d&rsquo;actifs, nous nous engageons &agrave; garantir la confidentialit&eacute; de vos
							donn&eacute;es personnelles et &agrave; vous informer avant que celles-ci ne soient
							transf&eacute;r&eacute;es ou soumises &agrave; de nouvelles r&egrave;gles de
							confidentialit&eacute;.
						</p>
						<br />
						<h3>
							Finalit&eacute; de la r&eacute;utilisation des donn&eacute;es personnelles collect&eacute;es
						</h3>
						<br />
						<h4>Effectuer les op&eacute;rations relatives &agrave; la gestion des clients concernant</h4>
						<br />
						<ul>
							<li>
								les contrats ; les commandes ; les livraisons ; les factures ; la comptabilit&eacute; et
								en particulier la gestion des comptes clients
							</li>
							<li>
								un programme de fid&eacute;lit&eacute; au sein d&rsquo;une entit&eacute; ou plusieurs
								entit&eacute;s juridiques ;
							</li>
							<li>
								le suivi de la relation client tel que la r&eacute;alisation d&rsquo;enqu&ecirc;tes de
								satisfaction, la gestion des r&eacute;clamations et du service apr&egrave;s-vente
							</li>
							<li>
								la s&eacute;lection de clients pour r&eacute;aliser des &eacute;tudes, sondages et tests
								produits (sauf consentement des personnes concern&eacute;es recueilli dans les
								conditions pr&eacute;vues &agrave; l&rsquo;article 6, ces op&eacute;rations ne doivent
								pas conduire &agrave; l&rsquo;&eacute;tablissement de profils susceptibles de faire
								appara&icirc;tre des donn&eacute;es sensibles &ndash; origines raciales ou ethniques,
								opinions philosophiques, politiques, syndicales, religieuses, vie sexuelle ou
								sant&eacute; des personnes)
							</li>
						</ul>
						<br />
						<h4>Effectuer des op&eacute;rations relatives &agrave; la prospection</h4>
						<br />
						<ul>
							<li>
								la gestion d&rsquo;op&eacute;rations techniques de prospection (ce qui inclut notamment
								les op&eacute;rations techniques comme la normalisation, l&rsquo;enrichissement et la
								d&eacute;duplication)
							</li>
							<li>
								la s&eacute;lection de personnes pour r&eacute;aliser des actions de
								fid&eacute;lisation, de prospection, de sondage, de test produit et de promotion. Sauf
								consentement des personnes concern&eacute;es recueilli dans les conditions
								pr&eacute;vues &agrave; l&rsquo;article 6, ces op&eacute;rations ne doivent pas conduire
								&agrave; l&rsquo;&eacute;tablissement de profils susceptibles de faire appara&icirc;tre
								des donn&eacute;es sensibles (origines raciales ou ethniques, opinions philosophiques,
								politiques, syndicales, religieuses, vie sexuelle ou sant&eacute; des personnes)
							</li>
							<li>la r&eacute;alisation d&rsquo;op&eacute;rations de sollicitations</li>
						</ul>
						<br />
						<h4>
							La gestion des impay&eacute;s et du contentieux, &agrave; condition qu&rsquo;elle ne porte
							pas sur des infractions et / ou qu&rsquo;elle n&rsquo;entra&icirc;ne pas une exclusion de la
							personne du b&eacute;n&eacute;fice d&rsquo;un droit, d&rsquo;une prestation ou d&rsquo;un
							contrat
						</h4>
						<br />
						<p>
							<strong>La gestion des avis des personnes sur des produits, services ou contenus</strong>
						</p>
						<br />
						<p>
							<strong>Agr&eacute;gation des donn&eacute;es</strong>
						</p>
						<br />
						<p>
							<strong>Agr&eacute;gation avec des donn&eacute;es non personnelles</strong>
						</p>
						<br />
						<p>
							Nous pouvons publier, divulguer et utiliser les informations agr&eacute;g&eacute;es
							(informations relatives &agrave; tous nos Utilisateurs ou &agrave; des groupes ou
							cat&eacute;gories sp&eacute;cifiques d&rsquo;Utilisateurs que nous combinons de
							mani&egrave;re &agrave; ce qu&rsquo;un Utilisateur individuel ne puisse plus &ecirc;tre
							identifi&eacute; ou mentionn&eacute;) et les informations non personnelles &agrave; des fins
							d&rsquo;analyse du secteur et du march&eacute;, de profilage d&eacute;mographique, &agrave;
							des fins promotionnelles et publicitaires et &agrave; d&rsquo;autres fins commerciales.
						</p>
						<br />
						<h4>
							Agr&eacute;gation avec des donn&eacute;es personnelles disponibles sur les comptes sociaux
							de l&rsquo;Utilisateur
						</h4>
						<br />
						<p>
							Si vous connectez votre compte &agrave; un compte d&rsquo;un autre service afin de faire des
							envois crois&eacute;s, ledit service pourra nous communiquer vos informations de profil, de
							connexion, ainsi que toute autre information dont vous avez autoris&eacute; la divulgation.
							Nous pouvons agr&eacute;ger les informations relatives &agrave; tous nos autres
						</p>
						<br />
						<p>
							Utilisateurs, groupes, comptes, aux donn&eacute;es personnelles disponibles sur
							l&rsquo;Utilisateur.
						</p>
						<br />
						<h3>Collecte des donn&eacute;es d&rsquo;identit&eacute;</h3>
						<br />
						<h4>Consultation libre</h4>
						<br />
						<p>
							La consultation du Site ne n&eacute;cessite pas d&rsquo;inscription ni
							d&rsquo;identification pr&eacute;alable. Elle peut s&rsquo;effectuer sans que vous ne
							communiquiez de donn&eacute;es nominatives vous concernant (nom, pr&eacute;nom, adresse,
							etc). Nous ne proc&eacute;dons &agrave; aucun enregistrement de donn&eacute;es nominatives
							pour la simple consultation du Site.
						</p>
						<br />
						<h3>Collecte des donn&eacute;es d&rsquo;identification</h3>
						<br />
						<p>
							<strong>
								Utilisation de l&rsquo;identifiant de l&rsquo;utilisateur pour proposition de mise en
								relation et offres commerciales&nbsp;
							</strong>Nous utilisons vos identifiants &eacute;lectroniques pour rechercher des relations
							pr&eacute;sentes par connexion, par adresse mail ou par services. Nous pouvons utiliser vos
							informations de contact pour permettre &agrave; d&rsquo;autres personnes de trouver votre
							compte, notamment via des services tiers et des applications clientes. Vous pouvez
							t&eacute;l&eacute;charger votre carnet d&rsquo;adresses afin que nous soyons en mesure de
							vous aider &agrave; trouver des connaissances sur notre r&eacute;seau ou pour permettre
							&agrave; d&rsquo;autres Utilisateurs de notre r&eacute;seau de vous trouver. Nous pouvons
							vous proposer des suggestions, &agrave; vous et &agrave; d&rsquo;autres Utilisateurs du
							r&eacute;seau, &agrave; partir des contacts import&eacute;s de votre carnet
							d&rsquo;adresses. Nous sommes susceptibles de travailler en partenariat avec des
							soci&eacute;t&eacute;s qui proposent des offres incitatives. Pour prendre en charge ce type
							de promotion et d&rsquo;offre incitative, nous sommes susceptibles de partager votre
							identifiant &eacute;lectronique.
						</p>
						<br />
						<h3>Collecte des donn&eacute;es du terminal</h3>
						<br />
						<p>
							<strong>
								Collecte des donn&eacute;es de profilage et des donn&eacute;es techniques &agrave; des
								fins de fourniture du service&nbsp;
							</strong>Certaines des donn&eacute;es techniques de votre appareil sont collect&eacute;es
							automatiquement par le Site. Ces informations incluent notamment votre adresse IP,
							fournisseur d&rsquo;acc&egrave;s &agrave; Internet, configuration mat&eacute;rielle,
							configuration logicielle, type et langue du navigateur&hellip; La collecte de ces
							donn&eacute;es est n&eacute;cessaire &agrave; la fourniture des services.
						</p>
						<br />
						<h3>
							Collecte des donn&eacute;es techniques &agrave; des fins publicitaires, commerciales et
							statistiques
						</h3>
						<br />
						<p>
							Les donn&eacute;es techniques de votre appareil sont automatiquement collect&eacute;es et
							enregistr&eacute;es par le Site, &agrave; des fins publicitaires, commerciales et
							statistiques. Ces informations nous aident &agrave; personnaliser et &agrave;
							am&eacute;liorer continuellement votre exp&eacute;rience sur notre Site. Nous ne collectons
							ni ne conservons aucune donn&eacute;e nominative (nom, pr&eacute;nom, adresse&hellip;)
							&eacute;ventuellement attach&eacute;e &agrave; une donn&eacute;e technique. Les
							donn&eacute;es collect&eacute;es sont susceptibles d&rsquo;&ecirc;tre revendues &agrave; des
							tiers.
						</p>
						<br />
						<h3>Conservation des donn&eacute;es techniques</h3>
						<br />
						<h4>Dur&eacute;e de conservation des donn&eacute;es techniques</h4>
						<br />
						<p>
							Les donn&eacute;es techniques sont conserv&eacute;es pour la dur&eacute;e strictement
							n&eacute;cessaire &agrave; la r&eacute;alisation des finalit&eacute;s vis&eacute;es
							ci-avant.
						</p>
						<br />
						<h3>D&eacute;lai de conservation des donn&eacute;es personnelles et d&rsquo;anonymisation</h3>
						<br />
						<h4>Conservation des donn&eacute;es pendant la dur&eacute;e de la relation contractuelle</h4>
						<br />
						<p>
							<br />
							Conform&eacute;ment &agrave; l&rsquo;article 6-5&deg; de la loi n&deg;78-17 du 6 janvier
							1978 relative &agrave; l&rsquo;informatique, aux fichiers et aux libert&eacute;s, les
							donn&eacute;es &agrave; caract&egrave;re personnel faisant l&rsquo;objet d&rsquo;un
							traitement ne sont pas conserv&eacute;es au-del&agrave; du temps n&eacute;cessaire &agrave;
							l&rsquo;ex&eacute;cution des obligations d&eacute;finies lors de la conclusion du contrat ou
							de la dur&eacute;e pr&eacute;d&eacute;finie de la relation contractuelle.
						</p>
						<br />
						<h3>
							Conservation des donn&eacute;es anonymis&eacute;es au del&agrave; de la relation
							contractuelle / apr&egrave;s la suppression du compte
						</h3>
						<br />
						<p>
							Nous conservons les donn&eacute;es personnelles pour la dur&eacute;e strictement
							n&eacute;cessaire &agrave; la r&eacute;alisation des finalit&eacute;s d&eacute;crites dans
							les pr&eacute;sentes CGU. Au-del&agrave; de cette dur&eacute;e, elles seront
							anonymis&eacute;es et conserv&eacute;es &agrave; des fins exclusivement statistiques et ne
							donneront lieu &agrave; aucune exploitation, de quelque nature que ce soit.
						</p>
						<br />
						<h3>Suppression des donn&eacute;es apr&egrave;s suppression du compte</h3>
						<br />
						<p>
							Des moyens de purge de donn&eacute;es sont mis en place afin d&rsquo;en pr&eacute;voir la
							suppression effective d&egrave;s lors que la dur&eacute;e de conservation ou
							d&rsquo;archivage n&eacute;cessaire &agrave; l&rsquo;accomplissement des finalit&eacute;s
							d&eacute;termin&eacute;es ou impos&eacute;es est atteinte. Conform&eacute;ment &agrave; la
							loi n&deg;78-17 du 6 janvier 1978 relative &agrave; l&rsquo;informatique, aux fichiers et
							aux libert&eacute;s, vous disposez par ailleurs d&rsquo;un droit de suppression sur vos
							donn&eacute;es que vous pouvez exercer &agrave; tout moment en prenant contact avec
							l&rsquo;&Eacute;diteur.
						</p>
						<br />
						<h4>Suppression des donn&eacute;es apr&egrave;s 3 ans d&rsquo;inactivit&eacute;</h4>
						<br />
						<p>
							Pour des raisons de s&eacute;curit&eacute;, si vous ne vous &ecirc;tes pas
							authentifi&eacute; sur le Site pendant une p&eacute;riode de trois ans, vous recevrez un
							e-mail vous invitant &agrave; vous connecter dans les plus brefs d&eacute;lais, sans quoi
							vos donn&eacute;es seront supprim&eacute;es de nos bases de donn&eacute;es.
						</p>
						<br />
						<h3>Suppression du compte</h3>
						<br />
						<h4>Suppression du compte &agrave; la demande</h4>
						<br />
						<p>
							L&rsquo;Utilisateur a la possibilit&eacute; de supprimer son Compte &agrave; tout moment,
							par simple demande &agrave; l&rsquo;&Eacute;diteur OU par le menu de suppression de Compte
							pr&eacute;sent dans les param&egrave;tres du Compte le cas &eacute;ch&eacute;ant.
						</p>
						<br />
						<h4>Suppression du compte en cas de violation des CGU</h4>
						<br />
						<p>
							En cas de violation d&rsquo;une ou de plusieurs dispositions des CGU ou de tout autre
							document incorpor&eacute; aux pr&eacute;sentes par r&eacute;f&eacute;rence,
							l&rsquo;&Eacute;diteur se r&eacute;serve le droit de mettre fin ou restreindre sans aucun
							avertissement pr&eacute;alable et &agrave; sa seule discr&eacute;tion, votre usage et
							acc&egrave;s aux services, &agrave; votre compte et &agrave; tous les Sites.
						</p>
						<br />
						<h3>
							Indications en cas de faille de s&eacute;curit&eacute; d&eacute;cel&eacute;e par
							l&rsquo;&Eacute;diteur
						</h3>
						<br />
						<h4>Information de l&rsquo;Utilisateur en cas de faille de s&eacute;curit&eacute;</h4>
						<br />
						<p>
							Nous nous engageons &agrave; mettre en oeuvre toutes les mesures techniques et
							organisationnelles appropri&eacute;es afin de garantir un niveau de s&eacute;curit&eacute;
							adapt&eacute; au regard des risques d&rsquo;acc&egrave;s accidentels, non autoris&eacute;s
							ou ill&eacute;gaux, de divulgation, d&rsquo;alt&eacute;ration, de perte ou encore de
							destruction des donn&eacute;es personnelles vous concernant.
						</p>
						<br />
						<p>
							Dans l&rsquo;&eacute;ventualit&eacute; o&ugrave; nous prendrions connaissance d&rsquo;un
							acc&egrave;s ill&eacute;gal aux donn&eacute;es personnelles vous concernant stock&eacute;es
							sur nos serveurs ou ceux de nos prestataires, ou d&rsquo;un acc&egrave;s non autoris&eacute;
							ayant pour cons&eacute;quence la r&eacute;alisation des risques identifi&eacute;s ci-dessus,
							nous nous engageons &agrave; :
						</p>
						<br />
						<ul>
							<li>Vous notifier l&rsquo;incident dans les plus brefs d&eacute;lais ;</li>
							<li>Examiner les causes de l&rsquo;incident et vous en informer ;</li>
							<li>
								Prendre les mesures n&eacute;cessaires dans la limite du raisonnable afin
								d&rsquo;amoindrir les effets n&eacute;gatifs et pr&eacute;judices pouvant
								r&eacute;sulter dudit incident
							</li>
						</ul>
						<br />
						<h4>Limitation de la responsabilit&eacute;</h4>
						<br />
						<p>
							En aucun cas les engagements d&eacute;finis au point ci-dessus relatifs &agrave; la
							notification en cas de faille de s&eacute;curit&eacute; ne peuvent &ecirc;tre
							assimil&eacute;s &agrave; une quelconque reconnaissance de faute ou de responsabilit&eacute;
							quant &agrave; la survenance de l&rsquo;incident en question.
						</p>
						<br />
						<h3>Transfert des donn&eacute;es personnelles &agrave; l&rsquo;&eacute;tranger</h3>
						<br />
						<h4>Pas de transfert en dehors de l&rsquo;Union europ&eacute;enne</h4>
						<br />
						<p>
							L&rsquo;&Eacute;diteur s&rsquo;engage &agrave; ne pas transf&eacute;rer les donn&eacute;es
							personnelles de ses Utilisateurs en dehors de l&rsquo;Union europ&eacute;enne.
						</p>
						<br />
						<h3>Modification des CGU et de la politique de confidentialit&eacute;</h3>
						<br />
						<h4>
							En cas de modification des pr&eacute;sentes CGU, engagement de ne pas baisser le niveau de
							confidentialit&eacute; de mani&egrave;re substantielle sans l&rsquo;information
							pr&eacute;alable des personnes concern&eacute;es
						</h4>
						<br />
						<p>
							Nous nous engageons &agrave; vous informer en cas de modification substantielle des
							pr&eacute;sentes CGU, et &agrave; ne pas baisser le niveau de confidentialit&eacute; de vos
							donn&eacute;es de mani&egrave;re substantielle sans vous en informer et obtenir votre
							consentement.
						</p>
						<br />
						<h3>Droit applicable et modalit&eacute;s de recours</h3>
						<br />
						<h4>Clause d&rsquo;arbitrage</h4>
						<br />
						<p>
							Vous acceptez express&eacute;ment que tout litige susceptible de na&icirc;tre du fait des
							pr&eacute;sentes CGU, notamment de son interpr&eacute;tation ou de son ex&eacute;cution,
							rel&egrave;vera d&rsquo;une proc&eacute;dure d&rsquo;arbitrage soumise au r&egrave;glement
							de la
						</p>
						<br />
						<p>
							plateforme d&rsquo;arbitrage choisie d&rsquo;un commun accord, auquel vous adh&eacute;rerez
							sans r&eacute;serve.
						</p>
						<br />
						<h3>Portabilit&eacute; des donn&eacute;es</h3>
						<br />
						<h4>Portabilit&eacute; des donn&eacute;es</h4>
						<br />
						<p>
							L&rsquo;&Eacute;diteur s&rsquo;engage &agrave; vous offrir la possibilit&eacute; de vous
							faire restituer l&rsquo;ensemble des donn&eacute;es vous concernant sur simple demande.
							L&rsquo;Utilisateur se voit ainsi garantir une meilleure ma&icirc;trise de ses
							donn&eacute;es, et garde la possibilit&eacute; de les r&eacute;utiliser. Ces donn&eacute;es
							devront &ecirc;tre fournies dans un format ouvert et ais&eacute;ment r&eacute;utilisable.
						</p>
						<br />
						<p>&nbsp;</p>
						<br />
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default ConfidentialityPage;
