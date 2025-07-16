import Navbar from "../components/Navbar";
import Page from "../components/Page";

const Projects = () => {
	return (
		<Page>
			<div
				id="project-mobile-page"
				className="2xl:hidden size-full overflow-y-scroll"
			>
				MOBILE
			</div>

			<div id="project-desktop-page" className="max-2xl:hidden size-full">
				<Navbar />
				<div className="w-full h-17/20 flex justify-center items-center flex-col gap-4">
					Test
				</div>
			</div>
		</Page>
	);
};

export default Projects;
