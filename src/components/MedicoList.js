import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import imagendoctor from "../utils/img/doctor.png";
import { fetchMedicos } from "../redux/actions/medicosactions";

const MedicoList = () => {

    const dispatch = useDispatch();
    const medicos = useSelector((state) => state.medicos);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchMedicos());
  }, [dispatch]);

  if (loading) {
    return <div>Cargando medicos...</div>;
  }

  if (error) {
    return <div>Error al cargar los medicos: {error}</div>;
  }
    

    return (
        <div className="container mt-4">
            <div className="row">
                {medicos.medicos.map((medico) => (
                    <div key={medico.id} className="col-md-3 mb-4">
                        <div className="card">
                            <img className="mt-2" width="80%" src={imagendoctor} alt="User Avatar" /> 
                            <div className="card-body">
                               <h5 className="card-title"> {medico.nombre} {medico.apellidos}</h5>
                               <i><p className="card-text"><b>User: </b>{medico.usuario}</p></i>
                               <i><p className="card-text"><b>Nº Colegiado: </b>{medico.numColegiado}</p></i>
                            </div>     
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MedicoList