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
				github: 'https://github.com/uhkayla',
				twitter: 'https://twitter.com/angeIware',
				discord: 'https://discord.angelware.net/'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Upgrading your project to Unity 2022 without issues.', link: '/guides/2022/' },
					],
				},
				// {
				// 	// label: 'Reference',
				// 	// autogenerate: { directory: 'reference' },
				// },
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
