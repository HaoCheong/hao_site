import { Match, Switch } from "solid-js";

const Footer = () => {
	const footer_num = Math.floor(Math.random() * 10);

	return (
		<>
			<Switch
				fallback={
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Reinventing the wheel since 2018 //
					</footer>
				}
			>
				<Match when={footer_num === 0}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Did you know the universe started on 1st of January
						1970? //
					</footer>
				</Match>
				<Match when={footer_num === 1}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Made with Genuine Stupidity //
					</footer>
				</Match>
				<Match when={footer_num === 2}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Made with SolidJS and Coffee //
					</footer>
				</Match>
				<Match when={footer_num === 3}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Error 418: I am a Teapot //
					</footer>
				</Match>
				<Match when={footer_num === 4}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Proudly supported on the *most* smart microwaves //
					</footer>
				</Match>
				<Match when={footer_num === 5}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// The best website ever made:{" "}
						<span class="text-[#3366cc] underline">
							<a href="#this-one-silly">See Here</a>
						</span>{" "}
						//
					</footer>
				</Match>
				<Match when={footer_num === 6}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Not a rick roll:{" "}
						<span class="text-[#3366cc] underline">
							<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D">
								Link
							</a>
						</span>
						//
					</footer>
				</Match>
				<Match when={footer_num > 7}>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center p-5">
						// Footer are randomly generated on each refresh! //
					</footer>
				</Match>
			</Switch>
		</>
	);
};

export default Footer;
