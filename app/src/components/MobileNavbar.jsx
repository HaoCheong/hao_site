import clsx from "clsx";
import { useLocation, useNavigate } from "react-router";
import Button from "./Button";

const MobileNavbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div
			id="mobile-navigation-bar"
			className="size-full flex flex-col gap-4"
		>
			<div
				id="nav-page-navigation-primary"
				className={clsx("size-full flex flex-row gap-4 items-center")}
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
			</div>
			<div
				id="nav-page-navigation-secondary"
				className={clsx("size-full flex flex-row gap-4 items-center")}
			>
				<Button
					onClick={() => navigate("/Resume")}
					active={location.pathname === "/Resume"}
				>
					/resume
				</Button>
				<Button
					onClick={() => navigate("/Blog")}
					active={location.pathname === "/Blog"}
				>
					../blog
				</Button>
			</div>
		</div>
	);
};

export default MobileNavbar;
