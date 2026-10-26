import logoAnimated from "../assets/logo-animated.gif";

const AnimatedLogo = () => {
	return (
		<img
			src={logoAnimated}
			className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
		/>
	);
};

export default AnimatedLogo;
