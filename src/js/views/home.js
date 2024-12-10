import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.llamarTodo()
	}, [])
	console.log(store.films);

	return (
		<div className="text-center mt-5 p-4">
			<div className="row">
				<ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="pills-personajes-tab" data-bs-toggle="pill" data-bs-target="#pills-personajes" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Personajes</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="pills-especies-tab" data-bs-toggle="pill" data-bs-target="#pills-especies" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Especies</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="pills-planetas-tab" data-bs-toggle="pill" data-bs-target="#pills-planetas" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Planetas</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="pills-naves-tab" data-bs-toggle="pill" data-bs-target="#pills-naves" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Naves</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="pills-vehiculos-tab" data-bs-toggle="pill" data-bs-target="#pills-vehiculos" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Vehiculos</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="pills-peliculas-tab" data-bs-toggle="pill" data-bs-target="#pills-peliculas" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Peliculas</button>
					</li>
				</ul>
				<div className="tab-content container" id="pills-tabContent">
					<div className="tab-pane fade" id="pills-personajes" role="tabpanel" aria-labelledby="pills-personajes-tab" tabIndex={"0"}>
						<div className="row">
							{store.people?.map((person) => (
								<div className="col-12 col-md-4 mb-4 p-3" key={person.uid}>
									<Card
										Foto={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
										Nombre={person.name}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-especies" role="tabpanel" aria-labelledby="pills-especies-tab" tabIndex={"0"}>
						<div className="row">
							{store.species?.map((species) => (
								<div className="col-12 col-md-4 mb-4 p-3" key={species.uid}>
									<Card
										Foto={`https://starwars-visualguide.com/assets/img/species/${species.uid}.jpg`}
										Nombre={species.name}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-planetas" role="tabpanel" aria-labelledby="pills-planetas-tab" tabIndex={"0"}>
						<div className="row">
							{store.planets?.map((planets) => (
								<div className="col-12 col-md-4 mb-4 p-3" key={planets.uid}>
									<Card
										Foto={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
										Nombre={planets.name}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-naves" role="tabpanel" aria-labelledby="pills-naves-tab" tabIndex={"0"}>
						<div className="row">
							{store.starships?.map((starships) => (
								<div className="col-12 col-md-4 mb-4 p-3" key={starships.uid}>
									<Card
										Foto={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
										Nombre={starships.name}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-vehiculos" role="tabpanel" aria-labelledby="pills-vehiculos-tab" tabIndex={"0"}>
						<div className="row">
							{store.vehicles?.map((vehicles) => (
								<div className="col-12 col-md-4 mb-4 p-3" key={vehicles.uid}>
									<Card
										Foto={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
										Nombre={vehicles.name}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-peliculas" role="tabpanel" aria-labelledby="pills-peliculas-tab" tabIndex={"0"}>
						<div className="row">
							{store.films?.map((films) => (
								<div className="col-12 col-md-4 mb-4 p-3" key={films.uid}>
									<Card
										Foto={`https://starwars-visualguide.com/assets/img/films/${films.uid}.jpg`}
										Nombre={films.properties.title}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)

};
