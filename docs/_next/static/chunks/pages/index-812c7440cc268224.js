(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		80: (e, t, s) => {
			'use strict';
			(s.r(t), s.d(t, { default: () => h }));
			var a = s(5640),
				i = s(2843),
				r = s.n(i);
			let n = () =>
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
									children: (0, a.jsx)(r(), { href: 'https://hieudoanm.github.io', children: 'Hieu Doan' }),
								}),
							],
						}),
					}),
				});
			var o = s(148);
			let h = () => {
				let [{ query: e = '' }, t] = (0, o.useState)({ query: '' }),
					s = [
						{
							id: 'chess',
							href: 'https://hieudoanm.github.io/chess',
							github: 'https://github.com/hieudoanm/chess',
							image: 'https://raw.githubusercontent.com/hieudoanm/chess/refs/heads/master/images/cover.png',
							name: 'Chess',
							tags: ['cli', 'extension', 'web'],
						},
						{
							id: 'editor',
							href: 'https://hieudoanm.github.io/editor',
							github: 'https://github.com/hieudoanm/editor',
							image: 'https://raw.githubusercontent.com/hieudoanm/editor/refs/heads/master/images/cover.png',
							name: 'editor',
							tags: ['cli', 'macos', 'web'],
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
							tags: ['macos', 'web'],
						},
						{
							id: 'reverse-proxy',
							href: 'https://hieudoanm-reverse-proxy.vercel.app/',
							github: 'https://github.com/hieudoanm/reverse-proxy',
							image: 'https://raw.githubusercontent.com/hieudoanm/reverse-proxy/refs/heads/master/images/cover.png',
							name: 'Reverse Proxy',
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
					].filter((t) => {
						let { name: s = '', tags: a = [] } = t;
						return (
							s.toLowerCase().includes(e.toLowerCase()) || a.some((t) => t.toLowerCase().includes(e.toLowerCase()))
						);
					});
				return (0, a.jsxs)('div', {
					className: 'min-h-screen',
					children: [
						(0, a.jsx)(n, {}),
						(0, a.jsx)('div', {
							className: 'container mx-auto p-4 md:p-8',
							children: (0, a.jsxs)('div', {
								className: 'flex flex-col gap-y-4 md:gap-y-8',
								children: [
									(0, a.jsx)('input', {
										id: 'filter',
										name: 'filter',
										placeholder: 'Filter',
										className: 'w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none',
										value: e,
										onChange: (e) => {
											t((t) => ({ ...t, query: e.target.value }));
										},
									}),
									(0, a.jsx)('div', {
										className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
										children: s.map((e) => {
											let { id: t = '', href: s = '', image: i = '', name: n = '', github: o = '', tags: h = [] } = e;
											return (0, a.jsxs)(
												'div',
												{
													className:
														'overflow-hidden rounded-2xl border border-neutral-800 shadow-none shadow-neutral-100/10 transition-all hover:shadow-2xl',
													children: [
														(0, a.jsx)(r(), {
															href: s,
															target: '_blank',
															children: (0, a.jsx)('div', {
																className: 'aspect-video bg-contain bg-center bg-no-repeat',
																style: { backgroundImage: 'url('.concat(i, ')') },
															}),
														}),
														(0, a.jsxs)('div', {
															className: 'flex flex-col gap-y-2 border-t border-neutral-800 py-4',
															children: [
																(0, a.jsxs)('div', {
																	className: 'flex items-center justify-between gap-x-2 px-4',
																	children: [
																		(0, a.jsx)('h5', {
																			className: 'truncate text-base font-medium whitespace-nowrap md:text-lg',
																			children: n,
																		}),
																		(0, a.jsx)(r(), {
																			href: o,
																			className: 'text-sm underline underline-offset-4',
																			target: '_blank',
																			children: (0, a.jsx)('p', { children: 'GitHub' }),
																		}),
																	],
																}),
																(0, a.jsx)('div', {
																	className: 'flex items-center gap-x-2 px-4',
																	children: h.map((e) =>
																		(0, a.jsx)(
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
		3351: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return s(80);
				},
			]);
		},
	},
	(e) => {
		(e.O(0, [843, 636, 593, 792], () => e((e.s = 3351))), (_N_E = e.O()));
	},
]);
