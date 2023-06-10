import React, {useState, useReducer, useEffect, useRef, useLayoutEffect, forwardRef, useImperativeHandle, createContext, useContext, useMemo} from 'react';
import { Link, Navigate, Routes, Route } from 'react-router-dom';
import $ from "jquery";
import axios from "axios";
import "./style.css";
import { Layout1, Layout2 } from './partials/layout';
import Home from './pages/home';
import Login from './pages/login';
import Info from './pages/info';
import Profile from './pages/profile';
import Register from './pages/register';
import { Helmet } from 'react-helmet';


const App = () => {
	
	return (
	<>
		<Routes>
			<Route path="/" element={<Layout1 />} >
				<Route index element={<Home/>} />
				<Route path={'/info'} element={<Info />} />
				<Route path={'/profile'} element={<Profile />} />
			</Route>
			<Route path="/" element={<Layout2 />} >
				<Route path={'/login'} element={<Login />} />
				<Route path={'/register'} element={<Register/> } />
			</Route>
		</Routes>
	</>
	);
}

export default App;