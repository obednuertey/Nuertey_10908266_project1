import React, {useEffect, useState, useLayoutEffect} from "react";
const Profile = () => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const handleCurrentPassword = (e) => {setCurrentPassword(e.target.value)};
	const handleNewPassword = (e) => {setNewPassword(e.target.value)};

	return (
		<main id="profile-main">
			<h1>PROFILE</h1>
			<div id="sections">
				<section>
					<h2>My Profile</h2>
					<div>
						<h3>Username: Students username</h3>
						<form action="/" method="PATCH">
							<fieldset>
								<legend>Change Password</legend>
								<label htmlFor="currentPassword">Current Password: <input type="text" id="currentPassword" name="currentPassword" value={currentPassword} onChange={handleCurrentPassword} /></label>
								<label htmlFor="newPassword">New Password: <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={handleNewPassword} /></label>
								<button id="update-password">update password</button>

							</fieldset>
						</form>
					</div>
				</section>
				<section>
					<h2 id="danger-zone">DANGER ZONE</h2>
					<div>
						<button id="delete-account">Delete MyAccount</button>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Profile;