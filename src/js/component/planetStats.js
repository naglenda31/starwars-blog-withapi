import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PlanetStats = props => {
	const [planet, setPlanet] = useState(props.data);
	return (
		<div className="container">
			<div className="row details-table text-center">
				{planet !== null && (
					<>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Diameter</h5>
							<p>{planet.diameter}</p>
						</div>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Rotation period</h5>
							<p>{planet.rotation_period}</p>
						</div>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Orbital period</h5>
							<p>{planet.orbital_period}</p>
						</div>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Gravity</h5>
							<p>{planet.gravity}</p>
						</div>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Population</h5>
							<p>{planet.population}</p>
						</div>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Climate</h5>
							<p>{planet.climate}</p>
						</div>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Terrain</h5>
							<p>{planet.terrain}</p>
						</div>
						<div className="column col col-md-4 col-xl p-2">
							<h5 className="details-table-header">Surface water</h5>
							<p>{planet.surface_water}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

PlanetStats.propTypes = {
	data: PropTypes.object.isRequired
};
