import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCita } from "../../redux/actions/citasactions";
import { Link, Redirect } from "wouter";
import alert from "../../utils/img/alerta.png";


const EliminarCita = ( props ) => {
    const dispatch = useDispatch();
    const citaId = props.params.id;
    const [redirect, setRedirect] = useState(false);

    const handleEliminarCita = () => {
      dispatch(deleteCita(citaId));
      setRedirect(true);
    };
  
    if (redirect) {
      return <Redirect to="/citas" />;
    }
  

    return (
        <div className="d-flex justify-content-center mt-4">
            <div>
                <h4>¿Estás seguro que deseas eliminar esta cita? - {citaId}</h4>
                <div className="d-flex justify-content-center mt-4">
                    <img width="70%" src={alert} alt="alerta"></img>
                </div>
                    <button onClick={handleEliminarCita} className="btn btn-primary mx-2 mt-4">Aceptar</button>
                    <Link href="/citas"><button className="btn btn-primary mx-2 mt-4">Cancelar</button></Link>
                
            </div>
        </div>
    )
}
export default EliminarCita