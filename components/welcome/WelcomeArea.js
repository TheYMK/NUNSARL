import React, { useState } from 'react';
import Link from 'next/link';
import ModalComponent from '../modal/ModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { sendServiceDemand } from '../../actions/form';
import { toast } from 'react-toastify';
import firebase from 'firebase';
import Router from 'next/router';

function WelcomeArea() {
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ ...state }));

	const [ values, setValues ] = useState({
		full_name: '',
		email: '',
		orgName: '',
		selectedServiceTypes: [],
		description: '',
		phone: '',
		serviceTypes: [
			{
				_id: 1,
				text: 'Conseil & stratégie'
			},
			{
				_id: 2,
				text: 'Identité visuelle et graphique'
			},
			{
				_id: 3,
				text: 'Réseaux sociaux'
			},
			{
				_id: 4,
				text: 'Développement Web & Mobile'
			},
			{
				_id: 5,
				text: 'Multimédia'
			},
			{
				_id: 6,
				text: 'Référencement'
			}
		]
	});

	const { selectedServiceTypes, serviceTypes } = values;

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = (v) => {
		// console.log(v);
		sendServiceDemand(v)
			.then((res) => {
				toast.success('Votre demande a bien été reçu. Nous vous contacterons le plus tôt possible.');
				setValues({
					...values,
					full_name: '',
					email: '',
					orgName: '',
					selectedServiceTypes: [],
					description: ''
				});
				setIsModalVisible(false);
			})
			.catch((err) => {
				toast.error("Une erreur est survenu lors de l'envoie de votre demande. Veuillez réessayer.");
				setValues({
					...values,
					full_name: '',
					email: '',
					orgName: '',
					selectedServiceTypes: [],
					description: ''
				});
			});
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});
		toast.success('Vous avez été deconnecté');
		Router.push('/');
	};

	const handleToggleServices = (text) => () => {
		const clickedService = selectedServiceTypes.indexOf(text);
		const allSelectedServices = [ ...selectedServiceTypes ];

		if (clickedService === -1) {
			allSelectedServices.push(text);
		} else {
			allSelectedServices.splice(clickedService, 1);
		}

		setValues({ ...values, selectedServiceTypes: allSelectedServices });
	};

	return (
		<React.Fragment>
			<div className="welcome-area" id="welcome">
				<div className="header-text">
					<div className="container">
						<div className="row">
							<div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
								<h1>
									Création de <strong>stratégies</strong> <br />et <strong>expériences</strong>{' '}
									digitales sur mesure
								</h1>
								<p>Nous faisons de votre ambition un projet collectif.</p>

								{user &&
								user.role === 'admin' && (
									<Link href="/admin/dashboard">
										<a className="main-button-slider mr-3" style={{ background: '#000' }}>
											Tableau de bord
										</a>
									</Link>
								)}

								{user &&
								user.role === 'admin' && (
									<button
										className="main-button-slider mr-3"
										style={{ background: '#000' }}
										onClick={logout}
										href=""
									>
										Deconnexion
									</button>
								)}

								{/* <Link href="#"> */}
								<button className="main-button-slider" onClick={showModal}>
									Demander un devis
								</button>
								{/* </Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalComponent
				isModalVisible={isModalVisible}
				handleCancel={handleCancel}
				handleOk={handleOk}
				values={values}
				handleToggleServices={handleToggleServices}
				setValues={setValues}
			/>
		</React.Fragment>
	);
}

export default WelcomeArea;
