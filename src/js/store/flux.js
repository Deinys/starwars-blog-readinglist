const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			endPoints: ["people","vehicles","planets"],
			people: JSON.parse(localStorage.getItem("people"))||[],
			vehicles:JSON.parse(localStorage.getItem("vehicles"))||[],
			planets:JSON.parse(localStorage.getItem("planets"))||[], 
			
		},
		actions: {
			getContent: async ()=>{ 
				let store = getStore()
				if (!store.people.length){
					for (let endPoint of store.endPoints){
					try{
						let response = await fetch(`${store.urlBase}/${endPoint}`)
						if (response.ok){
							let data = await response.json()
							data.results.map(async (item)=>{
								let res = await fetch(`${store.urlBase}/${endPoint}/${item.uid}`)
								let result = await res.json()
								setStore({
									...store,
									[endPoint]:[...store[endPoint],result.result]
								})
								localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))
							})
						
						}
					}catch(error){
						console.log(error)

					} 
				}}
				
				
				

		},

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
			}
		}
	};
};

export default getState;
