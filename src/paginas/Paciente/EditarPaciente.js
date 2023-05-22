import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import volver from '../../utils/img/volver.png';
import { Link, Redirect } from "wouter";
import { updatePaciente } from "../../redux/actions/pacientesactions";
import { useSelector } from "react-redux";

const EditarPaciente = ( props ) => {
    const pacienteId = props.params.id;
    const pacientes = useSelector((state) => state.pacientes);
    const paciente = pacientes.pacientes.find((paciente) => paciente.id === pacienteId);
    const [redirect, setRedirect] = useState(false);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [nss, setNss] = useState('');
    const [numTarjeta, setNumTarjeta] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        if (paciente) {
          setNombre(paciente.nombre);
          setApellidos(paciente.apellidos);
          setUsuario(paciente.usuario);
          setClave(paciente.clave);
          setNss(paciente.nss);
          setNumTarjeta(paciente.numTarjeta);
          setTelefono(paciente.telefono);
          setDireccion(paciente.direccion);
        }
      }, [pacientes, pacienteId]);

    const handleActualizarPaciente = () => {
        if(validarCampos){
            const pacienteActualizado = { id: pacienteId, nombre, apellidos, usuario, clave, nss, numTarjeta, telefono, direccion }; // Crea un nuevo objeto paciente con los datos actualizados
            dispatch(updatePaciente(pacienteId, pacienteActualizado));
            alert("Paciente actualizado");
            setRedirect(true);
        }else{
            alert('Por favor, complete todos los campos');
        }
      };

      if (redirect) {
        return <Redirect to="/pacientes" />;
      }

    const validarCampos = () => {
      return (
        nombre !== '' &&
        apellidos !== '' &&
        usuario !== '' &&
        clave !== '' &&
        nss !== '' &&
        numTarjeta !== '' &&
        telefono !== '' &&
        direccion !== ''
      );
    };
  
    return (
        <div className="text-center">
        <Navbar></Navbar>
        <Link href="/pacientes"><button className="btn mt-2 mb-2 border">
            <img width="5%" src={volver} alt="volver"></img>  Volver a pacientes
          </button></Link>
        <h1 className="mt-4">Editar paciente</h1>
        <form className="form-inline">
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre*"
            required
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Apellidos*"
            required
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="User*"
            required
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Contraseña*"
            required
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="number"
            value={nss}
            onChange={(e) => setNss(Number(e.target.value))}
            placeholder="NSS*"
            required
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            value={numTarjeta}
            onChange={(e) => setNumTarjeta(e.target.value)}
            placeholder="Numero de tarjeta"
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Teléfono*"
            required
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Población*"
            required
          />
          <button className="btn btn-primary mb-2" onClick={handleActualizarPaciente}>
            Editar
          </button>
        </form>
      </div>
    );
  };
  
  export default EditarPaciente;