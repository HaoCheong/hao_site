import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Flag from "./routes/Flag";
import Projects from "./routes/Projects";
import Work from "./routes/Work";
import Resume from "./routes/Resume";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="hao-site/Home" element={<Home />} />
					<Route path="hao-site/Flag" element={<Flag />} />
					<Route path="hao-site/Projects" element={<Projects />} />
					<Route path="hao-site/Work" element={<Work />} />
					<Route path="hao-site/Resume" element={<Resume />} />
					<Route
						path="*"
						element={<Navigate to="hao-site/Home" replace />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
