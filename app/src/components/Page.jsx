import clsx from "clsx";
import Navbar from "./Navbar";

const Page = ({ children }) => {
	return (
		<div
			id="root-background"
			className="block w-screen h-screen bg-[url(/src/assets/page-background-2.svg)] bg-cover"
		>
			<div
				id="page-container"
				className="size-full flex flex-col justify-center items-center"
			>
				<div
					id="page-content"
					className={clsx(
						"h-14/16 w-10/16 border-5 border-solid border-white p-8",
						"max-md:h-full max-md:w-14/16 max-md:p-0"
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Page;
