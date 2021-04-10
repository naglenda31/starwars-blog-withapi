import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const planetID = params.planetID;
	return (
		<div className="content-wrapper">
			<div className="container">
				{store.planets.length > 0 && typeof planetID !== "undefined" && (
					<div className="top&table-container">
						<div className="row details-top-section">
							<div className="col-12 col-lg-7 p-0 align-self-center">
								<img src="" className="w-100 rounded" alt="" />
							</div>

							<div className="col-12 col-lg-5 py-4">
								<h3 className="name m-3 mb-2">{store.planets[planetID].name}</h3>
								<p className="description m-3">Planet description here</p>
							</div>
						</div>
						<div className="row details-table mt-3 text-center">
							<div className="col">
								<h5>Diameter</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Rotation period</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Orbital period</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Gravity</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Population</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Climate</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Terrain</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Surface water</h5>
								<p></p>
							</div>
						</div>
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
