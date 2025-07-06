import { NextPage } from 'next';
import Link from 'next/link';

type Tag = 'cli' | 'extension' | 'web';

type MiniApp = { id: string; href: string; github: string; image: string; name: string; tags: Tag[] };

const HomePage: NextPage = () => {
	const miniApps: MiniApp[] = [
		{
			id: 'calculator',
			href: 'https://hieudoanm.github.io/calculator',
			github: 'https://github.com/hieudoanm/calculator',
			image: 'https://raw.githubusercontent.com/hieudoanm/calculator/refs/heads/master/images/cover.png',
			name: 'Calculator',
			tags: ['cli', 'web'],
		},
		{
			id: 'chess',
			href: 'https://hieudoanm.github.io/chess',
			github: 'https://github.com/hieudoanm/chess',
			image: 'https://raw.githubusercontent.com/hieudoanm/chess/refs/heads/master/images/cover.png',
			name: 'Chess',
			tags: ['cli', 'extension', 'web'],
		},
		{
			id: 'clock',
			href: 'https://hieudoanm.github.io/clock',
			github: 'https://github.com/hieudoanm/clock',
			image: 'https://raw.githubusercontent.com/hieudoanm/clock/refs/heads/master/images/cover.png',
			name: 'Clock',
			tags: ['cli', 'web'],
		},
		{
			id: 'colors',
			href: 'https://hieudoanm.github.io/colors',
			github: 'https://github.com/hieudoanm/colors',
			image: 'https://raw.githubusercontent.com/hieudoanm/colors/refs/heads/master/images/cover.png',
			name: 'Colors',
			tags: ['cli', 'web'],
		},
		{
			id: 'converter',
			href: 'https://hieudoanm.github.io/converter',
			github: 'https://github.com/hieudoanm/converter',
			image: 'https://raw.githubusercontent.com/hieudoanm/converter/refs/heads/master/images/cover.png',
			name: 'Converter',
			tags: ['web'],
		},
		{
			id: 'gh',
			href: 'https://hieudoanm.github.io/gh',
			github: 'https://github.com/hieudoanm/gh',
			image: 'https://raw.githubusercontent.com/hieudoanm/gh/refs/heads/master/images/cover.png',
			name: 'gh',
			tags: ['cli', 'extension', 'web'],
		},
		{
			id: 'images',
			href: 'https://hieudoanm.github.io/images',
			github: 'https://github.com/hieudoanm/images',
			image: 'https://raw.githubusercontent.com/hieudoanm/images/refs/heads/master/images/cover.png',
			name: 'Images',
			tags: ['cli', 'web'],
		},
		{
			id: 'markup',
			href: 'https://hieudoanm.github.io/markup',
			github: 'https://github.com/hieudoanm/markup',
			image: 'https://raw.githubusercontent.com/hieudoanm/markup/refs/heads/master/images/cover.png',
			name: 'Markup',
			tags: ['web'],
		},
		{
			id: 'openapi-to-postmanv2',
			href: 'https://openapi-to-postmanv2.vercel.app/',
			github: 'https://github.com/hieudoanm/openapi-to-postmanv2',
			image: 'https://raw.githubusercontent.com/hieudoanm/openapi-to-postmanv2/refs/heads/master/images/cover.png',
			name: 'OpenAPI to PostmanV2',
			tags: ['web'],
		},
		{
			id: 're(d)act',
			href: 'https://hieudoanm.github.io/redact',
			github: 'https://github.com/hieudoanm/redact',
			image: 'https://raw.githubusercontent.com/hieudoanm/redact/refs/heads/master/images/cover.png',
			name: 'Re(d)act',
			tags: ['web'],
		},
		{
			id: 'status',
			href: 'https://hieudoanm.github.io/status',
			github: 'https://github.com/hieudoanm/status',
			image: 'https://raw.githubusercontent.com/hieudoanm/status/refs/heads/master/images/cover.png',
			name: 'Status',
			tags: ['cli', 'web'],
		},
		{
			id: 'strings',
			href: 'https://hieudoanm.github.io/strings',
			github: 'https://github.com/hieudoanm/strings',
			image: 'https://raw.githubusercontent.com/hieudoanm/strings/refs/heads/master/images/cover.png',
			name: 'Strings',
			tags: ['cli', 'web'],
		},
	];

	return (
		<>
			<nav className="border-b border-neutral-800">
				<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
					<div className="flex items-center justify-between">
						<h1 className="font-black">Store</h1>
						<div className="flex items-center gap-x-2 md:gap-x-4">
							<Link href="https://hieudoanm.github.io">Hieu Doan</Link>
						</div>
					</div>
				</div>
			</nav>
			<div className="container mx-auto p-4 md:p-8">
				<div className="flex flex-col gap-y-4 md:gap-y-8">
					<h2 className="text-2xl font-extrabold md:text-3xl">Mini Apps ({miniApps.length})</h2>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
						{miniApps.map(({ id = '', href = '', image = '', name = '', github = '', tags = [] }) => {
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
									<div className="flex flex-col gap-y-2 border-t border-neutral-800 py-4">
										<div className="flex items-center justify-between gap-x-2 px-4">
											<h5 className="truncate text-base font-medium whitespace-nowrap md:text-lg">{name}</h5>
											<Link href={github} className="text-sm underline underline-offset-4" target="_blank">
												<p>GitHub</p>
											</Link>
										</div>
										<div className="flex items-center gap-x-2 px-4">
											{tags.map((tag: Tag) => {
												return (
													<span
														key={tag}
														className="block rounded-sm bg-neutral-100 px-1 py-0.5 text-xs font-black text-neutral-900">
														{tag}
													</span>
												);
											})}
										</div>
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
