import {
    FETCH_MEDICOS_REQUEST,
    FETCH_MEDICOS_SUCCESS,
    FETCH_MEDICOS_FAILURE,
    ADD_MEDICOS_FAILURE,
    ADD_MEDICOS_SUCCESS,
    DELETE_MEDICOS_FAILURE,
    DELETE_MEDICOS_SUCCESS,
    UPDATE_MEDICOS_FAILURE,
    UPDATE_MEDICOS_SUCCESS
  } from '../actions/medicosactions';
  
  const initialState = {
    medicos: [],
    loading: false,
    error: null
  };
  
  const medicosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MEDICOS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_MEDICOS_SUCCESS:
        return {
          ...state,
          loading: false,
          medicos: action.payload,
          error: null,
        };
      case FETCH_MEDICOS_FAILURE:
        return {
          ...state,
          loading: false,
          medicos: [],
          error: action.payload,
        };
        case ADD_MEDICOS_SUCCESS:
          return {
            ...state,
            medicos: [...state.medicos, action.payload],
            error: null,
          };
        case ADD_MEDICOS_FAILURE:
          return {
            ...state,
            error: action.payload,
          };
          case DELETE_MEDICOS_SUCCESS:
          return {
            ...state,
            medicos: state.medicos.filter((medico) => medico.id !== action.payload),
            error: null,
          };
        case DELETE_MEDICOS_FAILURE:
          return {
            ...state,
            error: action.payload,
          };
          case UPDATE_MEDICOS_SUCCESS:
          return {
            ...state,
            medicos: state.medicos.map((medico) =>
              medico.id === action.payload.id ? action.payload : medico
            ),
            error: null,
          };
        case UPDATE_MEDICOS_FAILURE:
          return {
            ...state,
            error: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default medicosReducer;

  