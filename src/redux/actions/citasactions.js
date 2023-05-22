import axios from 'axios';

export const FETCH_CITA_REQUEST = 'FETCH_CITA_REQUEST';
export const FETCH_CITA_SUCCESS = 'FETCH_CITA_SUCCESS';
export const FETCH_CITA_FAILURE = 'FETCH_CITA_FAILURE';
export const ADD_CITA_SUCCESS = 'ADD_CITA_SUCCESS';
export const ADD_CITA_FAILURE = 'ADD_CITA_FAILURE';
export const DELETE_CITA_FAILURE = 'DELETE_CITA_FAILURE';
export const DELETE_CITA_SUCCESS = 'DELETE_CITA_SUCCESS';
export const UPDATE_CITA_SUCCESS = 'UPDATE_CITA_SUCCESS';
export const UPDATE_CITA_FAILURE = 'UPDATE_CITA_FAILURE';

//GET
export const fetchCitaRequest = () => ({
  type: FETCH_CITA_REQUEST,
});

export const fetchCitaSuccess = (citas) => ({
  type: FETCH_CITA_SUCCESS,
  payload: citas,
});

export const fetchCitaFailure = (error) => ({
  type: FETCH_CITA_FAILURE,
  payload: error,
});

export const fetchCita = () => {
  return (dispatch) => {
    dispatch(fetchCitaRequest());
    axios
      .get('http://localhost:8080/api/cita', {
      })
      .then((response) => {
        dispatch(fetchCitaSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCitaFailure(error.message));
      });
  };
};

//POST
export const addCita = (cita) => {
  return (dispatch) => {
    axios
      .post('http://localhost:8080/api/cita', cita) // Ajusta la URL de acuerdo a tu API
      .then((response) => {
        // Realiza cualquier acción adicional necesaria después de agregar el cita con éxito
        dispatch(addCitaSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addCitaFailure(error.message));
      });
  };
};

export const addCitaSuccess = (cita) => {
  return {
    type: 'ADD_PACIENTE_SUCCESS',
    payload: cita,
  };
};

export const addCitaFailure = (error) => {
  return {
    type: 'ADD_PACIENTE_FAILURE',
    payload: error,
  };
};

//DELETE
export const deleteCita = (citaId) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/cita/${citaId}`) // Ajusta la URL de acuerdo a tu API
      .then(() => {
        // Realiza cualquier acción adicional necesaria después de eliminar el cita con éxito
        dispatch(deleteCitaSuccess(citaId));
      })
      .catch((error) => {
        dispatch(deleteCitaFailure(error.message));
      });
  };
};

export const deleteCitaSuccess = (citaId) => {
  return {
    type: 'DELETE_PACIENTE_SUCCESS',
    payload: citaId,
  };
};

export const deleteCitaFailure = (error) => {
  return {
    type: 'DELETE_PACIENTE_FAILURE',
    payload: error,
  };
};

//PUT
export const updateCita = (citaId, cita) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/cita/${citaId}`, cita) // Ajusta la URL de acuerdo a tu API
      .then((response) => {
        // Realiza cualquier acción adicional necesaria después de actualizar el cita con éxito
        dispatch(updateCitaSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateCitaFailure(error.message));
      });
  };
};

export const updateCitaSuccess = (cita) => {
  return {
    type: 'UPDATE_PACIENTE_SUCCESS',
    payload: cita,
  };
};

export const updateCitaFailure = (error) => {
  return {
    type: 'UPDATE_PACIENTE_FAILURE',
    payload: error,
  };
};