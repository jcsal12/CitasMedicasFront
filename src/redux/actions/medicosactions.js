import axios from 'axios';

export const FETCH_MEDICOS_REQUEST = 'FETCH_MEDICOS_REQUEST';
export const FETCH_MEDICOS_SUCCESS = 'FETCH_MEDICOS_SUCCESS';
export const FETCH_MEDICOS_FAILURE = 'FETCH_MEDICOS_FAILURE';
export const ADD_MEDICOS_SUCCESS = 'ADD_MEDICOS_SUCCESS';
export const ADD_MEDICOS_FAILURE = 'ADD_MEDICOS_FAILURE';
export const DELETE_MEDICOS_FAILURE = 'DELETE_MEDICOS_FAILURE';
export const DELETE_MEDICOS_SUCCESS = 'DELETE_MEDICOS_SUCCESS';
export const UPDATE_MEDICOS_SUCCESS = 'UPDATE_MEDICOS_SUCCESS';
export const UPDATE_MEDICOS_FAILURE = 'UPDATE_MEDICOS_FAILURE';

//GET
export const fetchMedicosRequest = () => ({
  type: FETCH_MEDICOS_REQUEST,
});

export const fetchMedicosSuccess = (medicos) => ({
  type: FETCH_MEDICOS_SUCCESS,
  payload: medicos,
});

export const fetchMedicosFailure = (error) => ({
  type: FETCH_MEDICOS_FAILURE,
  payload: error,
});

export const fetchMedicos = () => {
  return (dispatch) => {
    dispatch(fetchMedicosRequest());
    axios
      .get('http://localhost:8080/api/medico', {
      })
      .then((response) => {
        dispatch(fetchMedicosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchMedicosFailure(error.message));
      });
  };
};

//POST
export const addMedico = (medico) => {
  return (dispatch) => {
    axios
      .post('http://localhost:8080/api/medico', medico) // Ajusta la URL de acuerdo a tu API
      .then((response) => {
        // Realiza cualquier acción adicional necesaria después de agregar el Medico con éxito
        dispatch(addMedicoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addMedicoFailure(error.message));
      });
  };
};

export const addMedicoSuccess = (medico) => {
  return {
    type: 'ADD_MEDICOS_SUCCESS',
    payload: medico,
  };
};

export const addMedicoFailure = (error) => {
  return {
    type: 'ADD_MEDICOS_FAILURE',
    payload: error,
  };
};