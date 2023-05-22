import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import borrar from "../utils/img/borrar.png";
import editar from "../utils/img/lapiz.png";
import { Link } from "wouter";
import { fetchCita } from "../redux/actions/citasactions";
import Card from 'react-bootstrap/Card';

const CitaList = () => {

    const dispatch = useDispatch();
    const citas = useSelector((state) => state.citas);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchCita());
  }, [dispatch]);

  if (loading) {
    return <div>Cargando citas...</div>;
  }

  if (error) {
    return <div>Error al cargar los citas: {error}</div>;
  }
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                {citas.citas.map((cita) => (
                    <div key={cita.id} >
                      <Card className="mb-4">
                        <Card.Header as="h5">Nº: <i>{cita.id}</i> - {cita.attribute11}</Card.Header>
                        <Card.Body>
                            <Card.Text><b>Paciente asociado: </b>{cita.paciente.apellidos}, {cita.paciente.nombre} - {cita.paciente.id} </Card.Text>
                            <Card.Text><b>Medico asociado: </b>{cita.medico.apellidos}, {cita.medico.nombre}  - {cita.medico.id} </Card.Text>
                            <Card.Text><b>Fecha: </b>{cita.fechaHora}</Card.Text>
                            <Card.Text><i>{cita.motivoCita}</i></Card.Text>
                            <div>
                            <Link to={`/eliminarcita/${cita.id}`}><img className="mt-1 mb-2" width="2%" src={borrar} alt="borrar"></img></Link>
                            <Link to={`/actualizarcita/${cita.id}`}><img className="mt-1 mb-2" width="2%" src={editar} alt="editar"></img></Link>
                          </div> 
                        </Card.Body>
                      </Card>  
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CitaList

