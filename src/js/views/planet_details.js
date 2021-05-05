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
									src={store.planets[planetID].photo_url}
									className="w-100 rounded"
									alt="planet image"
								/>
							</div>

							<div className="col-12 col-md-5 p-3 p-xl-4">
								<h3 className="name m-2">{store.planets[planetID].name}</h3>
								<p className="description m-2">{store.planets[planetID].description}</p>
							</div>
						</div>
						<br />
						{store.planets.length > 0 && <PlanetStats data={store.planets[planetID]} />}
					</div>
				)}
				<div className="d-flex justify-content-end mr-4 my-3">
					<Link to="/">
						<span className="btn btn-danger" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
