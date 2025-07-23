import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../firebase/config";

type PrivateRouteProps = {
	children: React.ReactNode;
};
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [checking, setChecking] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setChecking(false);
		});
		return () => unsubscribe();
	}, []);

	if (checking) return <div>Loading...</div>;

	return user ? children : <Navigate to="/portfolio/login" />;
};

export default PrivateRoute;
