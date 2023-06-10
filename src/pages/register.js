import { Link, useNavigate } from "react-router-dom";
import { useLayoutEffect, useEffect, useState } from "react";
import $ from "jquery";

const Register = () => {
	const [username, setUsername] = useState("");
	const [studentID, setStudentID] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const navigate = useNavigate();


	//###################### Will use this to interact with back end #########
	//const handleSubmit = async (e) => {
	//	e.preventDefault();
	//	const res = await fetch("http://localhost:8080/api/register", {
	//		method: "POST",
	//		body: JSON.stringify({username, studentID, password}),
	//		headers: {'Content-type': 'application/json'}
	//	});

	//	if(res.status == 200){
	//		setRedirect(!redirect);
	//		alert('registration successful');
	//	}else{
	//		alert('registration failed');
	//	}
	//};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(username!="" && studentID!="" && password!=""){
			alert("Registration successful successful");
			navigate("/");
		}else{
			alert("Registration not successful");
			navigate("/register");
		}

	};
	

	const handleChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};
	
	const handleChangeStudentID = (e) => {
		setStudentID(e.target.value);
	}

	return (
		<main id="mainLogin">
			<div className="formElements">
				<h2>REGISTER</h2>
				<form onSubmit={handleSubmit
				} method="POST">
					<label htmlFor="username"><input type="text" value={username} placeholder="username..." id="username" name="username" onChange={handleChangeUsername} /></label>
					<label htmlFor="studentID"><input type="password" placeholder="studentID..." value={studentID} id="studentID" name="student_id" onChange={handleChangeStudentID} /></label>
					<label htmlFor="password"><input type="password" placeholder="password..." value={password} id="password" name="password" onChange={handleChangePassword} /></label>
					<button id="login-submit">submit</button>
				</form>
				<p className="registerLink">Already have an accout?<Link to="/login">click me</Link> to log in</p>
			</div>
		</main>
	);
};


export default Register;