import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 barraNav">
			<Link className="barraNav" to="/">
				<span className="navbar-brand mb-0 h1 p-2"> Blog Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary p-2">Mis favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
