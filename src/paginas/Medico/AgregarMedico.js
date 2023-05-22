import Navbar from "../../components/Navbar";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import volver from '../../utils/img/volver.png';
import { Link } from "wouter";
import { addMedico } from "../../redux/actions/medicosactions";

const AgregarMedico = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [numColegiado, setNumColegiado] = useState('');
    const dispatch = useDispatch();

    const handleAgregarMedico = () => {
      if (validarCampos()) {
        const medico = { nombre, apellidos, usuario, clave, numColegiado}; 
        dispatch(addMedico(medico));
        setNombre('');
        setApellidos('');
        setUsuario('');
        setClave('');
        setNumColegiado('');
        alert('Médico creado con éxito');
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
        numColegiado !== '' 
      );
    };
  
    return (
        <div className="text-center">
        <Navbar></Navbar>
        <Link href="/medicos"><button className="btn mt-2 mb-2 border">
            <img width="5%" src={volver} alt="volver"></img>  Volver a medicos
          </button></Link>
        <h1 className="mt-4">Agregar Médico</h1>
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
            type="text"
            value={numColegiado}
            onChange={(e) => setNumColegiado(e.target.value)}
            placeholder="Número de colegiado*"
            required
          />
          <button className="btn btn-primary mb-2" onClick={handleAgregarMedico}>
            Agregar
          </button>
        </form>
      </div>
    );
  };
  
  export default AgregarMedico;