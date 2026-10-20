import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import PopBox from "../components/PopBox";
import WindowedBox from "../components/WindowedBox";

const Sandbox = () => {
	return (
		<Page>
			<div
				id="resume-mobile-page"
				className="md:hidden flex justify-center items-center h-screen m-3"
			>
				<h1
					id="work-in-progress"
					className="font-space-mono text-3xl text-hao-text text-center"
				>
					Resume Page: currently a work in progress 🙇‍♂️
				</h1>
			</div>

			<div
				id="resume-desktop-page"
				className="max-md:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div className="w-full h-19/20 text-hao-text flex justify-center items-center p-4">
					{/* Add the component you want to build and test here */}
					<WindowedBox title="testing">test</WindowedBox>
				</div>
				<div
					id="resume-desktop-footer"
					className="w-full h-1/20t flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};

export default Sandbox;
