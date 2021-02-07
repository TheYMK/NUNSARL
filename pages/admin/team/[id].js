import React, { useState } from 'react';
import Admin from '../../../components/auth/Admin';
import Banner from '../../../components/header/Banner';
import Layout from '../../../components/Layout';
import FileUpload from '../../../components/FileUpload';
import { getSingleMember, updateMember } from '../../../actions/team';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Router from 'next/router';
import Head from 'next/head';

const TeamMemberUpdatePage = ({ member }) => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<title>NUN SARL | Équipes</title>
		</Head>
	);

	const [ values, setValues ] = useState({
		full_name: member.full_name,
		job_title: member.job_title,
		description: member.description,
		linkedin_link: member.linkedin_link,
		twitter_link: member.twitter_link,
		images: member.images
	});
	const [ loading, setLoading ] = useState(false);

	const { full_name, job_title, description, linkedin_link, twitter_link, images } = values;

	const { user } = useSelector((state) => ({ ...state }));

	const handleUpdate = (e) => {
		e.preventDefault();
		setLoading(true);
		if (user && user.token) {
			updateMember(member._id, values, user.token)
				.then((res) => {
					setLoading(false);
					toast.success('Information du membre mis à jour avec succès!');
					Router.push('/admin/dashboard');
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					// if (err.response.status === 400) toast.error(err.response.data);
					toast.error(err.response.data.error);
				});
		} else {
			setLoading(false);
			return;
		}
	};

	const showForm = () => (
		<form>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="full_name">Nom & Prénom</label>
					<input
						type="text"
						className="form-control"
						id="full_name"
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
			<a className="main-button" onClick={(e) => handleUpdate(e)}>
				{loading ? 'En cours...' : 'Mettre à jour'}
			</a>
		</form>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<Admin>
					<Banner title={"Modification d'information"} />
					<div className="container mb-5 p-5">
						<div className="p-3">
							<FileUpload
								values={values}
								setValues={setValues}
								setLoading={setLoading}
								loading={loading}
							/>
						</div>
						{showForm()}
					</div>
				</Admin>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleMember(params.id).then((res) => {
		return {
			props: {
				member: res.data,
				params
			}
		};
	});
}

export default TeamMemberUpdatePage;
