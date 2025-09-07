import React from "react";
import type { PortfolioData } from "../../types/portfolio";
import Layout from "./Layout";

type AdminDashboardProps = {
	portfolio: PortfolioData | null; // Adjust type as needed
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ portfolio }) => {
	// const p = portfolio;
	// console.log(p);

	return (
		<Layout>
			<h1>{portfolio?.profile.name}</h1>
		</Layout>
	);
};

export default AdminDashboard;
