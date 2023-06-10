import { Link, Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export const Layout1 = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export const Layout2 = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};