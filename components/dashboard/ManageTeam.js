import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createTeamMember, getMembers, removeMember } from '../../actions/team';
import { toast } from 'react-toastify';
import TeamCreateModal from '../modal/TeamCreateModal';
import { useSelector } from 'react-redux';

const ManageTeam = () => {
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));
	const [ teamMembers, setTeamMembers ] = useState([]);
	const [ reload, setReload ] = useState(false);
	const [ values, setValues ] = useState({
		full_name: '',
		job_title: '',
		description: '',
		linkedin_link: '',
		twitter_link: '',
		images: []
	});
	const [ loading, setLoading ] = useState(false);

	useEffect(
		() => {
			fetchMembers();
		},
		[ reload ]
	);

	const fetchMembers = () => {
		getMembers()
			.then((res) => {
				setTeamMembers(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error(`Failed to fetch all members!`);
			});
	};

	const handleOk = (v) => {
		setLoading(true);
		createTeamMember(values, user.token)
			.then((res) => {
				setLoading(false);
				toast.success('Nouveau membre ajouté!');
				setValues({
					...values,
					full_name: '',
					job_title: '',
					description: '',
					linkedin_link: '',
					twitter_link: '',
					images: []
				});
				setIsModalVisible(false);
				setReload(!reload);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				// if (err.response.status === 400) toast.error(err.response.data);
				toast.error("Oops! Erreur lors de la creation d'un nouveau membre. Veuillez réessayer!");
			});
	};

	const handleRemove = (id) => {
		removeMember(id, user.token)
			.then((res) => {
				toast.success('Un membre a été supprimé de votre base de donnée!');
				setReload(!reload);
			})
			.catch((err) => {
				console.log(err);
				// if (err.response.status === 400) toast.error(err.response.data);
				toast.error("Oops! Erreur lors de la suppression d'un membre. Veuillez réessayer!");
			});
	};

	const showMembers = () => (
		<div className="table-responsive">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nom & Prénom</th>
						<th scope="col">Poste occupé</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{teamMembers.map((m, i) => (
						<tr key={m._id}>
							<th scope="row">{i + 1}</th>

							<td>{m.full_name}</td>
							<td>{m.job_title}</td>

							<td>
								<button className="badge bg-danger btn" onClick={(e) => handleRemove(m._id)}>
									Supprimer
								</button>
								<br />
								<Link href={`/admin/team/${m._id}`}>
									<a className="badge bg-warning btn">Modifier</a>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const handleCancel = (v) => {
		setValues({
			...values,
			full_name: '',
			job_title: '',
			description: '',
			linkedin_link: '',
			twitter_link: '',
			images: []
		});
		setIsModalVisible(false);
	};

	return (
		<div>
			<div className="container text-center my-4">
				<a className="main-button" onClick={() => setIsModalVisible(true)}>
					Nouveau Membre
				</a>
			</div>
			{showMembers()}
			<TeamCreateModal
				loading={loading}
				setLoading={setLoading}
				isModalVisible={isModalVisible}
				handleCancel={handleCancel}
				handleOk={handleOk}
				values={values}
				setValues={setValues}
			/>
		</div>
	);
};

export default ManageTeam;
