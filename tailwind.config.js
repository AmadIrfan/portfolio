// tailwind.config.js
export default {
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
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
    plugins: [],
};
