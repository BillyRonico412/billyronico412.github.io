module.exports = {
    darkMode: "class",
    content: [
        "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-element": "hsl(209, 23%, 22%)",
                "dark-background": "hsl(207, 26%, 17%)",
                "light-text": "hsl(200, 15%, 8%)",
                "light-input": "hsl(0, 0%, 52%)",
                "light-background": "hsl(0, 0%, 98%)",
            }
        },
    },
    plugins: [],
}
