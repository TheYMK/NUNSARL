import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import FileUpload from '../FileUpload';

const TeamCreateModal = ({ isModalVisible, handleOk, handleCancel, values, setValues, loading, setLoading }) => {
	const { full_name, job_title, description, linkedin_link, twitter_link, images } = values;

	return (
		<Modal
			title="Nouveau membre"
			visible={isModalVisible}
			onOk={() => handleOk(values)}
			onCancel={handleCancel}
			okText="Crée"
			cancelText="Annuler"
		>
			<React.Fragment>
				<div className="p-3">
					<FileUpload values={values} setValues={setValues} setLoading={setLoading} loading={loading} />
				</div>
				<form>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="full_name">Nom & Prénom</label>
							<input
								type="text"
								className="form-control"
								id="full_name"
								placeholder="John Doe"
								value={full_name}
								onChange={(e) => setValues({ ...values, full_name: e.target.value })}
								required
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="job_title">Poste occupé</label>
							<input
								type="text"
								className="form-control"
								id="job_title"
								placeholder="Web Dev"
								value={job_title}
								onChange={(e) => setValues({ ...values, job_title: e.target.value })}
								required
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="linkedin_link">Lien Linkedin</label>
							<input
								type="text"
								className="form-control"
								id="linkedin_link"
								placeholder="Inserez un lien"
								value={linkedin_link}
								onChange={(e) => setValues({ ...values, linkedin_link: e.target.value })}
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="twitter_link">Lien Twitter</label>
							<input
								type="text"
								className="form-control"
								id="twitter_link"
								placeholder="Inserez un lien"
								value={twitter_link}
								onChange={(e) => setValues({ ...values, twitter_link: e.target.value })}
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="description" className="form-label">
								Profile professionnel
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
			</React.Fragment>
		</Modal>
	);
};

export default TeamCreateModal;
