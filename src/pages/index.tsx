import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
	const miniApps = [
		{
			id: 'chess',
			href: 'https://hieudoanm.github.io/chess',
			image: 'https://raw.githubusercontent.com/hieudoanm/chess/refs/heads/master/images/cover.png',
			name: 'chess',
		},
		{
			id: 'csv',
			href: 'https://hieudoanm.github.io/csv',
			image: 'https://raw.githubusercontent.com/hieudoanm/csv/refs/heads/master/images/cover.png',
			name: 'csv',
		},
		{
			id: 'numbers',
			href: 'https://hieudoanm.github.io/numbers',
			image: 'https://raw.githubusercontent.com/hieudoanm/numbers/refs/heads/master/images/cover.png',
			name: 'numbers',
		},
		{
			id: 're(d)act',
			href: 'https://hieudoanm.github.io/redact',
			image: 'https://raw.githubusercontent.com/hieudoanm/redact/refs/heads/master/images/cover.png',
			name: 're(d)act',
		},
		{
			id: 'status',
			href: 'https://hieudoanm.github.io/status',
			image: 'https://raw.githubusercontent.com/hieudoanm/status/refs/heads/master/images/cover.png',
			name: 'status',
		},
		{
			id: 'strings',
			href: 'https://hieudoanm.github.io/strings',
			image: 'https://raw.githubusercontent.com/hieudoanm/strings/refs/heads/master/images/cover.png',
			name: 'strings',
		},
	];

	return (
		<>
			<nav className="border-b border-neutral-200 shadow-sm">
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
					<h2 className="text-2xl font-extrabold md:text-3xl">Mini Apps</h2>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
						{miniApps.map(({ id = '', href = '', image = '', name = '' }) => {
							return (
								<Link key={id} href={href} target="_blank">
									<div className="overflow-hidden rounded-2xl border border-neutral-200 shadow">
										<div
											className="aspect-video bg-contain bg-center bg-no-repeat"
											style={{ backgroundImage: `url(${image})` }}
										/>
										<div className="border-t border-neutral-200 p-4">
											<h4 className="text-lg font-black md:text-xl">{name}</h4>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
