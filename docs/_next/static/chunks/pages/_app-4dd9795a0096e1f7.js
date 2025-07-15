(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		1397: (a, e, s) => {
			a.exports = s(8982);
		},
		2218: (a) => {
			a.exports = {
				style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
				className: '__className_27b809',
				variable: '__variable_27b809',
			};
		},
		2885: (a, e, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return s(6871);
				},
			]);
		},
		3817: (a) => {
			a.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_75602d',
				variable: '__variable_75602d',
			};
		},
		6871: (a, e, s) => {
			'use strict';
			(s.r(e), s.d(e, { default: () => o }));
			var l = s(5640);
			s(9390);
			var t = s(3817),
				n = s.n(t),
				r = s(2218),
				_ = s.n(r),
				c = s(1397),
				i = s.n(c);
			let o = (a) => {
				let { Component: e, pageProps: s } = a;
				return (0, l.jsxs)(l.Fragment, {
					children: [
						(0, l.jsx)(i(), { children: (0, l.jsx)('title', { children: 'Store' }) }),
						(0, l.jsx)('div', {
							className: ''.concat(n().className, ' ').concat(_().className),
							children: (0, l.jsx)('div', {
								className: 'bg-neutral-900 text-neutral-100',
								children: (0, l.jsx)(e, { ...s }),
							}),
						}),
					],
				});
			};
		},
		9390: () => {},
	},
	(a) => {
		var e = (e) => a((a.s = e));
		(a.O(0, [593, 792], () => (e(2885), e(9987))), (_N_E = a.O()));
	},
]);
