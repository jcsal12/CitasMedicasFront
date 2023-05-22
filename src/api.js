import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getPacientes = () => {
  return api.get('/paciente');
};

export const getMedicos = () => {
  return api.get('/medico');
};