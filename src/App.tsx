import RootPage from "./components/containers/RootPage";
import Home from "./routes/Home";
import { Router, Route, Navigate } from "@solidjs/router";

function App() {
	return (
		<RootPage>
			<Router>
				<Route path="/Home" component={Home} />
				<Route path="*" component={() => <Navigate href={"/Home"} />} />
			</Router>
		</RootPage>
	);
}

export default App;
