import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.llamarTodo()
	}, [])

	return (
		<div className="text-center mt-5 p-4">
			<div className="row">
				<ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
					<li className="nav-item" role="presentation">
						<button className=" btn encabezado" id="pills-personajes-tab" data-bs-toggle="pill" data-bs-target="#pills-personajes" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Personajes</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="btn encabezado" id="pills-especies-tab" data-bs-toggle="pill" data-bs-target="#pills-especies" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Especies</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="btn encabezado" id="pills-planetas-tab" data-bs-toggle="pill" data-bs-target="#pills-planetas" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Planetas</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="btn encabezado" id="pills-naves-tab" data-bs-toggle="pill" data-bs-target="#pills-naves" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Naves</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="btn encabezado" id="pills-vehiculos-tab" data-bs-toggle="pill" data-bs-target="#pills-vehiculos" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Vehiculos</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="btn encabezado" id="pills-peliculas-tab" data-bs-toggle="pill" data-bs-target="#pills-peliculas" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Peliculas</button>
					</li>
				</ul>
				<div className="tab-content container" id="pills-tabContent">
					<div className="tab-pane fade" id="pills-personajes" role="tabpanel" aria-labelledby="pills-personajes-tab" tabIndex={"0"}>
						<div className="row">
							{store.people?.map((people) => (
								<div className="col-12 col-md-2 mb-4 p-3 estilo" key={people.uid}>
									<Link className="estilo" to={`/single/characters/${people.uid}`} >
										<Card
											Foto={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
											Nombre={people.name}
											Favorito={() => {actions.addToFavorites()}}											
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-especies" role="tabpanel" aria-labelledby="pills-especies-tab" tabIndex={"0"}>
						<div className="row">
							{store.species?.map((species) => (
								<div className="col-12 col-md-2 mb-4 p-3" key={species.uid}>
									<Link className="estilo" to={`/single/species/${species.uid}`} >
										<Card
											Foto={`https://starwars-visualguide.com/assets/img/species/${species.uid}.jpg`}
											Nombre={species.name}
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-planetas" role="tabpanel" aria-labelledby="pills-planetas-tab" tabIndex={"0"}>
						<div className="row">
							{store.planets?.map((planets) => (
								<div className="col-12 col-md-2 mb-4 p-3" key={planets.uid}>
									<Link className="estilo" to={`/single/planets/${planets.uid}`} >
										<Card
											Foto={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
											Nombre={planets.name}
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-naves" role="tabpanel" aria-labelledby="pills-naves-tab" tabIndex={"0"}>
						<div className="row">
							{store.starships?.map((starships) => (
								<div className="col-12 col-md-2 mb-4 p-3" key={starships.uid}>
									<Link className="estilo" to={`/single/starships/${starships.uid}`} >
										<Card
											Foto={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
											Nombre={starships.name}
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-vehiculos" role="tabpanel" aria-labelledby="pills-vehiculos-tab" tabIndex={"0"}>
						<div className="row">
							{store.vehicles?.map((vehicles) => (
								<div className="col-12 col-md-2 mb-4 p-3" key={vehicles.uid}>
									<Link className="estilo" to={`/single/vehicles/${vehicles.uid}`} >
										<Card
											Foto={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
											Nombre={vehicles.name}
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="tab-pane fade" id="pills-peliculas" role="tabpanel" aria-labelledby="pills-peliculas-tab" tabIndex={"0"}>
						<div className="row">
							{store.films?.map((films) => (
								<div className="col-12 col-md-2 mb-4 p-3" key={films.uid}>
									<Link className="estilo" to={`/single/films/${films.uid}`} >
										<Card
											Foto={`https://starwars-visualguide.com/assets/img/films/${films.uid}.jpg`}
											Nombre={films.properties.title}
											Comentario={films.properties.release_date}
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div >
	)

};
