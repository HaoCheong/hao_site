import Navbar from "../components/Navbar";
import Page from "../components/Page";

const Projects = () => {
	return (
		<Page>
			<div id="project-mobile-page" className="md:hidden">
				MOBILE
			</div>

			<div id="project-desktop-page" className="max-md:hidden">
				DESKTOP
			</div>
			{/* <Navbar />
			<div className="w-full h-17/20 flex justify-center items-center flex-col gap-4">
				Test
			</div> */}
		</Page>
	);
};

export default Projects;
