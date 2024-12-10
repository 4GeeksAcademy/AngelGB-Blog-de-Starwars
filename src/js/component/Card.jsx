import React from "react";

export const Card = ({ Foto, Nombre }) => {
    return (
            <div className="card">
                <img src={Foto} className="card-img-top img-fluid" alt="{Nombre}" />
                <div className="card-body ">
                    <h5 className="card-title">{Nombre}</h5>
                    <p className="card-text">Comentarios variados</p>
                </div>
            </div>
    )
}