import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://notes.angelware.net',
	integrations: [
		starlight({
			title: 'ANGELWARE',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/kay-xr',
				twitter: 'https://twitter.com/angeIware',
				discord: 'https://discord.angelware.net/'
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Notes',
					autogenerate: { directory: 'notes' },
				},
				{
					label: 'Worlds',
					autogenerate: { directory: 'worlds' },
				}
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
