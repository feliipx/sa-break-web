// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                industrial: {
                    50: "#f8f9fa",
                    100: "#e9ecef",
                    800: "#343a40",
                    900: "#212529", // Gris acero profundo
                },
                brand: "#f97316", // Naranja industrial para CTAs
            },
        },
    },
    plugins: [],
};
export default config;