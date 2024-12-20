import React, { useContext, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import "atropos/css"
import Atropos from "atropos/react";

export const Card = ({ Foto, Nombre, Comentario, Favorito, OnError, Type }) => {

    return (

        <div className="card h-100" key={Type}>
            <Atropos          // Envuelve la tarjeta con Atropos
                activeOffset={40} // Configura el efecto 3D (profundidad)
                shadow={true}    // Activa la sombra interactiva
                highlight={true} // Activa la iluminación al mover el mouse
            >
                <img src={Foto}
                    className="card-img-top img-fluid fotocard"
                    alt="{Nombre}"
                    onError={OnError}
                />
            </Atropos>
            <div className="card-body ">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text">{Comentario}</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-warning m-1" onClick={Favorito}><MdOutlineFavoriteBorder /></button>
                </div>
            </div>
        </div>

    )
}