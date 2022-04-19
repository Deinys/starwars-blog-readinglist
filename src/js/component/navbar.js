import React, {useContext} from "react";
import starLogo from "../../img/Star-Wars-Logo.png"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	
	
	return (

		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">

					<img src={starLogo} alt="" width="60" height="40" />

				</Link>
				<div className="ml-auto">

					<div className="dropdown">

						<button type="button" className="btn btn-primary dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Notifications <span className="badge bg-secondary">{store.favorites.length}</span>
						</button>
						
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">

							{store.favorites == ""? (<li>(empty)</li>):
							(store.favorites.map((item)=>{
								return(
									<li key={item._id} className="d-flex justify-content-between">
										{item.properties.name}
										<button className="ms-1" type="button" onClick={()=>actions.deleteFavorites(item._id)}><i className="fas fa-trash"></i></button>
									</li>
								)
							}))

							}

						</ul>
					</div>

				</div>
			</div>
		</nav>

	);
};
