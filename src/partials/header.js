import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header>
				<Link to="/" className="logo">Home</Link>
				<nav>
					<Link to="/info">Info</Link>
				    <Link to="/login">Logout</Link>
					<Link to="/profile">Profile</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;