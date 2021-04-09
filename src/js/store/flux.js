const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://www.swapi.tech/api/";
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

			people: [
				{
					image:
						"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/luke-skywalker-young-old-1543250594.jpg",
					uid: "1",
					name: "Luke Skywalker",
					url: "https://www.swapi.tech/api/people/1"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "2",
					name: "C-3PO",
					url: "https://www.swapi.tech/api/people/2"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "3",
					name: "R2-D2",
					url: "https://www.swapi.tech/api/people/3"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "4",
					name: "Darth Vader",
					url: "https://www.swapi.tech/api/people/4"
				},
				{
					image:
						"https://gamespot1.cbsistatic.com/uploads/original/171/1712892/3322834-pjimage%20%281%29.jpg",
					uid: "5",
					name: "Leia Organa",
					url: "https://www.swapi.tech/api/people/5"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "6",
					name: "Owen Lars",
					url: "https://www.swapi.tech/api/people/6"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "7",
					name: "Beru Whitesun lars",
					url: "https://www.swapi.tech/api/people/7"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "8",
					name: "R5-D4",
					url: "https://www.swapi.tech/api/people/8"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "9",
					name: "Biggs Darklighter",
					url: "https://www.swapi.tech/api/people/9"
				},
				{
					image: "http://placehold.jp/400x200.png",
					uid: "10",
					name: "Obi-Wan Kenobi",
					url: "https://www.swapi.tech/api/people/10"
				}
			],
			planets: [
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "1",
					name: "Tatooine",
					url: "https://www.swapi.tech/api/planets/1"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "2",
					name: "Alderaan",
					url: "https://www.swapi.tech/api/planets/2"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "3",
					name: "Yavin IV",
					url: "https://www.swapi.tech/api/planets/3"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "4",
					name: "Hoth",
					url: "https://www.swapi.tech/api/planets/4"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "5",
					name: "Dagobah",
					url: "https://www.swapi.tech/api/planets/5"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "6",
					name: "Bespin",
					url: "https://www.swapi.tech/api/planets/6"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "7",
					name: "Endor",
					url: "https://www.swapi.tech/api/planets/7"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "8",
					name: "Naboo",
					url: "https://www.swapi.tech/api/planets/8"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "9",
					name: "Coruscant",
					url: "https://www.swapi.tech/api/planets/9"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/04/star-wars-mos-eisley.jpg?offset-y=0",
					uid: "10",
					name: "Kamino",
					url: "https://www.swapi.tech/api/planets/10"
				}
			],

			vehicles: [
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "4",
					name: "Sand Crawler",
					url: "https://www.swapi.tech/api/vehicles/4"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "7",
					name: "X-34 landspeeder",
					url: "https://www.swapi.tech/api/vehicles/7"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "6",
					name: "T-16 skyhopper",
					url: "https://www.swapi.tech/api/vehicles/6"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "8",
					name: "TIE/LN starfighter",
					url: "https://www.swapi.tech/api/vehicles/8"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "14",
					name: "Snowspeeder",
					url: "https://www.swapi.tech/api/vehicles/14"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "18",
					name: "AT-AT",
					url: "https://www.swapi.tech/api/vehicles/18"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "16",
					name: "TIE bomber",
					url: "https://www.swapi.tech/api/vehicles/16"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "19",
					name: "AT-ST",
					url: "https://www.swapi.tech/api/vehicles/19"
				},
				{
					uid: "20",
					name: "Storm IV Twin-Pod cloud car",
					url: "https://www.swapi.tech/api/vehicles/20"
				},
				{
					image: "https://i.pinimg.com/564x/d1/cc/42/d1cc42a5bada2890adc36f8c66d21c7c.jpg",
					uid: "24",
					name: "Sail barge",
					url: "https://www.swapi.tech/api/vehicles/24"
				}
			]
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch(`${base_url}/people`).then(res => res.json().then(data => setStore({ people: data.results })));
				fetch(`${base_url}/planets`).then(res => res.json().then(data => setStore({ planets: data.results })));
				fetch(`${base_url}/vehicles`).then(res =>
					res.json().then(data => setStore({ vehicles: data.results }))
				);
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
			}
		}
	};
};

export default getState;
