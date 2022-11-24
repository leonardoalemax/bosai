import Master from "./layouts/Master";
import Search from "./pages/Search";
import Collection from "./pages/Collection";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Master />}>
				<Route index element={<Collection />} />
				<Route path='search' element={<Search />} />
				<Route path='*' element={<p>There's nothing here: 404!</p>} />
			</Route>
		</Routes>
	);
}

export default App;
