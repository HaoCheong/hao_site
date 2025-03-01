import RootPage from "./components/containers/RootPage";
import Home from "./routes/Home";
import { Router, Route } from "@solidjs/router";

function App() {
	return (
		<RootPage>
			<Router>
				<Route path="/" component={Home} />
			</Router>
		</RootPage>
	);
}

export default App;
