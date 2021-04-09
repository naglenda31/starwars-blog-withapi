import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as farFaHeart } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="content-wrapper">
			<div className="container section-container p-2 my-2">
				<h2 className="section-title">Characters</h2>
				<div className="row cardrow">
					{store.people.map((character, index) => {
						return (
							<div className="col p-2" key={index}>
								<div className="container card-container p-0">
									<div className="card" style={{ width: "18rem" }}>
										<img src={character.image} className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title">{character.name}</h5>
											<div className="footer d-flex">
												<Link to="/details">
													<a href="#" className="btn btn-outline-danger">
														Learn more!
													</a>
												</Link>
												<div className="favorite-button btn btn-outline-danger ml-auto">
													<i className="far fa-heart"></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="container section-container p-2 my-2">
				<h2 className="section-title">Planets</h2>
				<div className="row cardrow">
					{store.planets.map((planet, index) => {
						return (
							<div className="col p-2" key={index}>
								<div className="container card-container p-0">
									<div className="card" style={{ width: "18rem" }}>
										<img src={planet.image} className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title">{planet.name}</h5>
											<div className="footer d-flex">
												<Link to="/details">
													<a href="#" className="btn btn-outline-danger">
														Learn more!
													</a>
												</Link>
												<div className="favorite-button btn btn-outline-danger ml-auto">
													<i className="far fa-heart"></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="container section-container p-2 my-2">
				<h2 className="section-title">Vehicles</h2>
				<div className="row cardrow">
					{store.vehicles.map((vehicle, index) => {
						return (
							<div className="col p-2" key={index}>
								<div className="container card-container p-0">
									<div className="card" style={{ width: "18rem" }}>
										<img src={vehicle.image} className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title">{vehicle.name}</h5>
											<div className="footer d-flex">
												<Link to="/details">
													<a href="#" className="btn btn-outline-danger">
														Learn more!
													</a>
												</Link>
												<div className="favorite-button btn btn-outline-danger ml-auto">
													<i className="far fa-heart"></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
