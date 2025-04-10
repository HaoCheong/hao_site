import RootPage from "./components/containers/RootPage";
import Home from "./routes/Home";
import { Router, Route, Navigate } from "@solidjs/router";
import Projects from "./routes/Projects";
import Work from "./routes/Work";
import Flag from "./routes/Flag";

function App() {
	return (
		<RootPage>
			<Router>
				<Route path="/Home" component={Home} />
				<Route path="/Projects" component={Projects} />
				<Route path="/Work" component={Work} />
				<Route path="*" component={() => <Navigate href={"/Home"} />} />
				<Route path="/flag" component={Flag} />
				<Route path="/secret" component={Flag} />
			</Router>
		</RootPage>
	);
}

export default App;
