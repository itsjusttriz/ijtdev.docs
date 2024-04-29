type NavLink = {
	title: string;
	url?: string;
};
type NavGroup = {
	title: string;
	children: NavLink[];
};

export const navLinks: (NavLink | NavGroup)[] = [
	{
		title: 'Homepage',
		url: '/',
	},
	{
		title: 'Documentation',
		children: [
			{
				title: 'ijtdev/api',
				url: '/ijtdev-api',
			},
		],
	},
	{
		title: 'Patch Notes',
		children: [
			{
				title: 'ijtdev/api',
				url: '/changelog/ijtdev-api',
			},
			{
				title: 'ijtdev/docs (here)',
				url: '/changelog/ijtdev-docs',
			},
		],
	},
];
