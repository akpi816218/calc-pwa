import { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

export const config: Config = {
	content: [
		'src/**/*.tsx',
		'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: { logo: "url('/assets/img/akpi_logo.svg')" }
		}
	},
	plugins: [nextui()]
};

export default config;
