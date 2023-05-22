import React from "react";
import { Link } from "wouter";

const NuevoMedico = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <Link href="/nuevomedico"><button className=" bg-dark text-light">Nuevo Medico</button></Link>
        </div>
    )
}
export default NuevoMedico