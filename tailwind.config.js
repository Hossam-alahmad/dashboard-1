module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "pr-color": "var(--main-color)",
                "sec-color": "var(--second-color)",
                "txt-color": "var(--txt-color)",
                "pr-bg": "var(--primary-bg)",
                "sec-bg": "var(--second-bg)",
                "badge-danger": "var(--main-color-red)",
                "badge-primary": "var(--main-color-blue)",
                "badge-success": "var(--main-color-green)",
                "badge-warning": "var(--main-color-orange)",

                "txt-color-dark": "var(--txt-color-dark)",
                "pr-bg-dark": "var(--primary-bg-dark)",
                "sec-bg-dark": "var(--second-bg-dark)",
                "shadow-color-dark": "var(--shadow-color-dark)",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
