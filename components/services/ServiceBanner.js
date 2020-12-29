import React, { useState } from 'react';
import Link from 'next/link';
import ModalComponent from '../modal/ModalComponent';

function ServiceBanner({ title }) {
	const [ isModalVisible, setIsModalVisible ] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = (values) => {
		console.log(values);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<React.Fragment>
			<div className="single-service">
				<div className="header-text">
					<div className="container">
						<div className="row">
							<div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
								<h1>{title}</h1>

								{/* <Link href="#"> */}
								<button className="main-button-slider" onClick={showModal}>
									Parlez nous de votre projet
								</button>
								{/* </Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalComponent isModalVisible={isModalVisible} handleCancel={handleCancel} handleOk={handleOk} />
		</React.Fragment>
	);
}

export default ServiceBanner;
