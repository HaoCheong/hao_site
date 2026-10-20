import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import logoAnimated from "../assets/logo-animated.gif";
import WindowedBox from "../components/BuildingBox/WindowedBox";

const Resume = () => {
	return (
		<Page>
			<div
				id="blog-mobile-page"
				className="md:hidden flex justify-center items-center h-screen m-3"
			>
				<h1
					id="blog-in-progress"
					className="font-space-mono text-3xl text-hao-text text-center"
				>
					Blog Page: currently a blog in progress 🙇‍♂️
				</h1>
			</div>

			<div
				id="blog-desktop-page"
				className="max-md:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div
					id="blog-desktop-heading"
					className={clsx(
						"w-full h-8/32 flex justify-center items-center",
					)}
				>
					<div
						id="blog-heading"
						className={clsx(
							"p-4 w-full h-full flex flex-row gap-12",
						)}
					>
						<img
							src={logoAnimated}
							className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
						/>
						<WindowedBox title="Decription">
							<div className="size-full flex items-center justify-center p-4">
								<h1 className="text-4xl text-hao-text font-syne font-extrabold">
									Here is my blog
								</h1>
							</div>
						</WindowedBox>
					</div>
				</div>
				<div
					id="blog-desktop-content"
					className={clsx(
						"w-full h-22/32 flex justify-center items-center",
					)}
				>
					<h1 className="font-9xl font-extrabold font-syne text-hao-text">
						Work in progress...
					</h1>
				</div>
				<div
					id="blog-desktop-footer"
					className="w-full h-2/32 text-hao-text flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};
export default Resume;
