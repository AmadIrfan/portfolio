// tailwind.config.js
export default {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: { 'default': '#9333ea' }
            },
            backgroundImage: {
                "hero-pattern": "url('/herobg.webp')",
                network: "url('/network.svg')", // our animated pattern
            },
            animation: {
                network: "move 60s linear infinite",
                blink: "blink 1s step-end infinite",
            },
            keyframes: {
                move: {
                    "0%": { backgroundPosition: "0 0" },
                    "100%": { backgroundPosition: "1000px 1000px" },
                },
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
            },

        },
    },
    plugins: [

        require('flowbite/plugin')
    ],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/flowbite/**/*.js",
  ],
  
};
