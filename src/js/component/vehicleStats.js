import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const VehicleStats = props => {
	const [vehicle, setVehicle] = useState(null);
	useEffect(() => {
		fetch(props.url)
			.then(res => res.json())
			.then(data => setVehicle(data.result.properties));
	}, []);
	return (
		<div className="container">
			<div className="row details-table text-center">
				{vehicle !== null && (
					<>
						<div className="column col-12 col-md-4 col-xl p-2">
							<h5 className="details-table-header">Model</h5>
							<p>{vehicle.model}</p>
						</div>
						<div className="column col-12 col-md-4 col-xl p-2">
							<h5 className="details-table-header">Vehicle class</h5>
							<p>{vehicle.vehicle_class}</p>
						</div>
						<div className="column col-12 col-md-4 col-xl p-2">
							<h5 className="details-table-header">Manufacturer</h5>
							<p>{vehicle.manufacturer}</p>
						</div>
						<div className="column col-12 col-md-4 col-xl p-2">
							<h5 className="details-table-header">Length</h5>
							<p>{vehicle.length}</p>
						</div>
						<div className="column col-12 col-md-4 col-xl p-2">
							<h5 className="details-table-header">Crew</h5>
							<p>{vehicle.crew}</p>
						</div>
						<div className="column col-12 col-md-4 col-xl p-2">
							<h5 className="details-table-header">Passengers</h5>
							<p>{vehicle.passengers}</p>
						</div>
						<div className="column col-12 col-md-4 col-xl p-2">
							<h5 className="details-table-header">Cargo capacity</h5>
							<p>{vehicle.cargo_capacity}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

VehicleStats.propTypes = {
	url: PropTypes.string.isRequired
};
