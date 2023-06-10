import React, {useState, useReducer, useEffect, useRef, useLayoutEffect, forwardRef, useImperativeHandle, createContext, useContext, useMemo} from 'react';
import { Link, Navigate } from 'react-router-dom';
import $ from "jquery";
import axios from "axios";
import {Helmet} from "rect-helmet";


const Home = () => {

	const dashboardNames = [{name: "dash1", "data": 0}, {name: "dash2", "data": 25}, {name: "dash3", "data": 26}];
	const dashboard = dashboardNames.map((elem, index)=>(<div className="content" id={`dash-${1}`} >
		<div className='dashName'><h2>{elem.name}</h2></div>
		<div className='dashData'><h3>{elem.data}</h3></div>
	</div>));
	
	return (
		<>
			<main id="homeMain">
				<h1 id="dashboard">Dashboard</h1>
				<div id="components" >
					{dashboard}
				</div>
			</main>
		</>
	);
}

export default Home;