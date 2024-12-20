import Atropos from "atropos/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaUndo } from "react-icons/fa";

export const CardEspecificacion = ({ Favorito, Foto, Nombre, spec, spec2, spec3, spec4, spec5, spec6 }) => {
    return (
        <div>
            <div  className="card mb-3">
                <div className="row g-0">

                    <div className="col-md-4">
                        <Atropos          // Envuelve la tarjeta con Atropos
                            activeOffset={40} // Configura el efecto 3D (profundidad)
                            shadow={true}    // Activa la sombra interactiva
                            highlight={true} // Activa la iluminación al mover el mouse
                        >
                            <img src={Foto} className="img-fluid rounded-start" alt="{Nombre}" />
                        </Atropos>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{Nombre}</h5>
                            <p className="card-text"><small className="text-body-secondary">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, corrupti. A odit minima deleniti porro, quia ad temporibus vero rem officia officiis laborum quis veniam inventore aliquid. Placeat, incidunt. Dolorem animi reiciendis, deserunt eos autem esse magni nemo sapiente odio!</small></p>
                            <p className="card-text">{spec}</p>
                            <p className="card-text">{spec2}</p>
                            <p className="card-text">{spec3}</p>
                            <p className="card-text">{spec4}</p>
                            <p className="card-text">{spec5}</p>
                            <p className="card-text">{spec6}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <Link to="/home">
                    <button className="btn btn-warning"><FaUndo /></button>
                </Link>

            </div>
        </div>
    )
}