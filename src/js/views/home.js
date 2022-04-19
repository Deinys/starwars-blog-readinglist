import React,{useContext} from "react";
import Header from "../component/Header.jsx";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const {store} = useContext(Context)
	return(
	<>
	
	<div className="container list-Cards">
		<Header title={"Characters"}/>
		<div className="list-items">
			{store.people.map((person)=>(
				<Card key={person.uid} item={person} nature="people"/>
			))}
		</div>
	</div>
	 
	<div className="container list-Cards">
	<Header title={"Planets"}/>
		<div className="list-items">
			{store.planets.map((planet)=>(
				<Card key={planet.uid} item={planet} nature="planets"/>
			))}
			
		</div>
	</div>
	
	<div className="container list-Cards">
	<Header title={"Vehicles"}/>
		<div className="list-items">
			{store.vehicles.map((vehicle)=>(
				<Card key={vehicle.uid} item={vehicle} nature="vehicles"/>
			))}
			
		</div>
	</div>
	</>

);
}