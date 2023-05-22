import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePaciente } from "../../redux/actions/pacientesactions";
import { Link, Redirect } from "wouter";
import alert from "../../utils/img/alerta.png";


const EliminarPaciente = ( props ) => {
    const dispatch = useDispatch();
    const pacienteId = props.params.id;
    const [redirect, setRedirect] = useState(false);

    const handleEliminarPaciente = () => {
      dispatch(deletePaciente(pacienteId));
      setRedirect(true);
    };
  
    if (redirect) {
      return <Redirect to="/pacientes" />;
    }
  

    return (
        <div className="d-flex justify-content-center mt-4">
            <div>
                <h4>¿Estás seguro que deseas eliminar este paciente?</h4>
                <div className="d-flex justify-content-center mt-4">
                    <img width="70%" src={alert} alt="alerta"></img>
                </div>
                    <button onClick={handleEliminarPaciente} className="btn btn-primary mx-2 mt-4">Aceptar</button>
                    <Link href="/pacientes"><button className="btn btn-primary mx-2 mt-4">Cancelar</button></Link>
                
            </div>
        </div>
    )
}
export default EliminarPaciente