import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							className="rounded logo"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoB6ccXyKyRRlSs7mHo4a5ANaTgt6zefQs4Q&usqp=CAU"
						/>
					</span>
				</Link>
				<div className="dropdown ml-auto">
					<button
						className="btn btn-danger dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
