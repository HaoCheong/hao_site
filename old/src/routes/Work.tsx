import PageContainer from "../components/containers/PageContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Work = () => {
	return (
		<>
			<PageContainer>
				<Navbar />
				<div
					id="home-content"
					class="grid grid-rows-16 grid-cols-16 gap-5 p-5 m-5 h-full max-md:grid-cols-1 max-md:grid-rows-16 max-md:p-1 max-md:m-1 max-md:h-[180vh]"
				>
					<div class="col-span-2 row-span-4 text-5xl font-jersey text-white flex items-center justify-center max-md:col-span-1 max-md:row-span-3">
						<img
							src="src/assets/Crocky_transparent.png"
							alt="Hao Logo"
							class="aspect-square h-full"
						/>
					</div>
					<div class="p-4 col-span-14 row-span-4 text-white text-5xl font-jersey flex items-center justify-center max-md:col-span-1 max-md:row-span-1">
						<h1 class="font-jersey text-9xl text-white text-center max-md:text-8xl">
							work/
						</h1>
					</div>
				</div>
				<Footer />
			</PageContainer>
		</>
	);
};

export default Work;
