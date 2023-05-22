import React from "react";
import { Link } from "wouter";

const NuevoPaciente = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <Link href="/nuevopaciente"><button className=" bg-dark text-light">Nuevo Paciente</button></Link>
        </div>
    )
}
export default NuevoPaciente