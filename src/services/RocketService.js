import api from './ApiService';
import {SERVICES_URL} from '../config';

const serviceUrl = `${SERVICES_URL}/rockets`;

const rocketService = {
  get: (rocketId) => api.get(`${serviceUrl}/${rocketId}`)
};

export default rocketService;