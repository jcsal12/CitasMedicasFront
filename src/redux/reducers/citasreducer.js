import {
    FETCH_CITA_REQUEST,
    FETCH_CITA_SUCCESS,
    FETCH_CITA_FAILURE,
    ADD_CITA_FAILURE,
    ADD_CITA_SUCCESS,
    DELETE_CITA_FAILURE,
    DELETE_CITA_SUCCESS,
    UPDATE_CITA_FAILURE,
    UPDATE_CITA_SUCCESS
  } from '../actions/citasactions';
  
  const initialState = {
    citas: [],
    loading: false,
    error: null
  };
  
  const citasReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CITA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CITA_SUCCESS:
        return {
          ...state,
          loading: false,
          citas: action.payload,
          error: null,
        };
      case FETCH_CITA_FAILURE:
        return {
          ...state,
          loading: false,
          citas: [],
          error: action.payload,
        };
          case ADD_CITA_SUCCESS:
            return {
              ...state,
              citas: [...state.citas, action.payload],
              error: null,
            };
          case ADD_CITA_FAILURE:
            return {
              ...state,
              error: action.payload,
            };
            case DELETE_CITA_SUCCESS:
            return {
              ...state,
              citas: state.citas.filter((cita) => cita.id !== action.payload),
              error: null,
            };
          case DELETE_CITA_FAILURE:
            return {
              ...state,
              error: action.payload,
            };
            case UPDATE_CITA_SUCCESS:
            return {
              ...state,
              citas: state.citas.map((cita) =>
                cita.id === action.payload.id ? action.payload : cita
              ),
              error: null,
            };
          case UPDATE_CITA_FAILURE:
            return {
              ...state,
              error: action.payload,
            };
            default:
              return state;
          }
        };
  
  export default citasReducer;

  