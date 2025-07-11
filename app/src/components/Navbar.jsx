import Button from "./Button";
import clsx from "clsx";
const Navbar = () => {
	return (
		<div
			id="navigation-bar"
			className="h-3/20 w-full flex flex-row border-1 border-solid p-4"
		>
			<div
				id="nav-title-section"
				className={clsx(
					"w-5/10 h-full flex items-center",
					"max-md:w-full max-md:justify-center max-md:items-center"
				)}
			>
				<h1 id="title" className={clsx("text-5xl text-white")}>
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
				<Button active />
				<Button />
				<Button />
				<Button />
			</div>
		</div>
	);
};

export default Navbar;
