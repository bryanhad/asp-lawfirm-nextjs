import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#282e3f",
                secondary: "#333a4d",
                accent: "#c18f59",
                glassmorphism: "rgba(16, 16, 18, 0.60)",
            },
        },
    },
    plugins: [],
}
export default config
