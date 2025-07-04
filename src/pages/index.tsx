import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
	return (
		<>
			<nav className="border-b border-neutral-200 shadow-sm">
				<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
					<h1 className="font-black">Mini App Store</h1>
				</div>
			</nav>
			<div className="container mx-auto p-4 md:p-8">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
					{[
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
							id: 'strings',
							href: 'https://hieudoanm.github.io/strings',
							image: 'https://raw.githubusercontent.com/hieudoanm/strings/refs/heads/master/images/cover.png',
							name: 'strings',
						},
					].map(({ id = '', href = '', image = '', name = '' }) => {
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
		</>
	);
};

export default HomePage;
