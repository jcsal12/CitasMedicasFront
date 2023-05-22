import axios from 'axios';

export const FETCH_PACIENTES_REQUEST = 'FETCH_PACIENTES_REQUEST';
export const FETCH_PACIENTES_SUCCESS = 'FETCH_PACIENTES_SUCCESS';
export const FETCH_PACIENTES_FAILURE = 'FETCH_PACIENTES_FAILURE';
export const ADD_PACIENTE_SUCCESS = 'ADD_PACIENTE_SUCCESS';
export const ADD_PACIENTE_FAILURE = 'ADD_PACIENTE_FAILURE';
export const DELETE_PACIENTE_FAILURE = 'DELETE_PACIENTE_FAILURE';
export const DELETE_PACIENTE_SUCCESS = 'DELETE_PACIENTE_SUCCESS';
export const UPDATE_PACIENTE_SUCCESS = 'UPDATE_PACIENTE_SUCCESS';
export const UPDATE_PACIENTE_FAILURE = 'UPDATE_PACIENTE_FAILURE';

//GET
export const fetchPacientesRequest = () => ({
  type: FETCH_PACIENTES_REQUEST,
});

export const fetchPacientesSuccess = (pacientes) => ({
  type: FETCH_PACIENTES_SUCCESS,
  payload: pacientes,
});

export const fetchPacientesFailure = (error) => ({
  type: FETCH_PACIENTES_FAILURE,
  payload: error,
});

export const fetchPacientes = () => {
  return (dispatch) => {
    dispatch(fetchPacientesRequest());
    axios
      .get('http://localhost:8080/api/paciente', {
      })
      .then((response) => {
        dispatch(fetchPacientesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPacientesFailure(error.message));
      });
  };
};

//POST
export const addPaciente = (paciente) => {
  return (dispatch) => {
    axios
      .post('http://localhost:8080/api/paciente', paciente) // Ajusta la URL de acuerdo a tu API
      .then((response) => {
        // Realiza cualquier acción adicional necesaria después de agregar el paciente con éxito
        dispatch(addPacienteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addPacienteFailure(error.message));
      });
  };
};

export const addPacienteSuccess = (paciente) => {
  return {
    type: 'ADD_PACIENTE_SUCCESS',
    payload: paciente,
  };
};

export const addPacienteFailure = (error) => {
  return {
    type: 'ADD_PACIENTE_FAILURE',
    payload: error,
  };
};

//DELETE
export const deletePaciente = (pacienteId) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/paciente/${pacienteId}`) // Ajusta la URL de acuerdo a tu API
      .then(() => {
        // Realiza cualquier acción adicional necesaria después de eliminar el paciente con éxito
        dispatch(deletePacienteSuccess(pacienteId));
      })
      .catch((error) => {
        dispatch(deletePacienteFailure(error.message));
      });
  };
};

export const deletePacienteSuccess = (pacienteId) => {
  return {
    type: 'DELETE_PACIENTE_SUCCESS',
    payload: pacienteId,
  };
};

export const deletePacienteFailure = (error) => {
  return {
    type: 'DELETE_PACIENTE_FAILURE',
    payload: error,
  };
};

//PUT
export const updatePaciente = (pacienteId, paciente) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/paciente/${pacienteId}`, paciente) // Ajusta la URL de acuerdo a tu API
      .then((response) => {
        // Realiza cualquier acción adicional necesaria después de actualizar el paciente con éxito
        dispatch(updatePacienteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updatePacienteFailure(error.message));
      });
  };
};

export const updatePacienteSuccess = (paciente) => {
  return {
    type: 'UPDATE_PACIENTE_SUCCESS',
    payload: paciente,
  };
};

export const updatePacienteFailure = (error) => {
  return {
    type: 'UPDATE_PACIENTE_FAILURE',
    payload: error,
  };
};