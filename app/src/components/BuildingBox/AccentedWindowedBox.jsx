import { Children } from "react";
import AccentedPopBox from "./AccentedPopBox";
import WindowedBox from "./WindowedBox";
import WindowedBase from "./WindowedBase";

const AccentedWindowedBox = ({ title, variant, children }) => {
	return (
		<AccentedPopBox variant={variant}>
			<WindowedBase title={title}>{children}</WindowedBase>
		</AccentedPopBox>
	);
};

export default AccentedWindowedBox;
