import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    "500": "#8d1d18",
                    "600": "#680c0c",
                    "900": "#1d0908"
                },
                yellow: {
                    "500": "#eb9500"
                },
                bege: {
                    "500": "#fddeb2"
                },
            },
            backgroundImage: {
                "fundo": "url('/img/background.png')",
                "guerreiro": "url('/img/guerreiro.png')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
