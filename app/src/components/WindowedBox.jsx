import clsx from "clsx";
import PopBox from "./PopBox";
const WindowedBox = ({ title, windowStyle, children }) => {
	return (
		<PopBox>
			<div
				id="windowed-header"
				className={clsx(
					"w-full h-2/12 border-b-3 border-solid  border-white flex items-center p-2 font-grotesk font-bold",
				)}
			>
				<h2 className={clsx("text-white text-2xl")}>{title}</h2>
			</div>
			<div
				id="windowed-content"
				className={clsx(windowStyle, "w-full h-10/12 text-hao-text")}
			>
				{children}
			</div>
		</PopBox>
	);
};

export default WindowedBox;
