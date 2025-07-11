import { useLocation, useNavigate } from "react-router";
import Button from "./Button";
import clsx from "clsx";
import React from "react";
const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div id="navigation-bar" className="h-3/20 w-full flex flex-row p-4">
			<div
				id="nav-title-section"
				className={clsx(
					"w-5/10 h-full flex items-center",
					"max-md:w-full max-md:justify-center max-md:items-center"
				)}
			>
				<h1
					id="title"
					className={clsx("text-8xl text-white font-jersey")}
				>
					Hao.Hao
				</h1>
			</div>
			<div
				id="nav-page-navigation"
				className={clsx(
					"w-5/10 h-full flex flex-row gap-4 items-center",
					"max-md:hidden"
				)}
			>
				<Button
					onClick={() => navigate("/Home")}
					label="/home"
					active={location.pathname === "/Home"}
				/>
				<Button
					onClick={() => navigate("/Projects")}
					label="/project"
					active={location.pathname === "/Projects"}
				/>
				<Button
					onClick={() => navigate("/Work")}
					label="/work"
					active={location.pathname === "/Work"}
				/>
				<Button
					onClick={() => navigate("/Resume")}
					label="/resume"
					active={location.pathname === "/Resume"}
				/>
			</div>
		</div>
	);
};

export default Navbar;
