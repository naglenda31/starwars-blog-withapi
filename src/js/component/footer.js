import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div>
			<h3>
				<FontAwesomeIcon icon={faJedi} />
				<span> </span>May the FORCE be with YOU<span> </span>
				<FontAwesomeIcon icon={faJedi} />
			</h3>
		</div>
	</footer>
);
