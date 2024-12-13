const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
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
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
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
			addToFavorites: (item) => {
				const store = getStore();
				const exists = store.favorites.find(fav => fav.id === item.id);
				if (!exists) {
				  setStore({ favorites: [...store.favorites, item] });
				}
				console.log(getStore().favorites);
				
			  },
			// addToReadLater: (item) => {
			// 	const store = getStore();
			// 	const exists = store.readLater.find(rl => rl.id === item.id);
			// 	if (!exists) {
			// 		setStore({ readLater: [...store.readLater, item] });
			// 	}
			// },
			

		}
	};
};

export default getState;
