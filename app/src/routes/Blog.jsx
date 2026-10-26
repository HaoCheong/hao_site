import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import logoAnimated from "../assets/logo-animated.gif";
import squintGif from "../assets/ken-jeong-squinting.gif";
import WindowedBox from "../components/BuildingBox/WindowedBox";
import MobilePage from "../components/MobilePage";
import TooSmallPage from "../components/TooSmallPage";
import MobileNavbar from "../components/MobileNavbar";
import AnimatedLogo from "../components/AnimatedLogo";

const Blog = () => {
	return (
		<>
			<TooSmallPage>
				<div
					id="too-small-content"
					className="size-full flex flex-col gap-4 items-center justify-center"
				>
					<img
						src={squintGif}
						alt="Gif of a man squinting a piece of paper"
						className="w-80 h-80"
					/>
				</div>
			</TooSmallPage>
			<MobilePage>
				<div
					id="blog-mobile-content"
					className="w-full h-full overflow-y-scroll p-2"
				>
					<div
						id="blog-mobile-content-inner"
						className="flex flex-col gap-8 w-full h-1/1"
					>
						<div
							id="blog-mobile-navbar"
							className="w-full h-3/20 shrink-0"
						>
							<MobileNavbar />
						</div>
						<div
							id="blog-mobile-logo"
							className="w-full h-6/20 shrink-0 flex justify-center"
						>
							<AnimatedLogo />
						</div>

						<div
							id="blog-mobile-description"
							className={clsx(
								"w-full shrink-0 flex justify-center",
								"min-[300px]:h-7/20",
								"min-[400px]:h-6/20",
								"min-[700px]:h-4/20",
							)}
						>
							<WindowedBox title="description">
								<h1 className="text-4xl text-hao-text font-syne font-extrabold p-4">
									Here is my blog_
								</h1>
							</WindowedBox>
						</div>
						<div
							id="blog-mobile-content"
							className={clsx(
								"w-full h-2/20 shrink-0 flex flex-col gap-4 justify-center items-center",
							)}
						>
							<h1 className="text-3xl font-extrabold font-syne text-hao-text">
								Work in progress...
							</h1>
						</div>
					</div>
				</div>
			</MobilePage>
			<Page>
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
						<h2 className="text-xl text-hao-text/60">
							@hao cheong 2026 · made with my two hands
						</h2>
					</div>
				</div>
			</Page>
		</>
	);
};
export default Blog;
