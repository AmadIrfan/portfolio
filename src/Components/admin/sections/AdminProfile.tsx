import { type FC } from "react";
import ProfileManager from "./ProfileManager";
import type { PortfolioData } from "../../../types/portfolio";
import Layout from "../Layout";

type AdminProfileProp = {
	portfolio: PortfolioData;
};
const AdminProfile: FC<AdminProfileProp> = ({ portfolio }) => {
	return (
		<Layout>
			<ProfileManager profile={portfolio.profile} />
		</Layout>
	);
};

export default AdminProfile;
