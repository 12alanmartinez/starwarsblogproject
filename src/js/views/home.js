import React,{useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Planets } from "../component/planets";
import { Characters } from "../component/characters";
import { Vehicles } from "../component/vehicles";
import { getPeople } from "../api.js"


export const Home = () =>{
	const [characters, setCharacters] = useState([])
	useEffect (()=>{
		 getPeople().then(info => setCharacters(info))
	},[])
	console.log(characters)
	return (

	<div className="text-center mt-5">
		<div className="d-flex">
		{characters.length>0 && characters.map((item, index) => {

			return (
				<Characters key ={index} name = {item.name}/>
			)
		})}
		</div>
		<Planets/>
		<Vehicles/>
	</div>
)}
