import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";
import { VehicleStats } from "../component/vehicleStats";

export const VehicleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const vehicleID = params.vehicleID;
	return (
		<div className="content-wrapper">
			<div className="container">
				{store.vehicles.length > 0 && typeof vehicleID !== "undefined" && (
					<div className="topandtable-container p-2 p-xl-3">
						<div className="row details-top-section">
							<div className="col-12 col-lg-7 align-self-center">
								<img
									src={store.vehicles[vehicleID].photo_url}
									className="w-100 rounded"
									alt="vehicle image"
								/>
							</div>

							<div className="col-12 col-lg-5 p-3 p-xl-4">
								<h3 className="name m-2">{store.vehicles[vehicleID].name}</h3>
								<p className="description m-2">{store.vehicles[vehicleID].description}</p>
							</div>
						</div>
						<br />
						{store.vehicles.length > 0 && <VehicleStats data={store.vehicles[vehicleID]} />}
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
