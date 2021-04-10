import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";
import { PlanetStats } from "../component/planetStats";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const planetID = params.planetID;
	return (
		<div className="content-wrapper">
			<div className="container">
				{store.planets.length > 0 && typeof planetID !== "undefined" && (
					<div className="topandtable-container p-2 p-xl-3">
						<div className="row details-top-section">
							<div className="col-12 col-md-7 align-self-center">
								<img
									src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937"
									className="w-100 rounded"
									alt="planet image"
								/>
							</div>

							<div className="col-12 col-md-5 p-3 p-xl-4">
								<h3 className="name m-2">{store.planets[planetID].name}</h3>
								<p className="description m-2">
									Located in the galaxy&apos;s desolate Outer Rim, Tatooine orbits a pair of binary
									G-type stars, Tatoo I and Tatoo II. The planet&apos;s indigenous lifeforms such as
									the womp rat, bantha, Sarlacc, and Krayt dragon are well-adapted to its arid
									climate. Though its proximity to the suns makes life difficult, it is located near
									key hyperspace routes, making it a smuggler and gangster haven; debris from
									shipwrecks also provides resources for scavengers. Annual sandstorms wipe out
									landmarks and make nomadic life dangerous, with the planet&apos;s populations
									clustered into distinct settlements.
								</p>
							</div>
						</div>
						<br />
						{store.planets.length > 0 && <PlanetStats url={store.planets[planetID].url} />}
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
