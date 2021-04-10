import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";
import { PersonStats } from "../component/personStats";

export const PeopleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const peopleID = params.peopleID;
	return (
		<div className="content-wrapper">
			<div className="container">
				{store.people.length > 0 && typeof peopleID !== "undefined" && (
					<div className="topandtable-container p-2 p-xl-3">
						<div className="row details-top-section">
							<div className="col-12 col-lg-7 align-self-center">
								<img
									src="https://i.imgur.com/mm0QJgY.jpg"
									className="w-100 rounded"
									alt="Luke Skywalker picture"
								/>
							</div>

							<div className="col-12 col-lg-5 p-3 p-xl-4">
								<h3 className="name m-2">{store.people[peopleID].name}</h3>
								<p className="description m-2">
									Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one
									of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia
									and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage,
									and ended the tyranny of the Sith. A generation later, the location of the famed
									Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall
									to evil and convinced the Jedi had to end, Luke sought exile on a distant world,
									ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and
									Luke Skywalker had one final, momentous role to play in the struggle between good
									and evil.
								</p>
							</div>
						</div>
						<hr className="" />
						{store.people.length > 0 && <PersonStats url={store.people[peopleID].url} />}
					</div>
				)}
			</div>

			<div className="d-flex justify-content-end mr-4 my-3">
				<Link to="/">
					<span className="btn btn-danger ml-auto" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};
