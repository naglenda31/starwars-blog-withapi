import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="row cardrow">
			<h2>Characters</h2>
			{store.people.map((character, index) => {
				return (
					<div className="col " key={index}>
						<div className="container card-container">
							<div className="card" style={{ width: "18rem" }}>
								<img src={character.image} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{character.name}</h5>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})}
			)
		</div>
	);
};
