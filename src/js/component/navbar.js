import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faAcquisitionsIncorporated } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar fixed-top navbar-light bg-light mb-3">
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
						<span className="badge badge-light bg-white ml-1">
							{store.favorites.length === 0 ? "" : store.favorites.length}
						</span>
					</button>
					<div className="dropdown-menu p-1" aria-labelledby="dropdownMenuButton">
						{store.favorites.length > 0
							? store.favorites.map((item, index) => {
									return (
										<div className="dropdown-item p-1" href="#" key={index}>
											{item.name}

											<span className="float-right delete-favorite-icon">
												<FontAwesomeIcon
													icon={faTrash}
													onClick={() => actions.removeFavorite(index)}
												/>
											</span>
										</div>
									);
							  })
							: " No Favorites Added"}
					</div>
				</div>
			</div>
		</nav>
	);
};
