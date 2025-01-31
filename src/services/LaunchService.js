import api from './ApiService';
import {SERVICES_URL} from '../config';

const serviceUrl = `${SERVICES_URL}/launches`;

const launchService = {
  get: () => api.get(`${serviceUrl}`)
};

export default launchService;
