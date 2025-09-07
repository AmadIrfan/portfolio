import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			// console.log(email, password);

			await signInWithEmailAndPassword(auth, email, password);
			navigate("/admin");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Login failed");
		}
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-gray-100">
			<form
				onSubmit={handleLogin}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
			>
				<h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
				{error && <p className="text-red-500 text-sm mb-2">{error}</p>}
				<input
					type="email"
					placeholder="Email"
					className="w-full mb-4 px-3 py-2 border rounded"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					className="w-full mb-4 px-3 py-2 border rounded"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
