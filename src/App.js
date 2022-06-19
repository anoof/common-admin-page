import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/users" element={<UserList />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
