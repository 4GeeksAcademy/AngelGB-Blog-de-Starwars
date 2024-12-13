import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardEspecificacion } from "../component/CardEspecificacion.jsx";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { focus, id } = useParams();
	const [ llamada , setLlamada ] = useState("")

	useEffect(() => {
		if (focus == "characters") {
			actions.llamarPeopleId(id)
			setLlamada("peopleId")
		}
		else if (focus == "species") {
			actions.llamarSpeciesId(id)
			setLlamada("speciesId")
		}
		else if (focus == "planets") {
			actions.llamarPlanetsId(id)
			setLlamada("planetsId")
		}
		else if (focus == "starships") {
			actions.llamarstarshipsId(id)
			setLlamada("starshipsId")
		}
		else if (focus == "vehicles") {
			actions.llamarvehiclesId(id)
			setLlamada("vehiclesId")
		}
		else if (focus == "films") {
			actions.llamarFilmsId(id)
			setLlamada("filmsId")
		}
	}, [focus, id])

	if (!store[llamada]) {
        return <div>Loading...</div>;
    }

	return (
		<div className="container col-8">
            {focus === "characters" && (
                <CardEspecificacion
                    Foto={`https://starwars-visualguide.com/assets/img/${focus}/${id}.jpg`}
                    Nombre={store[llamada]?.name}
                    spec={"Gender: " + store[llamada]?.gender}
                    spec2={"Hair: " + store[llamada]?.hair_color}
                    spec3={"Eye Color: " + store[llamada]?.eye_color}
                    spec4={"Height: " + store[llamada]?.height}
                    spec5={"Mass: " + store[llamada]?.mass}
                    spec6={"Skin Color: " + store[llamada]?.skin_color}
                />
            )}

            {focus === "species" && (
                <CardEspecificacion
                    Foto={`https://starwars-visualguide.com/assets/img/${focus}/${id}.jpg`}
                    Nombre={store[llamada]?.name}
                    spec={"Classification: " + store[llamada]?.classification}
                    spec2={"Designation: " + store[llamada]?.designation}
                    spec3={"Average Height: " + store[llamada]?.average_height}
                    spec4={"Average Lifespan: " + store[llamada]?.average_lifespan}
                    spec5={"Hair Colors: " + store[llamada]?.hair_colors}
                    spec6={"Skin Colors: " + store[llamada]?.skin_colors}
                />
            )}

            {focus === "planets" && (
                <CardEspecificacion
                    Foto={`https://starwars-visualguide.com/assets/img/${focus}/${id}.jpg`}
                    Nombre={store[llamada]?.name}
                    spec={"Climate: " + store[llamada]?.climate}
                    spec2={"Diameter: " + store[llamada]?.diameter}
                    spec3={"Gravity: " + store[llamada]?.gravity}
                    spec4={"Population: " + store[llamada]?.population}
                    spec5={"Terrain: " + store[llamada]?.terrain}
                    spec6={"Orbital Period: " + store[llamada]?.orbital_period}
                />
            )}

            {focus === "starships" && (
                <CardEspecificacion
                    Foto={`https://starwars-visualguide.com/assets/img/${focus}/${id}.jpg`}
                    Nombre={store[llamada]?.name}
                    spec={"Model: " + store[llamada]?.model}
                    spec2={"Manufacturer: " + store[llamada]?.manufacturer}
                    spec3={"Cost: " + store[llamada]?.cost_in_credits}
                    spec4={"Length: " + store[llamada]?.length}
                    spec5={"Crew: " + store[llamada]?.crew}
                    spec6={"Passengers: " + store[llamada]?.passengers}
                />
            )}

            {focus === "vehicles" && (
                <CardEspecificacion
                    Foto={`https://starwars-visualguide.com/assets/img/${focus}/${id}.jpg`}
                    Nombre={store[llamada]?.name}
                    spec={"Model: " + store[llamada]?.model}
                    spec2={"Manufacturer: " + store[llamada]?.manufacturer}
                    spec3={"Cost: " + store[llamada]?.cost_in_credits}
                    spec4={"Length: " + store[llamada]?.length}
                    spec5={"Crew: " + store[llamada]?.crew}
                    spec6={"Passengers: " + store[llamada]?.passengers}
                />
            )}

            {focus === "films" && (
                <CardEspecificacion
                    Foto={`https://starwars-visualguide.com/assets/img/${focus}/${id}.jpg`}
                    Nombre={store[llamada]?.title}
                    spec={"Director: " + store[llamada]?.director}
                    spec2={"Producer: " + store[llamada]?.producer}
                    spec3={"Release Date: " + store[llamada]?.release_date}
                    spec4={"Episode: " + store[llamada]?.episode_id}
                    spec5={"Opening Crawl: " + store[llamada]?.opening_crawl}
                />
            )}
        </div>
	);
};

