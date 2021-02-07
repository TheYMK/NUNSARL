import React, { useState } from 'react';
import Link from 'next/link';
import ModalComponent from '../modal/ModalComponent';
import { sendServiceDemand } from '../../actions/form';
import { toast } from 'react-toastify';

function ServiceBanner({ title, description }) {
	const [ isModalVisible, setIsModalVisible ] = useState(false);

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
			<div className="single-service">
				<div className="header-text">
					<div className="container">
						<div className="row">
							<div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
								<h1>{title}</h1>
								<p>{description}</p>
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

export default ServiceBanner;
