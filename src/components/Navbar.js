import React from "react";
import { Link } from "wouter";

const Navbar = () => {
    //  const token = useSelector((state) => state.auth.token);
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand" href="/">REACT REDUX CITAS MEDICAS</a>
                <Link to="/login"><a href="/login" className="text-white ml-auto">Iniciar sesión </a>
                    
                </Link>
            </div>
        </nav>
    )
}
export default Navbar