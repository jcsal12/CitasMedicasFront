import React from 'react';
import {  Route } from 'wouter';
// import { useSelector } from 'react-redux';
import Home from './paginas/Aplication/Home';
import Pacientes from './paginas/Paciente/Pacientes';
import AgregarPaciente from './paginas/Paciente/AgregarPaciente';
import Medicos from './paginas/Medico/Medicos';
import Logout from './paginas/Aplication/Logout';
import EliminarPaciente from './paginas/Paciente/EliminarPaciente';
import EditarPaciente from './paginas/Paciente/EditarPaciente';
import LoginForm from './paginas/Aplication/Login';
import AgregarMedico from './paginas/Medico/AgregarMedico';
import Citas from './paginas/Cita/Citas';
import EliminarCita from './paginas/Cita/EliminarCita';

const App = () => {
  
  //  const token = useSelector((state) => state.auth.token);

  return (
        <>

          <Route     
            // component={token ? Home : LoginForm }
            component={Home}
            path="/">
          </Route>

          <Route
            // component={token ? Pacientes : LoginForm }
            component={Pacientes}
            path="/pacientes">
          </Route>

          <Route
          // component={token ? AgregarPaciente : LoginForm }
            component={AgregarPaciente}
            path="/nuevopaciente">
          </Route>

          <Route
            // component={token ? EliminarPaciente : LoginForm }
            component={EliminarPaciente}
            path="/eliminarpaciente/:id">
          </Route>

          <Route
            // component={token ? EditarPaciente : LoginForm }
            component={EditarPaciente}
            path="/actualizarpaciente/:id">
          </Route>

          <Route
            component={Medicos}
            path="/medicos">
          </Route>

          <Route
            // component={token ? EliminarPaciente : LoginForm }
            component={EliminarCita}
            path="/eliminarmedico/:id">
          </Route>

          <Route
          // component={token ? AgregarMedico : LoginForm }
            component={AgregarMedico}
            path="/nuevomedico">
          </Route>

          <Route
            component={Citas}
            path="/citas">
          </Route>

          <Route
            // component={token ? EliminarPaciente : LoginForm }
            component={EliminarCita}
            path="/eliminarcita/:id">
          </Route>
          
          <Route
            component={LoginForm}
            path="/login">
          </Route>

          <Route
            component={Logout}
            path="/logout">
          </Route>

        </>
  );
};

export default App;