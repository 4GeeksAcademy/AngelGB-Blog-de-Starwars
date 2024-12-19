import React, { useContext, useEffect, useState } from "react";
import "../../styles/bienvenida.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Bienvenida = () => {
    const { store, actions } = useContext(Context)
    const [iniciar, setIniciar] = useState("false")
    const navigate = useNavigate()

    const clickBoton = () => {
        setIniciar("true");
        setTimeout(() => {
            navigate("/home");
        }, 10000);
        // console.log(iniciar);


    }

    useEffect(() => {
    	actions.llamarTodo()
    }, [])

    return (
        <div className="container p-5">
            <video src="https://www.shutterstock.com/shutterstock/videos/1081535063/preview/stock-footage-abstract-hyper-jump-into-another-galaxy-creative-cosmic-background-speed-of-light-neon-glowing.webm"
                autoPlay={false} muted={true} loop={true} ref={(video) => {
                    if (video && iniciar === "true") video.play()
                }}></video>
            <h1 className="d-flex justify-content-center text-center titulo">
            <img className="img-fluid" src="https://fontmeme.com/permalink/241219/08e547075c7549df85b9f8cba453fb63.png" alt="fuente-de-star-wars" border="0"/>
            </h1>
            <div className="d-flex justify-content-center p-5">
                <button className="btn btn-warning" onClick={() => { clickBoton() }}>Enciclopedia</button>

            </div>

        </div>

    )
}
