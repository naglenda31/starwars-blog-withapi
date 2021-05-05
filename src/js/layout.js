import React from "react";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { PeopleDetails } from "./views/people_details";
import { PlanetDetails } from "./views/planet_details";
import { VehicleDetails } from "./views/vehicle_details";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<HashRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people_details/:peopleID">
							<PeopleDetails />
						</Route>
						<Route exact path="/planet_details/:planetID">
							<PlanetDetails />
						</Route>
						<Route exact path="/vehicle_details/:vehicleID">
							<VehicleDetails />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</HashRouter>
		</div>
	);
};

export default injectContext(Layout);
