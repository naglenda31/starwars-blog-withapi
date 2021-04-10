const getState = ({ getStore, getActions, setStore }) => {
	const base_url = process.env.BASE_URL;
	return {
		store: {
			favorites: [],
			people: [],
			planets: [],
			vehicles: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			initialize: () => {
				fetch(`${base_url}/people`).then(res => res.json().then(data => setStore({ people: data.results })));
				fetch(`${base_url}/planets`).then(res => res.json().then(data => setStore({ planets: data.results })));
				fetch(`${base_url}/vehicles`).then(res =>
					res.json().then(data => setStore({ vehicles: data.results }))
				);
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorite: data => {
				const store = getStore();
				store.favorites.push(data);
				setStore(store);
			},
			removeFavorite: index => {
				const store = getStore();
				let favorites = store.favorites.filter((item, i) => i !== index);
				setStore({ favorites: favorites });
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
			}
		}
	};
};

export default getState;
