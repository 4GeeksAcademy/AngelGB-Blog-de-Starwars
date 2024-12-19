const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
	
			films: [],
			filmsId: [],
			people: [],
			peopleId: [],
			planets: [],
			planetsId: [],
			species: [],
			speciesId: [],
			starships: [],
			starshipsId: [],
			vehicles: [],
			vehiclesId: [],
			favorites: {
				characters: [],
                species: [],
                planets: [],
				starships: [],
				vehicles: [],
				films: [],
			},
		},
		actions: {
			llamarPeople: () => {
				const peopleLocalStorage = localStorage.getItem("people");
			
				if (peopleLocalStorage) {
					setStore({ people: JSON.parse(peopleLocalStorage) });
					console.log("people desde localStorage");
				} else {
					fetch("https://www.swapi.tech/api/people?page=1&limit=150")
						.then(res => res.json())
						.then(response => {
							localStorage.setItem("people", JSON.stringify(response.results));
							setStore({ people: response.results });
							console.log("people desde API y almacenados en localStorage");
						})
						.catch(err => console.error(err));
				}
			},
			llamarPeopleId: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "peopleId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarPlanets: () => {
				const planetsLocalStorage = localStorage.getItem("planets");
			
				if (planetsLocalStorage) {
					setStore({ planets: JSON.parse(planetsLocalStorage) });
					console.log("planets desde localStorage");
				} else {
					fetch("https://www.swapi.tech/api/planets?page=1&limit=70")
						.then(res => res.json())
						.then(response => {
							localStorage.setItem("planets", JSON.stringify(response.results));
							setStore({ planets: response.results });
							console.log("planets desde API y almacenados en localStorage");
						})
						.catch(err => console.error(err));
				}
			},
			llamarPlanetsId: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "planetsId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarFilms: () => {
				const filmsLocalStorage = localStorage.getItem("films");
			
				if (filmsLocalStorage) {
					setStore({ films: JSON.parse(filmsLocalStorage) });
					console.log("films desde localStorage");
				} else {
					fetch("https://www.swapi.tech/api/films")
						.then(res => res.json())
						.then(response => {
							localStorage.setItem("films", JSON.stringify(response.result));
							setStore({ films: response.result });
							console.log("films desde API y almacenados en localStorage");
						})
						.catch(err => console.error(err));
				}
			},
			llamarFilmsId: (id) => {
				fetch(`https://www.swapi.tech/api/films/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "filmsId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarSpecies: () => {
				const speciesLocalStorage = localStorage.getItem("species");
			
				if (speciesLocalStorage) {
					setStore({ planets: JSON.parse(speciesLocalStorage) });
					console.log("species desde localStorage");
				} else {
					fetch("https://www.swapi.tech/api/species?page=1&limit=50")
						.then(res => res.json())
						.then(response => {
							localStorage.setItem("species", JSON.stringify(response.results));
							setStore({ species: response.results });
							console.log("species desde API y almacenados en localStorage");
						})
						.catch(err => console.error(err));
				}
			},
			llamarSpeciesId: (id) => {
				fetch(`https://www.swapi.tech/api/species/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "speciesId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarstarships: () => {
				const starshipsLocalStorage = localStorage.getItem("starships");
			
				if (starshipsLocalStorage) {
					setStore({ starships: JSON.parse(starshipsLocalStorage) });
					console.log("starships desde localStorage");
				} else {
					fetch("https://www.swapi.tech/api/starships?page=1&limit=50")
						.then(res => res.json())
						.then(response => {
							localStorage.setItem("starships", JSON.stringify(response.results));
							setStore({ starships: response.results });
							console.log("starships desde API y almacenados en localStorage");
						})
						.catch(err => console.error(err));
				}
			},
			llamarstarshipsId: (id) => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "starshipsId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarvehicles: () => {
				const vehiclesLocalStorage = localStorage.getItem("vehicles");
			
				if (vehiclesLocalStorage) {
					setStore({ vehicles: JSON.parse(vehiclesLocalStorage) });
					console.log("vehicles desde localStorage");
				} else {
					fetch("https://www.swapi.tech/api/vehicles?page=1&limit=40")
						.then(res => res.json())
						.then(response => {
							localStorage.setItem("vehicles", JSON.stringify(response.results));
							setStore({ vehicles: response.results });
							console.log("vehicles desde API y almacenados en localStorage");
						})
						.catch(err => console.error(err));
				}
			},
			llamarvehiclesId: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "vehiclesId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarTodo: () => {
				getActions().llamarPeople()
				getActions().llamarPlanets()
				getActions().llamarFilms()
				getActions().llamarSpecies()
				getActions().llamarstarships()
				getActions().llamarvehicles()
			},
			addToFavorites: (item, type) => {
                const store = getStore();
                let updatedFavorites = { ...store.favorites };
                if (!updatedFavorites[type].some(fav => fav.uid === item.uid)) {
                    updatedFavorites[type] = [...updatedFavorites[type], item];
                    setStore({ favorites: updatedFavorites });
                }
				localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
				console.log(store.favorites.films);
				
            },
            removeFromFavorites: (item, type) => {
                const store = getStore();
                let updatedFavorites = { ...store.favorites };
                updatedFavorites[type] = updatedFavorites[type].filter(fav => fav.uid !== item.uid);

                setStore({ favorites: updatedFavorites });
				localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            },
			favStore: () => {
				const storedFavorites = localStorage.getItem("favorites");
				if (storedFavorites) {
					setStore({ favorites: JSON.parse(storedFavorites) });
				}
			}
		}
	};
};

export default getState;
