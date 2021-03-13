import api from './ApiService';
import {SERVICES_URL} from '../config';

const serviceUrl = `${SERVICES_URL}/rockets`;

const rocketService = {
  get: () => api.get(`${serviceUrl}`)
};

export default rocketService;