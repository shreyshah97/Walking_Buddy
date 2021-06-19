import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container-fluid">
			<ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item ">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/About">
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/ParksListPage">
						Parks
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/Register">
						Register
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/Search">
						Search
					</Link>
				</li>
			</ul>
			<ul className="nav navbar-nav navbar-right">
				<li className="nav-item">
					<Link className="nav-link" to="/Signup">
						<i className="bi bi-person-plus-fill"></i> Sign Up
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/Login">
						<i className="bi bi-box-arrow-in-right"></i> Login
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default NavBar;
