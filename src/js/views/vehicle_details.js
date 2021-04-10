import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";

export const VehicleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const vehicleID = params.vehicleID;
	return (
		<div className="content-wrapper">
			<div className="container">
				{store.vehicles.length > 0 && typeof vehicleID !== "undefined" && (
					<div className="top&table-container">
						<div className="row details-top-section">
							<div className="col-12 col-lg-7 p-0 align-self-center">
								<img src="" className="w-100 rounded" alt="" />
							</div>

							<div className="col-12 col-lg-5 py-4">
								<h3 className="name m-3 mb-2">{store.vehicles[vehicleID].name}</h3>
								<p className="description m-3">Vehicle description here</p>
							</div>
						</div>
						<div className="row details-table mt-3 text-center">
							<div className="col">
								<h5>Model</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Vehicle class</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Manufacturer</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Length</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Crew</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Passengers</h5>
								<p></p>
							</div>
							<div className="col">
								<h5>Cargo capacity</h5>
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
