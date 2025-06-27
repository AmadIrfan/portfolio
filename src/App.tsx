import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import { ref, child, get } from "firebase/database";
import type { PortfolioData } from "./types/portfolio.d";
import db from "./firebase/config";
import Main from "./Components/Main";
import portfolioData from "./data/portfolioData";

// Import your main portfolio display component
// import PortfolioPage from "./Components/PortfolioPage";

const App = () => {
	const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
	const [loading, setLoading] = useState(true);
	const [darkMode, setDarkMode] = useState(true); // Assuming dark mode is a state in your app
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

	if (loading) return <Loader darkMode={darkMode} />;
	if (!portfolio)
		return (
			<Main portfolioData={portfolioData} setLoaderDarkMode={setDarkMode} />
		);
	return (
		<Main
			portfolioData={portfolio === null ? portfolioData : portfolio}
			setLoaderDarkMode={setDarkMode}
		/>
	);
};

export default App;
