import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
const api_key = import.meta.env.VITE_API_KEY;
const auth_domain = import.meta.env.VITE_AUTH_DOMAIN;
const project_id = import.meta.env.VITE_PROJECT_ID;
const storage_bucket = import.meta.env.VITE_STORAGE_BUCKET;
const messaging_sender_id = import.meta.env.VITE_MESSAGING_SENDER_ID;
const app_id = import.meta.env.VITE_APP_ID;
const db_url = import.meta.env.VITE_DATABASE_URL;
const measurement_id = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
	apiKey: api_key,
	authDomain: auth_domain,
	databaseURL: db_url,
	projectId: project_id,
	storageBucket: storage_bucket,
	messagingSenderId: messaging_sender_id,
	appId: app_id,
	measurementId: measurement_id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);

export default db;
