import React,{useContext,useState,useEffect} from "react"
import { useParams } from "react-router-dom"

import { Context } from "../store/appContext"




const Details = ()=>{
	const params = useParams()
	const {nature, id} = params
	const {store} = useContext(Context)
	const [info, setInfo] = useState({})
	

	const getDetail= ()=>{
		let detail = store[nature].find((item)=>{
			return item.uid == id
		}) 
		if(detail){
			setInfo(detail)
		}
	}

	console.log(info)
	useEffect (()=>{
		getDetail()
	},[])
3
    return(
        <>
       
			<div className="container">
				<div className="info d-flex">
					<div className="img">
						<img src="https://via.placeholder.com/500" />
					</div>
					<div className="text-center">
						<div><h1>Name:{info.properties?.name} </h1></div>
						<div className="description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales dolor et pharetra sollicitudin. Suspendisse id ultricies lorem. In ornare quam ut fermentum vulputate. Proin semper nunc lorem, id sodales tellus eleifend eget. Nulla quis massa viverra, bibendum ligula quis, congue dui. Proin blandit, orci non tristique fermentum, odio urna sodales lacus, sed euismod felis felis ac metus. Donec est velit, maximus dignissim tortor viverra, pharetra posuere nunc. Praesent dapibus mi id metus posuere ultricies.</p></div>
					</div>

				</div>

				<div className="mt-3 border-top border-danger">{nature == "people"?
				(<div className="container d-flex mt-3">
					<h3 className="text-danger mx-3">Name: {info.properties?.name}</h3>
					<h3 className="text-danger mx-3">Birth year: {info.properties?.birth_year}</h3>
					<h3 className="text-danger mx-3">Gender: {info.properties?.gender}</h3> 
					<h3 className="text-danger mx-3">Height: {info.properties?.height}</h3>
					<h3 className="text-danger mx-3">Skin Color: {info.properties?.skin_color}</h3>
					<h3 className="text-danger mx-3">Eye Color: {info.properties?.eye_color}</h3>

				</div>
				):
				nature == "planets"?
				(<div className="container d-flex mt-3">
					<h3 className="text-danger mx-3">Name: {info.properties?.name}</h3>
					<h3 className="text-danger mx-3">Climate: {info.properties?.climate}</h3>
					<h3 className="text-danger mx-3">Population: {info.properties?.population}</h3>
					<h3 className="text-danger mx-3">Orbital Period: {info.properties?.orbital_period}</h3>
					<h3 className="text-danger mx-3">Rotation period: {info.properties?.rotation_period}</h3>
					<h3 className="text-danger mx-3">Diameter: {info.properties?.diameter}</h3>
				</div>): 
				nature == "vehicles"?
				(<div className="container d-flex mt-3">
					<h3 className="text-danger mx-3">Name: {info.properties?.name}</h3>
					<h3 className="text-danger mx-3">Model: {info.properties?.model}</h3>
					<h3 className="text-danger mx-3">Class: {info.properties?.vehicle_class}</h3>
					<h3 className="text-danger mx-3">Manufacturer: {info.properties?.manufacturer}</h3>
					<h3 className="text-danger mx-3">Passengers: {info.properties?.passengers}</h3>
					<h3 className="text-danger mx-3">Crew: {info.properties?.crew}</h3>
				</div>): 
				null }</div>
			</div>
        </>
    )
}
export default Details