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
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZ2Fz5sbJd1qDHJa1Efa2nW5MaliXlHb-gA&usqp=CAU"
									className="w-100 rounded"
									alt="vehicle image"
								/>
							</div>

							<div className="col-12 col-lg-5 p-3 p-xl-4">
								<h3 className="name m-2">{store.vehicles[vehicleID].name}</h3>
								<p className="description m-2">
									The X-34 was a civilian landspeeder of mundane design produced by SoroSuub
									Corporation. Built with a powerful repulsorlift engine augmented with three
									air-cooled thrust turbines, the X-34 hovered up to a meter off the ground during
									operation. The vehicles were capable of crossing rough terrain, and were well-suited
									for harsh desert climates. Owners could choose from either an open-air or sealed
									cockpit, although the speeders lacked any form of combat capability in the form of
									weapon mounts or armor. The X-34 was fast, if fairly nondescript in appearance, and
									measured 3.4 meters in length. X-34 landspeeders utilized by the Alliance to Restore
									the Republic were retrofitted with blaster cannons.
								</p>
							</div>
						</div>
						<br />
						{store.vehicles.length > 0 && <VehicleStats url={store.vehicles[vehicleID].url} />}
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
