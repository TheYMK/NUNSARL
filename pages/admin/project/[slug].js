import React, { useState } from 'react';
import { getSingleProject, updateProject } from '../../../actions/project';
import Admin from '../../../components/auth/Admin';
import Layout from '../../../components/Layout';
import FileUpload from '../../../components/FileUpload';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Router from 'next/router';
import Banner from '../../../components/header/Banner';
import Head from 'next/head';

const ProjectUpdatePage = ({ project }) => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<title>NUN SARL | Projets</title>
		</Head>
	);

	const [ values, setValues ] = useState({
		name: project.name,
		category: project.category,
		description: project.description,
		images: project.images,
		client: project.client,
		url: project.url,
		date: project.date
	});
	const [ categories, setCategories ] = useState([ 'Web', 'Mobile', 'Design' ]);
	const [ loading, setLoading ] = useState(false);

	const { name, category, description, images, client, url, date } = values;

	const { user } = useSelector((state) => ({ ...state }));

	const handleUpdate = (e) => {
		e.preventDefault();
		setLoading(true);
		if (user && user.token) {
			updateProject(project.slug, values, user.token)
				.then((res) => {
					setLoading(false);
					toast.success('Projet mis à jour avec succès!');
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
				<div className="form-group col-md-12">
					<label htmlFor="name">Nom</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={name}
						onChange={(e) => setValues({ ...values, name: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="client">Client</label>
					<input
						type="text"
						className="form-control"
						id="client"
						value={client}
						onChange={(e) => setValues({ ...values, client: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="url">URL</label>
					<input
						type="text"
						className="form-control"
						id="url"
						value={url}
						onChange={(e) => setValues({ ...values, url: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						className="form-control"
						id="date"
						value={date}
						onChange={(e) => setValues({ ...values, date: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="category" className="form-label">
						Categorie
					</label>
					<select
						name="category"
						id="category"
						className="form-control"
						required
						value={category}
						onChange={(e) => setValues({ ...values, category: e.target.value })}
					>
						<option value="">Veuillez choisir une categorie</option>
						{categories.map((c, i) => (
							<option key={i} value={c}>
								{c}
							</option>
						))}
					</select>
				</div>
				<div className="form-group col-md-12">
					<label htmlFor="description" className="form-label">
						Description
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
					<Banner title={'Modification du projet'} />
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
	return getSingleProject(params.slug).then((res) => {
		return {
			props: {
				project: res.data,
				params
			}
		};
	});
}

export default ProjectUpdatePage;
