import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="content-wrapper">
			<div className="container">
				<div className="row rounded details-top-section">
					<div className="col-7 p-0 container">
						<img src="https://i.imgur.com/mm0QJgY.jpg" className="w-100" alt="Luke Skywalker picture" />
					</div>

					<div className="col-5 py-4">
						<h3 className="name mb-2">Luke Skywalker</h3>
						<p className="description">
							Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the
							greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo,
							Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny
							of the Sith. A generation later, the location of the famed Jedi master was one of the
							galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had
							to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his
							solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in
							the struggle between good and evil.
						</p>
					</div>
				</div>
				<div className="row details-table">
					<div className="col">
						<h5>Gender</h5>
						<p>Male</p>
					</div>
					<div className="col">
						<h5>Gender</h5>
						<p>Male</p>
					</div>
					<div className="col"></div>
					<div className="col"></div>
					<div className="col"></div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-danger" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
