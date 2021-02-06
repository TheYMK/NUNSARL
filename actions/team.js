import axios from 'axios';
import { API_URL } from '../config';

export const createTeamMember = async (teamMember, authtoken) => {
	return await axios.post(`${API_URL}/team`, teamMember, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getMembers = async () => {
	return await axios.get(`${API_URL}/team/all`);
};

export const removeMember = async (id, authtoken) => {
	return await axios.delete(`${API_URL}/team/${id}`, {
		headers: {
			authtoken
		}
	});
};

export const updateMember = async (id, member, authtoken) => {
	return await axios.put(`${API_URL}/team/${id}`, member, {
		headers: {
			authtoken
		}
	});
};

export const getSingleMember = async (id) => {
	return await axios.get(`${API_URL}/team/${id}`);
};
