import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function ModalComponent({ isModalVisible, handleOk, handleCancel }) {
	const [ values, setValues ] = useState({
		full_name: '',
		email: '',
		orgName: '',
		serviceType: '',
		description: '',
		serviceTypes: [
			'Conseil & stratégie',
			'Identité de marque',
			'Réseaux sociaux',
			'Développement web & mobile',
			'Médiatisation',
			'Référencement'
		]
	});

	const { full_name, email, orgName, serviceType, serviceTypes, description } = values;

	return (
		<Modal
			title="Dites-nous en plus sur vos besoin. "
			visible={isModalVisible}
			onOk={() => handleOk(values)}
			onCancel={handleCancel}
		>
			<form>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="full_name">Votre nom complet</label>
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
						<label htmlFor="orgName">Nom de votre société</label>
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
					<div className="form-group col-md-6">
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
					</div>
					<div className="form-group col-md-12">
						<label htmlFor="description" className="form-label">
							Decrivez votre projet
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
