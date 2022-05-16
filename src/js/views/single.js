import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const data = store.characters[params.theid]
	console.log(data)
	return (
		<div className="jumbotron">
			<h1 className="display-4"> {data.name}</h1>

			<hr className="my-4" />
			<p>Eye Color: {data.eye_color}</p>
			<p>Hair Color: {data.hair_color}</p>
			<p>Skin Color: {data.skin_color}</p>
			<p>Height: {data.height}</p>
			<p>Mass: {data.mass}</p>
			<p>Birth Year: {data.birth_year}</p> 
			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
