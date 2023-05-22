import Navbar from "../../components/Navbar";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPaciente } from '../../redux/actions/pacientesactions';
import volver from '../../utils/img/volver.png';
import { Link } from "wouter";

const AgregarPaciente = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [nss, setNss] = useState('');
    const [numTarjeta, setNumTarjeta] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const dispatch = useDispatch();
  
    const handleAgregarPaciente = () => {
      if (validarCampos()) {
        const paciente = { nombre, apellidos, usuario, clave, nss, numTarjeta, telefono, direccion }; // Crea el objeto del paciente con los datos obtenidos del formulario
        dispatch(addPaciente(paciente));
        setNombre('');
        setApellidos('');
        setUsuario('');
        setClave('');
        setNss('');
        setNumTarjeta('');
        setTelefono('');
        setDireccion('');
        alert('Paciente creado con éxito');
      } else {
        alert('Por favor, complete todos los campos');
      }
      
    };

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
        <h1 className="mt-4">Agregar Paciente</h1>
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
          <button className="btn btn-primary mb-2" onClick={handleAgregarPaciente}>
            Agregar
          </button>
        </form>
      </div>
    );
  };
  
  export default AgregarPaciente;