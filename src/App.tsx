import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import { ref, child, get } from "firebase/database";
import type { PortfolioData } from "./types/portfolio.d";
import db from "./firebase/config";
import Main from "./Components/Main";
import portfolioData from "./data/portfolioData";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/admin/AdminDashboard";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import AdminProfile from "./Components/admin/sections/AdminProfile";

const App = () => {
	const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
	const [loading, setLoading] = useState(true);
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const dbRef = ref(db);
				const snapshot = await get(child(dbRef, "/"));
				if (snapshot.exists()) {
					const data: PortfolioData = snapshot.val();
					setPortfolio(data);
				} else {
					setPortfolio(null);
				}
			} catch (error) {
				console.error("Firebase fetch error:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const finalPortfolio = portfolio ?? portfolioData;

	if (loading) return <Loader darkMode={darkMode} />;

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Main
							portfolioData={finalPortfolio}
							setLoaderDarkMode={setDarkMode}
						/>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route
					path="/admin"
					element={
						<PrivateRoute>
							<AdminDashboard portfolio={finalPortfolio} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<PrivateRoute>
							<AdminProfile portfolio={finalPortfolio} />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
