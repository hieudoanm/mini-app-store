(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		2128: (e, t, a) => {
			'use strict';
			(a.r(t), a.d(t, { default: () => n }));
			var s = a(5640),
				i = a(7864),
				r = a.n(i),
				o = a(148);
			let n = () => {
				let [{ query: e = '' }, t] = (0, o.useState)({ query: '' }),
					a = [
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
							image:
								'https://raw.githubusercontent.com/hieudoanm/openapi-to-postmanv2/refs/heads/master/images/cover.png',
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
					].filter((t) => {
						let { name: a = '', tags: s = [] } = t;
						return (
							a.toLowerCase().includes(e.toLowerCase()) || s.some((t) => t.toLowerCase().includes(e.toLowerCase()))
						);
					});
				return (0, s.jsxs)('div', {
					className: 'min-h-screen',
					children: [
						(0, s.jsx)('nav', {
							className: 'border-b border-neutral-800',
							children: (0, s.jsx)('div', {
								className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
								children: (0, s.jsxs)('div', {
									className: 'flex items-center justify-between',
									children: [
										(0, s.jsxs)('h1', { className: 'font-black', children: ['Store (', a.length, ')'] }),
										(0, s.jsx)('div', {
											className: 'flex items-center gap-x-2 md:gap-x-4',
											children: (0, s.jsx)(r(), { href: 'https://hieudoanm.github.io', children: 'Hieu Doan' }),
										}),
									],
								}),
							}),
						}),
						(0, s.jsx)('div', {
							className: 'container mx-auto p-4 md:p-8',
							children: (0, s.jsxs)('div', {
								className: 'flex flex-col gap-y-4 md:gap-y-8',
								children: [
									(0, s.jsx)('input', {
										id: 'filter',
										name: 'filter',
										placeholder: 'Filter',
										className: 'w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none',
										value: e,
										onChange: (e) => {
											t((t) => ({ ...t, query: e.target.value }));
										},
									}),
									(0, s.jsx)('div', {
										className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4',
										children: a.map((e) => {
											let { id: t = '', href: a = '', image: i = '', name: o = '', github: n = '', tags: h = [] } = e;
											return (0, s.jsxs)(
												'div',
												{
													className:
														'overflow-hidden rounded-2xl border border-neutral-800 shadow-none shadow-neutral-100/10 transition-all hover:shadow-2xl',
													children: [
														(0, s.jsx)(r(), {
															href: a,
															target: '_blank',
															children: (0, s.jsx)('div', {
																className: 'aspect-video bg-contain bg-center bg-no-repeat',
																style: { backgroundImage: 'url('.concat(i, ')') },
															}),
														}),
														(0, s.jsxs)('div', {
															className: 'flex flex-col gap-y-2 border-t border-neutral-800 py-4',
															children: [
																(0, s.jsxs)('div', {
																	className: 'flex items-center justify-between gap-x-2 px-4',
																	children: [
																		(0, s.jsx)('h5', {
																			className: 'truncate text-base font-medium whitespace-nowrap md:text-lg',
																			children: o,
																		}),
																		(0, s.jsx)(r(), {
																			href: n,
																			className: 'text-sm underline underline-offset-4',
																			target: '_blank',
																			children: (0, s.jsx)('p', { children: 'GitHub' }),
																		}),
																	],
																}),
																(0, s.jsx)('div', {
																	className: 'flex items-center gap-x-2 px-4',
																	children: h.map((e) =>
																		(0, s.jsx)(
																			'span',
																			{
																				className:
																					'block rounded-sm bg-neutral-100 px-1 py-0.5 text-xs font-black text-neutral-900',
																				children: e,
																			},
																			e,
																		),
																	),
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
		8898: (e, t, a) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return a(2128);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		(e.O(0, [864, 636, 593, 792], () => t(8898)), (_N_E = e.O()));
	},
]);
