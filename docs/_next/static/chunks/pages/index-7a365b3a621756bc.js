(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		2128: (e, t, s) => {
			'use strict';
			(s.r(t), s.d(t, { default: () => r }));
			var a = s(5640),
				i = s(7864),
				h = s.n(i);
			let r = () => {
				let e = [
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
						id: 'converter',
						href: 'https://hieudoanm.github.io/converter',
						github: 'https://github.com/hieudoanm/converter',
						image: 'https://raw.githubusercontent.com/hieudoanm/converter/refs/heads/master/images/cover.png',
						name: 'converter',
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
						id: 'markup',
						href: 'https://hieudoanm.github.io/markup',
						github: 'https://github.com/hieudoanm/markup',
						image: 'https://raw.githubusercontent.com/hieudoanm/markup/refs/heads/master/images/cover.png',
						name: 'markup',
					},
					{
						id: 'openapi-to-postmanv2',
						href: 'https://openapi-to-postmanv2.vercel.app/',
						github: 'https://github.com/hieudoanm/openapi-to-postmanv2',
						image:
							'https://raw.githubusercontent.com/hieudoanm/openapi-to-postmanv2/refs/heads/master/images/cover.png',
						name: 'OpenAPI to PostmanV2',
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
				return (0, a.jsxs)(a.Fragment, {
					children: [
						(0, a.jsx)('nav', {
							className: 'border-b border-neutral-800',
							children: (0, a.jsx)('div', {
								className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
								children: (0, a.jsxs)('div', {
									className: 'flex items-center justify-between',
									children: [
										(0, a.jsx)('h1', { className: 'font-black', children: 'Store' }),
										(0, a.jsx)('div', {
											className: 'flex items-center gap-x-2 md:gap-x-4',
											children: (0, a.jsx)(h(), { href: '/', children: 'Mini Apps' }),
										}),
									],
								}),
							}),
						}),
						(0, a.jsx)('div', {
							className: 'container mx-auto p-4 md:p-8',
							children: (0, a.jsxs)('div', {
								className: 'flex flex-col gap-y-4 md:gap-y-8',
								children: [
									(0, a.jsxs)('h2', {
										className: 'text-2xl font-extrabold md:text-3xl',
										children: ['Mini Apps (', e.length, ')'],
									}),
									(0, a.jsx)('div', {
										className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
										children: e.map((e) => {
											let { id: t = '', href: s = '', image: i = '', name: r = '', github: o = '' } = e;
											return (0, a.jsxs)(
												'div',
												{
													className:
														'overflow-hidden rounded-2xl border border-neutral-800 shadow-none shadow-neutral-100/10 transition-all hover:shadow-2xl',
													children: [
														(0, a.jsx)(h(), {
															href: s,
															target: '_blank',
															children: (0, a.jsx)('div', {
																className: 'aspect-video bg-contain bg-center bg-no-repeat',
																style: { backgroundImage: 'url('.concat(i, ')') },
															}),
														}),
														(0, a.jsxs)('div', {
															className: 'flex items-center justify-between border-t border-neutral-800 p-4',
															children: [
																(0, a.jsx)('h4', { className: 'text-lg font-black md:text-xl', children: r }),
																(0, a.jsx)(h(), {
																	href: o,
																	className: 'text-sm underline underline-offset-4',
																	target: '_blank',
																	children: (0, a.jsx)('p', { children: 'GitHub' }),
																}),
															],
														}),
													],
												},
												t,
											);
										}),
									}),
								],
							}),
						}),
					],
				});
			};
		},
		8898: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return s(2128);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		(e.O(0, [864, 636, 593, 792], () => t(8898)), (_N_E = e.O()));
	},
]);
