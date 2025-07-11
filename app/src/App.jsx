import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Flag from "./routes/Flag";
import Projects from "./routes/Projects";
import Work from "./routes/Work";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/Flag" element={<Flag />} />
					<Route path="/Projects" element={<Projects />} />
					<Route path="/Work" element={<Work />} />
					<Route path="*" element={<Navigate to="/Home" replace />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
