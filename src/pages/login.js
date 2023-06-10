import { Link, Navigate, useNavigate } from "react-router-dom";
import React, {useEffect, useLayoutEffect, useState} from "react";
import $ from "jquery";


const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		navigate("/");// this is suppose to go to the register page
	};

	const handleUsername = (e) =>{
		setUsername(e.target.value);
	}

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};


	return (
		<main id="mainLogin">
			<div className="formElements">
				<h2>LOGIN</h2>
				<form onSubmit={handleSubmit
				} method="post" target="/">
					<label htmlFor="username"><input type="text" value={username} placeholder="username..." id="username" name="username"onChange={handleUsername} /></label>
					<label htmlFor="password"><input type="password" placeholder="password..." value={password} id="password" name="password" onChange={handlePassword} /></label>
					<button id="login-submit">submit</button>
				</form>
				<p className="registerLink">Don't have an accout?<Link to="/register">click me</Link> to register</p>
			</div>
		</main>
	);
};

export default Login;