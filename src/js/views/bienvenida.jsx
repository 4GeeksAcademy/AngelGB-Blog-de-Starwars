import React, { useContext, useEffect } from "react";
import "../../styles/bienvenida.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Bienvenida = () => {

    const { store , actions } = useContext(Context)

    // useEffect(() => {
	// 	actions.llamarTodo()
	// }, [])

    return (
        <div className="container p-5">
            <video src="https://www.shutterstock.com/shutterstock/videos/1094289009/preview/stock-footage--d-rendered-animated-loop-of-a-spaceship-background-in-space-station-going-dark-futuristic.webm" autoPlay={true} muted={true} loop={true}></video>
            <h1 className="d-flex justify-content-center text-center titulo">
            Bienvenido a el lado oscuro de Star Wars
            </h1>
            <Link className=" botonIntro d-flex justify-content-center p-5" to={"/home"}>
                <button className="btn btn-warning">Entrar al banco de datos</button>
            </Link>
        </div>

    )}
