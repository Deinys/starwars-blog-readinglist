import React from "react";
import starLogo from "../../img/Star-Wars-Logo.png"
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="container">
				<Link to="/">

      				<img src={starLogo} alt="" width="60" height="40"/>
    			
				</Link>
				<div className="ml-auto">
					
						<div className="dropdown">
  							
							<span className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> Favorites</span>
  							<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">

							  <Link to="*"><li><span className="dropdown-item">action</span></li></Link>

							  <Link to="*"><li><span className="dropdown-item">action</span></li></Link>

							  <Link to="*"><li><span className="dropdown-item">action</span></li></Link>
    							
  							</ul>
						</div>
					
				</div>
				</div>
			</nav>
		
	);
};
