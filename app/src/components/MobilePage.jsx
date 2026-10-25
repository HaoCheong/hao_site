import clsx from "clsx";
import Navbar from "./Navbar";
import pageBg from "../assets/page-background-4.jpg";

const MobilePage = ({ children }) => {
	return (
		<div
			id="root-background"
			className="max-[350px]:hidden min-[1170px]:hidden relative w-screen h-screen overflow-hidden"
		>
			<img
				src={pageBg}
				className="absolute inset-0 w-full h-full object-cover"
				alt=""
				aria-hidden="true"
			/>
			<div
				id="page-container"
				className="relative size-full flex flex-col justify-center items-center"
			>
				<div
					id="page-content"
					className={clsx(
						"h-full w-15/16 min-w-[355px] min-h-[355px] bg-hao-primary/50 backdrop-blur-md shadow-2xl p-8",
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default MobilePage;
