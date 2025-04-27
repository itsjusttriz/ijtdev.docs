// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const GITHUB_REPO_URL = 'https://github.com/itsjusttriz/ijtdev.docs';

/** @type {import('@docusaurus/types').Config} */
export default {
	title: 'IJTDEV',
	url: 'https://docs.itsjusttriz.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	organizationName: 'IJTDEV', // Usually your GitHub org/user name.
	projectName: 'ijtdev.docs', // Usually your repo name.
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: `${GITHUB_REPO_URL}/edit/master/apps/v2`,
					routeBasePath: '/',
				},
				blog: false,
				theme: { customCss: require.resolve('./src/css/custom.css') },
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'IJTDEV Docs',
				items: [
					{
						href: GITHUB_REPO_URL,
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'http://discord.itsjusttriz.com',
							},
							{
								label: 'Twitter/X',
								href: 'https://x.com/ijtdev_',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: GITHUB_REPO_URL,
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()}, IJTDEV.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};
