import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
	<footer className="footer fixed-bottom bg-light mt-2 text-center">
		<div>
			<h3 className="footer-message">
				<span className="message-emphasis">
					<FontAwesomeIcon icon={faJedi} />
				</span>{" "}
				May the <span className="message-emphasis">FORCE</span> be with YOU{" "}
				<span className="message-emphasis">
					<FontAwesomeIcon icon={faJedi} />
				</span>
			</h3>
		</div>
	</footer>
);
