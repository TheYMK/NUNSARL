import axios from 'axios';
import { API_URL } from '../config';

export const sendServiceDemand = async (service) => {
	return await axios.post(`${API_URL}/service-demand`, service);
};
