import React, { useContext } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const Card = ({ Foto, Nombre, Comentario, Favorito, Later }) => {

    return (
        <div className="card h-100">
            <img src={Foto}
                className="card-img-top img-fluid"
                alt="{Nombre}"
            />
            <div className="card-body ">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text">{Comentario}</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary m-1" onClick={Later} >ir a</button>
                    <button
                        type="button"
                        className="btn btn-primary m-1" onClick={Favorito}><MdOutlineFavoriteBorder /></button>
                </div>
            </div>
        </div>
    )
}