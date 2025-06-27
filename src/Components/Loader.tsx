import type React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loader: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
	return (
		<div
			className={`flex flex-col justify-center items-center h-screen animate-fade-in space-y-6 	  ${
				darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
			} `}
		>
			<div className="scale-110">
				<HashLoader color={`#9333ea`} />
			</div>
		</div>
	);
};

export default Loader;
