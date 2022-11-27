import Master from "./layouts/Master";

import Collection from "./pages/Collection";

import { Routes, Route } from "react-router-dom";
import { Empty } from "antd";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Master />}>
				<Route index element={<Collection />} />
				<Route path='*' element={<Empty />} />
			</Route>
		</Routes>
	);
}

export default App;
