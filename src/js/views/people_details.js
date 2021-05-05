import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PersonStats } from "../component/personStats";

export const PeopleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const peopleID = params.peopleID;
	return (
		<div className="content-wrapper">
			<div className="container">
				{store.people.length > 0 && typeof peopleID !== "undefined" && (
					<div className="topandtable-container p-2 p-xl-3">
						<div className="row details-top-section">
							<div className="col-12 col-lg-7 align-self-center">
								<img
									src={store.people[peopleID].photo_url}
									className="w-100 rounded"
									alt="character image"
								/>
							</div>

							<div className="col-12 col-lg-5 p-3 p-xl-4">
								<h3 className="name m-2">{store.people[peopleID].name}</h3>
								<p className="description m-2">{store.people[peopleID].description}</p>
							</div>
						</div>
						<br />
						{store.people.length > 0 && <PersonStats data={store.people[peopleID]} />}
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
