const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			endPoints: ["people","vehicles","planets"],
			people: JSON.parse(localStorage.getItem("people"))||[],
			vehicles:JSON.parse(localStorage.getItem("vehicles"))||[],
			planets:JSON.parse(localStorage.getItem("planets"))||[], 
			favorites: JSON.parse(localStorage.getItem("favorites"))||[]
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

		addFavorites: (id)=>{
			let store = getStore();
			let exist = store.favorites.find((item)=>{
				return(
					item._id == id
				)
			})
			if(!exist){
				for(let endPoint of store.endPoints){
					let favorite;
					favorite = store[endPoint].find((item)=>{
						return(
							item._id == id
						)
					})
					if(favorite){
						setStore({
							...store,
							favorites: [...store.favorites, favorite]
						})
						localStorage.setItem("favorites", JSON.stringify(store.favorites))
						return;
					}
				}
			}else{
				let newFavorite = store.favorites.filter((item)=>{
					return(
						item._id != id
					)
				})
				setStore({
					...store,
					favorites: newFavorite
				})
				localStorage.setItem("favorites", JSON.stringify(store.favorites))
			}
		},
		
		deleteFavorites: (id)=>{
			let store = getStore()
			let deleteFavorite = store.favorites.filter((item)=>{
					return(
						item._id != id
					)
				})
				setStore({
					...store,
					favorites: deleteFavorite
				})
				localStorage.setItem("favorites", JSON.stringify(store.favorites))
			}

		}
	};
};

export default getState;
