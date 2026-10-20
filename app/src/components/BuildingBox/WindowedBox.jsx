import clsx from "clsx";
import PopBox from "./PopBox";
import WindowedBase from "./WindowedBase";

const WindowedBox = ({ title, backdropOn = true, children }) => {
	return (
		<PopBox backdropOn={backdropOn}>
			<WindowedBase title={title}>{children}</WindowedBase>
		</PopBox>
	);
};

export default WindowedBox;
