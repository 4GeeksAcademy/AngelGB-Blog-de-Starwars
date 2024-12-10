import React from "react";
import "../../styles/bienvenida.css";
import { Link } from "react-router-dom";

export const Bienvenida = () => {

    return (
        <div className="container p-5">
            <video src="https://carontestudio.com/img/f4.mp4" autoPlay={true} muted={true} loop={true}></video>
            <h1 className="d-flex justify-content-center">
            Bienvenido a el lado oscuro de Star Wars
            </h1>
            <Link className="d-flex justify-content-center p-5" to={"/home"}>
                <button>Ir al archivo</button>
            </Link>
        </div>

    )
}