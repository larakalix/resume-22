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
        extend: {
            colors: {
                "v-blue": "#0070f3",
                "v-gray": "#696969",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
