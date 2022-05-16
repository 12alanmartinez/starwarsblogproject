import { getPeople, getPlanets,getVehicles } from "../api.js"

import { Planets } from "../component/planets.js";
import { Vehicles } from "../component/vehicles.js";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[],
			vehicles:[],
			planets:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getInfo: () => {
			getPeople().then((data) => {
				setStore({characters:data})
			})
			getPlanets().then((data) => {
				setStore({planets:data})
			})
			getVehicles().then((data) => {
				setStore({vehicles:data})
			})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
