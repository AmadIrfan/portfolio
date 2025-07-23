
# 🚀 My Portfolio

A modern developer portfolio app built using **Vite** and connected to **Firebase Realtime Database**. This app is fast, responsive, and deployed on **GitHub Pages**.

## 🛠️ Tech Stack

- ⚡ **Vite** — Lightning-fast frontend tooling
- ⚛️ **React** — UI library
- 🔥 **Firebase Realtime Database** — Backend
- 🎨 **Tailwind CSS** *(optional)* — Styling
- ☁️ **GitHub Pages** — Deployment

## 📁 Project Structure

```md
portfolio/
├── public/
├── src/
│   ├── assets/
|   ├── Components/
|   ├── data/
│   ├── pages/
│   ├── lib/
│   ├── types/
│   ├── firebase/       # Firebase logic
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .env
├── vite.config.js
├── package.json
└── README.md

````

## 🔧 Features

- Dynamic portfolio sections (Projects, Skills, Education, etc.)
- Firebase Realtime Database integration
- Modular and reusable React components
- Responsive design
- Deployed to GitHub Pages

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AmadIrfan/portfolio.git
cd portfolio
````

### 2. Install Dependencies

```bash
npm install
```


### 3. 🔐 Environment Variables

Create a `.env` file in the root of your project and add your Firebase configuration like this:

```
# .env

VITE_API_KEY=""
VITE_AUTH_DOMAIN=""
VITE_DATABASE_URL=""
VITE_PROJECT_ID=""
VITE_STORAGE_BUCKET=""
VITE_MESSAGING_SENDER_ID=""
VITE_APP_ID=""
VITE_MEASUREMENT_ID=""
```

Then, in your `firebase.js` or `config.js` file, use these like this:

```js
// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
```

> ⚠️ **Important:** Never commit your `.env` file to version control. Add it to `.gitignore` to keep your keys secure.

---

Let me know if you'd like to include a `.env.example` as well.

### 4. Run Locally

```bash
npm run dev
```

---

## 🌐 Deployment on GitHub Pages

### 1. Install `gh-pages`

```bash
npm install --save-dev gh-pages
```

### 2. Update `vite.config.js`

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  ...,
  base: '/YOUR_REPO_NAME/', // 👈 required for GitHub Pages
});
```

### 3. Add Deployment Scripts in `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

Your site will be live at:
`https://your-username.github.io/your-repo-name`

---

## 📤 Future Improvements

* Add a CMS-like admin panel for editing
* Enable user authentication for editing content
* Add animations and transitions
* Improve Lighthouse scores

## 🙌 Acknowledgements

* [Vite](https://vitejs.dev/)
* [Firebase](https://firebase.google.com/)
* [React](https://react.dev/)
* [GitHub Pages](https://pages.github.com/)

## 📄 License

MIT License © [Amad Irfan](https://github.com/Amadirfan)

