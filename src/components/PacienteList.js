import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchPacientes } from "../redux/actions/pacientesactions";
import imagenpaciente from "../utils/img/paciente.png";
import borrar from "../utils/img/borrar.png";
import editar from "../utils/img/lapiz.png";
import { Link } from "wouter";

const PacienteList = () => {

    const dispatch = useDispatch();
  const pacientes = useSelector((state) => state.pacientes);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPacientes());
  }, [dispatch]);

  if (loading) {
    return <div>Cargando pacientes...</div>;
  }

  if (error) {
    return <div>Error al cargar los pacientes: {error}</div>;
  }
    return (
        <div className="container mt-4">
            <div className="row">
                {pacientes.pacientes.map((paciente) => (
                    <div key={paciente.id} className="col-md-3 mb-4">
                        <div className="card">
                            <img className="mt-2" width="80%" src={imagenpaciente} alt="User Avatar" /> 
                            <div className="card-body">
                               <h5 className="card-title"> {paciente.nombre} {paciente.apellidos}</h5>
                               <i><p className="card-text"><b>User: </b>{paciente.usuario}</p></i>
                               <i><p className="card-text"><b>NSS: </b>{paciente.nss}</p></i>
                               <i><p className="card-text"><b>Población: </b>{paciente.direccion}</p></i>
                            </div>    
                            <div>
                            <Link to={`/eliminarpaciente/${paciente.id}`}><img className="mt-1 mb-2" width="10%" src={borrar} alt="borrar"></img></Link>
                            <Link to={`/actualizarpaciente/${paciente.id}`}><img className="mt-1 mb-2" width="10%" src={editar} alt="editar"></img></Link>
                          </div> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PacienteList

