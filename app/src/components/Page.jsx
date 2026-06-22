import clsx from "clsx";
import Navbar from "./Navbar";
import pageBg from "../assets/page-background-3.svg";

const Page = ({ children }) => {
	return (
		<div
			id="root-background"
			className="relative w-screen h-screen overflow-hidden"
		>
			<img src={pageBg} className="absolute inset-0 w-full h-full object-cover" alt="" aria-hidden="true" />
			<div
				id="page-container"
				className="relative size-full flex flex-col justify-center items-center"
			>
				<div
					id="page-content"
					className={clsx(
						"h-15/16 w-10/16 max-w-max-xl max-h-max-xl rounded-xl bg-hao-background/40 backdrop-blur-[12px] shadow-2xl p-8",
						"max-md:size-full max-md:rounded-none max-md:p-0",
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Page;
