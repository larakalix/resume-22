module.exports = {
    mode: "jit",
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            montserrat: ["Inter", "sans-serif"],
        },
        borderRadius: {
            "v-rounded": "0.30rem",
            full: "1rem",
        },
        extend: {
            colors: {
                "v-blue": "#0070f3",
                "v-gray": "#696969",
                "v-border": "#333",
                "v-bullet": "#111",
                "v-tag": "#f3f4f6",
                "v-black": "#0c0c0c",
            },
            fontSize: {
                "v-small": "0.875rem",
                "v-main-title": "2rem",
                "v-single-post-title": "6.25rem",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
