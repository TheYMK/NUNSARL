import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PhoneInput from 'react-phone-number-input';

function ModalComponent({ isModalVisible, handleOk, handleCancel, values, setValues, handleToggleServices }) {
	const { full_name, email, orgName, selectedServiceTypes, serviceTypes, description, phone } = values;

	const showServiceTypes = () => {
		return (
			serviceTypes &&
			serviceTypes.map((s, index) => (
				<li className="list-unstyled" key={index}>
					<input className="mr-2" type="checkbox" onChange={handleToggleServices(s.text)} />
					<label className="form-check-label">{s.text}</label>
				</li>
			))
		);
	};

	return (
		<Modal
			title="Dites-nous en plus sur le service que vous voulez recevoir. "
			visible={isModalVisible}
			onOk={() => handleOk(values)}
			onCancel={handleCancel}
			okText="Envoyer"
			cancelText="Annuler"
		>
			<form>
				<div className="form-row">
					<div className="form-group col-md-12">
						<label htmlFor="full_name">Nom & prénom</label>
						<input
							type="text"
							className="form-control"
							id="full_name"
							placeholder="Saisissez votre nom..."
							value={full_name}
							onChange={(e) => setValues({ ...values, full_name: e.target.value })}
							required
						/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Saisissez votre email..."
							value={email}
							onChange={(e) => setValues({ ...values, email: e.target.value })}
							required
						/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="phone">Téléphone</label>
						<PhoneInput
							placeholder="Enter phone number"
							value={phone}
							className="form-control"
							onChange={(e) => setValues({ ...values, phone: e })}
						/>
					</div>
					<div className="form-group col-md-12">
						<label htmlFor="orgName">Société</label>
						<input
							type="text"
							className="form-control"
							id="orgName"
							placeholder="Saisissez le nom..."
							value={orgName}
							onChange={(e) => setValues({ ...values, orgName: e.target.value })}
							required
						/>
					</div>
					{/* <div className="form-group col-md-6">
						<label htmlFor="serviceType" className="form-label">
							Service souhaité
						</label>
						<select
							name="serviceType"
							id="serviceType"
							className="form-control"
							required
							onChange={(e) => setValues({ ...values, serviceType: e.target.value })}
						>
							<option value="">Veuillez choisir un type de service</option>
							{serviceTypes.map((s, i) => (
								<option key={i} value={s}>
									{s}
								</option>
							))}
						</select>
					</div> */}
					<div className="m-3">
						<ul>{showServiceTypes()}</ul>
					</div>

					<div className="form-group col-md-12">
						<label htmlFor="description" className="form-label">
							Décrivez-nous votre projet et vos objectifs
						</label>
						<textarea
							className="form-control"
							id="description"
							rows="3"
							value={description}
							onChange={(e) => setValues({ ...values, description: e.target.value })}
						/>
					</div>
				</div>
			</form>
		</Modal>
	);
}

export default ModalComponent;
