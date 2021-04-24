import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const VehicleStats = props => {
	const [vehicle, setVehicle] = useState(props.data);
	return (
		<div className="container">
			<div className="row details-table text-center">
				{vehicle !== null && (
					<>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Model</h5>
							<p>{vehicle.model}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Vehicle class</h5>
							<p>{vehicle.vehicle_class}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Manufacturer</h5>
							<p>{vehicle.manufacturer}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Cost in credits</h5>
							<p>{vehicle.cost_in_credits}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Length</h5>
							<p>{vehicle.length}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Crew</h5>
							<p>{vehicle.crew}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Passengers</h5>
							<p>{vehicle.passengers}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Max Speed</h5>
							<p>{vehicle.max_atmosphering_speed}</p>
						</div>
						<div className="column col-12 col-md-4 p-2">
							<h5 className="details-table-header">Consumables</h5>
							<p>{vehicle.consumables}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

VehicleStats.propTypes = {
	data: PropTypes.object.isRequired
};
