import React, { useState } from 'react';
import Link from 'next/link';
import ModalComponent from '../modal/ModalComponent';
import { sendServiceDemand } from '../../actions/form';
import { toast } from 'react-toastify';

function WelcomeArea() {
	const [ isModalVisible, setIsModalVisible ] = useState(false);

	const [ values, setValues ] = useState({
		full_name: '',
		email: '',
		orgName: '',
		serviceType: '',
		description: '',
		phone: '',
		serviceTypes: [
			'Conseil & stratégie',
			'Identité de marque',
			'Réseaux sociaux',
			'Développement web & mobile',
			'Médiatisation',
			'Référencement'
		]
	});

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = (v) => {
		// console.log(v);
		sendServiceDemand(v)
			.then((res) => {
				toast.success('Votre demande a bien été reçu. Nous vous contacterons le plus tôt possible.');
				setValues({ ...values, full_name: '', email: '', orgName: '', serviceType: '', description: '' });
				setIsModalVisible(false);
			})
			.catch((err) => {
				toast.error("Une erreur est survenu lors de l'envoie de votre demande. Veuillez réessayer.");
				setValues({ ...values, full_name: '', email: '', orgName: '', serviceType: '', description: '' });
			});
	};

	const handleCancel = () => {
		setIsModalVisible(false);
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
				setValues={setValues}
			/>
		</React.Fragment>
	);
}

export default WelcomeArea;
