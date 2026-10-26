import clsx from "clsx";
import Navbar from "./Navbar";
import pageBg from "../assets/page-background-4.jpg";

const TooSmallPage = ({ children }) => {
	return (
		<div
			id="root-background"
			className="[@media(min-width:350px)_and_(min-height:350px)]:hidden relative w-screen h-screen overflow-hidden"
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
						"size-full bg-hao-primary/50 backdrop-blur-md shadow-2xl p-8 flex items-center",
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default TooSmallPage;
