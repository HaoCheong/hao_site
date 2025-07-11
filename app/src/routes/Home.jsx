import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Placeholder from "../components/Placeholder";

const Home = () => {
	return (
		<Page>
			<Navbar />
			<div
				id="home-landing-section"
				className={clsx(
					"w-full h-7/20 flex justify-center items-center border-1 border-white border-solid"
				)}
			>
				<div
					id="landing-central"
					className={clsx(
						"p-4 w-6/10 h-full border-1 border-white border-solid flex flex-row"
					)}
				>
					<img
						src="/src/assets/logo.png"
						className="w-4/10 h-full p-3 aspect-square"
					/>
					<div className="w-6/10 flex justify-center items-center">
						<h1 className="text-5xl text-hao-text text-center">
							Hi, I am a Software Developer
						</h1>
					</div>
				</div>
			</div>
			<Placeholder classSize="w-full h-4/20" />
			<Placeholder classSize="w-full h-6/20" />
		</Page>
	);
};

export default Home;
