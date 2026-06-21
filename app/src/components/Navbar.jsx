import clsx from "clsx";
import { useLocation, useNavigate } from "react-router";
import Button from "./Button";
const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div id="navigation-bar" className="h-2/20 w-full flex flex-row p-4">
			<div
				id="nav-title-section"
				className={clsx(
					"w-5/10 h-full flex items-center",
					"max-md:w-full max-md:justify-center max-md:items-center",
				)}
			>
				<h1
					id="title"
					className={clsx("text-8xl text-white font-space-mono")}
				>
					/hao_site
				</h1>
			</div>
			<div
				id="nav-page-navigation"
				className={clsx(
					"w-5/10 h-full flex flex-row gap-4 items-center",
					"max-md:hidden",
				)}
			>
				<Button
					onClick={() => navigate("/Home")}
					active={location.pathname === "/Home"}
				>
					/home
				</Button>
				<Button
					onClick={() => navigate("/Projects")}
					active={location.pathname === "/Projects"}
				>
					/project
				</Button>
				<Button
					onClick={() => navigate("/Work")}
					active={location.pathname === "/Work"}
				>
					/work
				</Button>
				<Button
					onClick={() => navigate("/Resume")}
					active={location.pathname === "/Resume"}
				>
					/resume
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
