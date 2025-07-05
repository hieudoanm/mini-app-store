import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
	const miniApps = [
		{
			id: 'calculator',
			href: 'https://hieudoanm.github.io/calculator',
			github: 'https://github.com/hieudoanm/calculator',
			image: 'https://raw.githubusercontent.com/hieudoanm/calculator/refs/heads/master/images/cover.png',
			name: 'calculator',
		},
		{
			id: 'chess',
			href: 'https://hieudoanm.github.io/chess',
			github: 'https://github.com/hieudoanm/chess',
			image: 'https://raw.githubusercontent.com/hieudoanm/chess/refs/heads/master/images/cover.png',
			name: 'chess',
		},
		{
			id: 'clock',
			href: 'https://hieudoanm.github.io/clock',
			github: 'https://github.com/hieudoanm/clock',
			image: 'https://raw.githubusercontent.com/hieudoanm/clock/refs/heads/master/images/cover.png',
			name: 'clock',
		},
		{
			id: 'colors',
			href: 'https://hieudoanm.github.io/colors',
			github: 'https://github.com/hieudoanm/colors',
			image: 'https://raw.githubusercontent.com/hieudoanm/colors/refs/heads/master/images/cover.png',
			name: 'colors',
		},
		{
			id: 'csv',
			href: 'https://hieudoanm.github.io/csv',
			github: 'https://github.com/hieudoanm/csv',
			image: 'https://raw.githubusercontent.com/hieudoanm/csv/refs/heads/master/images/cover.png',
			name: 'csv',
		},
		{
			id: 'gh',
			href: 'https://hieudoanm.github.io/gh',
			github: 'https://github.com/hieudoanm/gh',
			image: 'https://raw.githubusercontent.com/hieudoanm/gh/refs/heads/master/images/cover.png',
			name: 'gh',
		},
		{
			id: 'images',
			href: 'https://hieudoanm.github.io/images',
			github: 'https://github.com/hieudoanm/images',
			image: 'https://raw.githubusercontent.com/hieudoanm/images/refs/heads/master/images/cover.png',
			name: 'images',
		},
		{
			id: 'json',
			href: 'https://hieudoanm.github.io/json',
			github: 'https://github.com/hieudoanm/json',
			image: 'https://raw.githubusercontent.com/hieudoanm/json/refs/heads/master/images/cover.png',
			name: 'json',
		},
		{
			id: 'markup',
			href: 'https://hieudoanm.github.io/markup',
			github: 'https://github.com/hieudoanm/markup',
			image: 'https://raw.githubusercontent.com/hieudoanm/markup/refs/heads/master/images/cover.png',
			name: 'markup',
		},
		{
			id: 're(d)act',
			href: 'https://hieudoanm.github.io/redact',
			github: 'https://github.com/hieudoanm/redact',
			image: 'https://raw.githubusercontent.com/hieudoanm/redact/refs/heads/master/images/cover.png',
			name: 're(d)act',
		},
		{
			id: 'status',
			href: 'https://hieudoanm.github.io/status',
			github: 'https://github.com/hieudoanm/status',
			image: 'https://raw.githubusercontent.com/hieudoanm/status/refs/heads/master/images/cover.png',
			name: 'status',
		},
		{
			id: 'strings',
			href: 'https://hieudoanm.github.io/strings',
			github: 'https://github.com/hieudoanm/strings',
			image: 'https://raw.githubusercontent.com/hieudoanm/strings/refs/heads/master/images/cover.png',
			name: 'strings',
		},
	];

	return (
		<>
			<nav className="border-b border-neutral-800">
				<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
					<div className="flex items-center justify-between">
						<h1 className="font-black">Store</h1>
						<div className="flex items-center gap-x-2 md:gap-x-4">
							<Link href="/">Mini Apps</Link>
						</div>
					</div>
				</div>
			</nav>
			<div className="container mx-auto p-4 md:p-8">
				<div className="flex flex-col gap-y-4 md:gap-y-8">
					<h2 className="text-2xl font-extrabold md:text-3xl">Mini Apps ({miniApps.length})</h2>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
						{miniApps.map(({ id = '', href = '', image = '', name = '', github = '' }) => {
							return (
								<div
									key={id}
									className="overflow-hidden rounded-2xl border border-neutral-800 shadow-none shadow-neutral-100/10 transition-all hover:shadow-2xl">
									<Link href={href} target="_blank">
										<div
											className="aspect-video bg-contain bg-center bg-no-repeat"
											style={{ backgroundImage: `url(${image})` }}
										/>
									</Link>
									<div className="flex items-center justify-between border-t border-neutral-800 p-4">
										<h4 className="text-lg font-black md:text-xl">{name}</h4>
										<Link href={github} className="text-sm underline underline-offset-4" target="_blank">
											<p>GitHub</p>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
