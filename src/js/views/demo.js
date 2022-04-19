import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>Hola</h1>
			<div className="container">
				<div className="info d-flex">
					<div className="img">
						<img src="https://via.placeholder.com/500" />
					</div>
					<div className="text-center">
						<div><h1>Name</h1></div>
						<div className="description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales dolor et pharetra sollicitudin. Suspendisse id ultricies lorem. In ornare quam ut fermentum vulputate. Proin semper nunc lorem, id sodales tellus eleifend eget. Nulla quis massa viverra, bibendum ligula quis, congue dui. Proin blandit, orci non tristique fermentum, odio urna sodales lacus, sed euismod felis felis ac metus. Donec est velit, maximus dignissim tortor viverra, pharetra posuere nunc. Praesent dapibus mi id metus posuere ultricies.</p></div>
					</div>

				</div>

				<div className="footer"><h1>soy la descripcion</h1></div>
			</div>
		</>
	);
};
