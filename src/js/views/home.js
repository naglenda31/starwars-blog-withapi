import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="content-wrapper">
			<div className="container section-container p-2 my-2">
				<h2 className="section-title mt-1">Characters</h2>
				<div className="row cardrow">
					{store.people.map((character, index) => {
						return (
							<div className="col-12 col-md-6 col-lg-4 col-xl p-2" key={index}>
								<div className="container card-container p-0">
									<div className="card m-auto" style={{ width: "18rem" }}>
										<img src="http://placehold.jp/400x200.png" className="card-img-top" alt="character image" />
										<div className="card-body">
											<h5 className="card-title">{character.name}</h5>
											<div className="footer d-flex">
												<Link to={`/people_details/${index}`}>
													<a href="#" className="btn btn-outline-danger">
														Learn more!
													</a>
												</Link>
												<div className="favorite-button btn btn-outline-danger ml-auto">
													<FontAwesomeIcon
														icon={farFaHeart}
														onClick={() => actions.addFavorite(character)}
													/>
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
							<div className="col-12 col-md-6 col-lg-4 col-xl p-2" key={index}>
								<div className="container card-container p-0">
									<div className="card m-auto" style={{ width: "18rem" }}>
										<img src="http://placehold.jp/400x200.png" className="card-img-top" alt="planet image" />
										<div className="card-body">
											<h5 className="card-title">{planet.name}</h5>
											<div className="footer d-flex">
												<Link to={`/planet_details/${index}`}>
													<a href="#" className="btn btn-outline-danger">
														Learn more!
													</a>
												</Link>
												<div className="favorite-button btn btn-outline-danger ml-auto">
													<FontAwesomeIcon
														icon={farFaHeart}
														onClick={() => actions.addFavorite(planet)}
													/>
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
							<div className="col-12 col-md-6 col-lg-4 col-xl p-2" key={index}>
								<div className="container card-container p-0">
									<div className="card m-auto" style={{ width: "18rem" }}>
										<img src="http://placehold.jp/400x200.png" className="card-img-top" alt="vehicle image" />
										<div className="card-body">
											<h5 className="card-title">{vehicle.name}</h5>
											<div className="footer d-flex">
												<Link to={`/vehicle_details/${index}`}>
													<a href="#" className="btn btn-outline-danger">
														Learn more!
													</a>
												</Link>
												<div className="favorite-button btn btn-outline-danger ml-auto">
													<FontAwesomeIcon
														icon={farFaHeart}
														onClick={() => actions.addFavorite(vehicle)}
													/>
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
