import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 barraNav p-3">
			<Link className="barraNav" to="/home">
				<span className="navbar-brand mb-0 h1"><img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png" width={"75px"} alt="" /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary p-2">Mis favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
