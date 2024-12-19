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
				fetch("https://www.swapi.tech/api/people?page=1&limit=150")
					.then(res => res.json())
					.then(response => setStore({ "people": response.results }))
					.catch(err => console.error(err))
			},
			llamarPeopleId: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "peopleId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarPlanets: () => {
				fetch("https://www.swapi.tech/api/planets?page=1&limit=70")
					.then(res => res.json())
					.then(response => setStore({ "planets": response.results }))
					.catch(err => console.error(err))
			},
			llamarPlanetsId: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "planetsId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarFilms: () => {
				fetch("https://www.swapi.tech/api/films")
					.then(res => res.json())
					.then(response => setStore({ "films": response.result }))
					.catch(err => console.error(err))
			},
			llamarFilmsId: (id) => {
				fetch(`https://www.swapi.tech/api/films/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "filmsId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarSpecies: () => {
				fetch("https://www.swapi.tech/api/species?page=1&limit=50")
					.then(res => res.json())
					.then(response => setStore({ "species": response.results }))
					.catch(err => console.error(err))
			},
			llamarSpeciesId: (id) => {
				fetch(`https://www.swapi.tech/api/species/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "speciesId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarstarships: () => {
				fetch("https://www.swapi.tech/api/starships?page=1&limit=50")
					.then(res => res.json())
					.then(response => setStore({ "starships": response.results }))
					.catch(err => console.error(err))
			},
			llamarstarshipsId: (id) => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(res => res.json())
					.then(response => setStore({ "starshipsId": response.result.properties }))
					.catch(err => console.error(err))
			},
			llamarvehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles?page=1&limit=40")
					.then(res => res.json())
					.then(response => setStore({ "vehicles": response.results }))
					.catch(err => console.error(err))
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
