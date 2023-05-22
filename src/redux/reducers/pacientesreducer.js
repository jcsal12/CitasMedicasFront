import {
    FETCH_PACIENTES_REQUEST,
    FETCH_PACIENTES_SUCCESS,
    FETCH_PACIENTES_FAILURE,
    ADD_PACIENTE_FAILURE,
    ADD_PACIENTE_SUCCESS,
    DELETE_PACIENTE_FAILURE,
    DELETE_PACIENTE_SUCCESS,
    UPDATE_PACIENTE_FAILURE,
    UPDATE_PACIENTE_SUCCESS
  } from '../actions/pacientesactions';
  
  const initialState = {
    pacientes: [],
    loading: false,
    error: null
  };
  
  const pacientesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PACIENTES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PACIENTES_SUCCESS:
        return {
          ...state,
          loading: false,
          pacientes: action.payload,
          error: null,
        };
      case FETCH_PACIENTES_FAILURE:
        return {
          ...state,
          loading: false,
          pacientes: [],
          error: action.payload,
        };
          case ADD_PACIENTE_SUCCESS:
            return {
              ...state,
              pacientes: [...state.pacientes, action.payload],
              error: null,
            };
          case ADD_PACIENTE_FAILURE:
            return {
              ...state,
              error: action.payload,
            };
            case DELETE_PACIENTE_SUCCESS:
            return {
              ...state,
              pacientes: state.pacientes.filter((paciente) => paciente.id !== action.payload),
              error: null,
            };
          case DELETE_PACIENTE_FAILURE:
            return {
              ...state,
              error: action.payload,
            };
            case UPDATE_PACIENTE_SUCCESS:
            return {
              ...state,
              pacientes: state.pacientes.map((paciente) =>
                paciente.id === action.payload.id ? action.payload : paciente
              ),
              error: null,
            };
          case UPDATE_PACIENTE_FAILURE:
            return {
              ...state,
              error: action.payload,
            };
            default:
              return state;
          }
        };
  
  export default pacientesReducer;

  