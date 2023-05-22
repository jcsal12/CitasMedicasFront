import { configureStore } from '@reduxjs/toolkit';
import pacientesReducer from './reducers/pacientesreducer';
import medicosReducer from './reducers/medicosreducer';
import citasReducer from './reducers/citasreducer';

// const store = configureStore({
//   reducer: medicosReducer
// });
 const store = configureStore({
   reducer: {
     pacientes: pacientesReducer,
     medicos: medicosReducer,
     citas: citasReducer
    //  auth: authReducer,
   },
  //  middleware: [thunk],
 });

export default store;