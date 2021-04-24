import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PersonStats = props => {
	const [person, setPerson] = useState(props.data);
	return (
		<div className="container">
			<div className="row details-table text-center">
				{person !== null && (
					<>
						<div className="column col-6 col-lg p-2">
							<h5 className="details-table-header">Birth Year</h5>
							<p>{person.birth_year}</p>
						</div>
						<div className="column col-6 col-lg p-2">
							<h5 className="details-table-header">Height</h5>
							<p>{person.height}</p>
						</div>
						<div className="column col-6 col-lg p-2">
							<h5 className="details-table-header">Mass</h5>
							<p>{person.mass}</p>
						</div>
						<div className="column col-6 col-lg p-2">
							<h5 className="details-table-header">Gender</h5>
							<p>{person.gender}</p>
						</div>
						<div className="column col-6 col-lg p-2">
							<h5 className="details-table-header">Hair color</h5>
							<p>{person.hair_color}</p>
						</div>
						<div className="column col-6 col-lg p-2">
							<h5 className="details-table-header">Eye color</h5>
							<p>{person.eye_color}</p>
						</div>
						<div className="column col col-lg p-2">
							<h5 className="details-table-header">Homeworld</h5>
							<p>{person.homeworld}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

PersonStats.propTypes = {
	data: PropTypes.object.isRequired
};
