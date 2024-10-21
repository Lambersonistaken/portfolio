import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'landing': "url('./assets/landingapp.png')",
				'chat': "url('./assets/chatpdfapp.png')",
				'spotify': "url('./assets/spotifyapp.png')",
				'notes': "url('./assets/notesapp.png')",
			},
			backgroundSize: {
				'50%': '50%',
				'16': '24rem'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
