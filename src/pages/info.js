import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, Link, LinkProps } from "react-router-dom";

const Info = () => {
	const [date_of_birth, setDate_of_birth] = useState("");
	const [shs_attended, setShs_attended] = useState("");
	const [residential_address, setResidential_address] = useState("");
	const [email, setEmail] = useState("");
	const [postal_address, setPostal_address] = useState("");
	const [post_code, setPost_code] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [hasUserInfo, setHasUserInfo] = useState(false);
	const [update, setUpdate] = useState(false);
	const [delete_, setDelete] = useState(false);
	const navigate = useNavigate();


	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/");
	};

//######################################## @Will be used in backend ###########################################################
	//const handleSubmit = async (e) => {
	//	e.preventDefault();
	//	const res = await fetch("http://localhost:8080/api/register", {
	//		method: (update) ? "PUT" : (delete_) ? "DELETE" : "POST",
	//		body: JSON.stringify({date_of_birth, shs_attended, residential_address, email, postal_address, post_code}),
	//		headers: {"Content-type":"application/json"}
	//	});

	//	if(res.status === 200){
	//		setRedirect(!redirect);
	//	}
	//};

	//const navigateTo = (redir, location) => {
	//	if(redir){
	//		setRedirect(false);
	//		navigate(location);
	//	}else{
	//		alert("Incorrect User Info");
	//	}
	//}
	//navigateTo(redirect, "/");
	
	const handleUpdate = () => {setUpdate(true)};
	const handleDelete = () => {setDelete(true)};
	const handleDateOfBirth = (e) => {setDate_of_birth(e.target.value)};
	const handleSHS = (e) => {setShs_attended(e.target.value)};
	const handleResidential_address = (e) => {setResidential_address(e.target.value)};
	const handleEmail = (e) => {setEmail(e.target.value)};
	const handlePostal_address = (e) => {setPostal_address(e.target.value)};
	const handlePost_code = (e) => {setPost_code(e.target.value)};

	const myButtons = (hasUserInfo) ? (<div id="buttons"><button id="update" onClick={handleUpdate}>update</button><button id="delete" onClick={handleDelete}>delete</button></div>) : (<button id="login-submit">save</button>);

	
	return (
		<main id="info-main">
			<div id="formRules">
				<h2>STUDENT INFO</h2>
				<form onSubmit={handleSubmit
				} method="POST">
					<label htmlFor="dateOfBirth">Date of birth:<spam className="required">*</spam><input type="date" value={date_of_birth} placeholder="date of birth..." id="dateOfBirth" name="dateOfBirth" onChange={handleDateOfBirth} /></label>
					<label htmlFor="shs_attended">shs attended:<spam className="required">*</spam><input type="text" placeholder="ghana shs..." value={shs_attended} id="shs_attended" name="shs_attended" onChange={handleSHS} /></label>
					<label htmlFor="residential_address">Residential Address: <input type="text" placeholder="residential address..." value={residential_address} id="residential_address" name="residential_address" onChange={handleResidential_address} /></label>
					<label htmlFor="email">Email:<spam className="required">*</spam><input type="text" placeholder="me@something.com..." value={email} id="email" name="email" onChange={handleEmail} /></label>
					<label htmlFor="postal-address">Postal Address: <input type="text" placeholder="P.O.Box ..." value={postal_address} id="postal-address" name="postal-address" onChange={handlePostal_address} /></label>
					<label htmlFor="post_code">Ghana post code:<spam className="required">*</spam><input type="text" placeholder="GM 1234..." value={post_code} id="post_code" name="post_code" onChange={handlePost_code} /></label>
					{myButtons}
				</form>
				<p className="registerLink">All fields with <spam className="required">*</spam> are required</p>
			</div>
		</main>
	);
};

export default Info;