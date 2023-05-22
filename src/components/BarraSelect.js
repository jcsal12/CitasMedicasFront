import React from "react";
import { Link } from "wouter";

const BarraSelect = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <Link to="/pacientes"><button className="btn btn-primary mx-2">Pacientes</button> </Link>
            <Link to="/medicos"><button className="btn btn-primary mx-2">Medicos</button> </Link>
            <Link to="/citas"><button className="btn btn-primary mx-2">Citas</button></Link>
            <button className="btn btn-primary mx-2">Diagnosticos</button>
        </div>
    )
}
export default BarraSelect