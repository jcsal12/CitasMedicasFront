import React from "react";
import { Link } from "wouter";

const NuevaCita = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <Link href="/nuevacita"><button className=" bg-dark text-light">Nueva Cita</button></Link>
        </div>
    )
}
export default NuevaCita