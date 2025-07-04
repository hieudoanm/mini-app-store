(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		386: (e, t, r) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				!(function (e, t) {
					for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
				})(t, {
					default: function () {
						return x;
					},
					useLinkStatus: function () {
						return j;
					},
				}));
			let n = r(8781),
				o = r(5640),
				u = n._(r(148)),
				l = r(2480),
				a = r(2402),
				s = r(6939),
				i = r(9925),
				c = r(5686),
				f = r(3295),
				d = r(7233),
				p = r(4434),
				h = r(5767),
				m = r(6492);
			r(5446);
			let b = new Set();
			function g(e, t, r, n) {
				if ((0, a.isLocalURL)(t)) {
					if (!n.bypassPrefetchedCheck) {
						let o = t + '%' + r + '%' + (void 0 !== n.locale ? n.locale : 'locale' in e ? e.locale : void 0);
						if (b.has(o)) return;
						b.add(o);
					}
					e.prefetch(t, r, n).catch((e) => {});
				}
			}
			function v(e) {
				return 'string' == typeof e ? e : (0, s.formatUrl)(e);
			}
			let y = u.default.forwardRef(function (e, t) {
					let r,
						n,
						{
							href: s,
							as: b,
							children: y,
							prefetch: _ = null,
							passHref: j,
							replace: x,
							shallow: M,
							scroll: O,
							locale: P,
							onClick: k,
							onNavigate: w,
							onMouseEnter: C,
							onTouchStart: E,
							legacyBehavior: N = !1,
							...R
						} = e;
					((r = y), N && ('string' == typeof r || 'number' == typeof r) && (r = (0, o.jsx)('a', { children: r })));
					let L = u.default.useContext(f.RouterContext),
						I = !1 !== _,
						{ href: S, as: T } = u.default.useMemo(() => {
							if (!L) {
								let e = v(s);
								return { href: e, as: b ? v(b) : e };
							}
							let [e, t] = (0, l.resolveHref)(L, s, !0);
							return { href: e, as: b ? (0, l.resolveHref)(L, b) : t || e };
						}, [L, s, b]),
						D = u.default.useRef(S),
						A = u.default.useRef(T);
					N && (n = u.default.Children.only(r));
					let U = N ? n && 'object' == typeof n && n.ref : t,
						[K, H, X] = (0, d.useIntersection)({ rootMargin: '200px' }),
						q = u.default.useCallback(
							(e) => {
								((A.current !== T || D.current !== S) && (X(), (A.current = T), (D.current = S)), K(e));
							},
							[T, S, X, K],
						),
						z = (0, m.useMergedRef)(q, U);
					u.default.useEffect(() => {
						L && H && I && g(L, S, T, { locale: P });
					}, [T, S, H, P, I, null == L ? void 0 : L.locale, L]);
					let B = {
						ref: z,
						onClick(e) {
							(N || 'function' != typeof k || k(e),
								N && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
								L &&
									(e.defaultPrevented ||
										(function (e, t, r, n, o, u, l, s, i) {
											let { nodeName: c } = e.currentTarget;
											if (
												!(
													('A' === c.toUpperCase() &&
														(function (e) {
															let t = e.currentTarget.getAttribute('target');
															return (
																(t && '_self' !== t) ||
																e.metaKey ||
																e.ctrlKey ||
																e.shiftKey ||
																e.altKey ||
																(e.nativeEvent && 2 === e.nativeEvent.which)
															);
														})(e)) ||
													e.currentTarget.hasAttribute('download')
												)
											) {
												if (!(0, a.isLocalURL)(r)) {
													o && (e.preventDefault(), location.replace(r));
													return;
												}
												(e.preventDefault(),
													(() => {
														if (i) {
															let e = !1;
															if (
																(i({
																	preventDefault: () => {
																		e = !0;
																	},
																}),
																e)
															)
																return;
														}
														let e = null == l || l;
														'beforePopState' in t
															? t[o ? 'replace' : 'push'](r, n, { shallow: u, locale: s, scroll: e })
															: t[o ? 'replace' : 'push'](n || r, { scroll: e });
													})());
											}
										})(e, L, S, T, x, M, O, P, w)));
						},
						onMouseEnter(e) {
							(N || 'function' != typeof C || C(e),
								N && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
								L && g(L, S, T, { locale: P, priority: !0, bypassPrefetchedCheck: !0 }));
						},
						onTouchStart: function (e) {
							(N || 'function' != typeof E || E(e),
								N && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e),
								L && g(L, S, T, { locale: P, priority: !0, bypassPrefetchedCheck: !0 }));
						},
					};
					if ((0, i.isAbsoluteUrl)(T)) B.href = T;
					else if (!N || j || ('a' === n.type && !('href' in n.props))) {
						let e = void 0 !== P ? P : null == L ? void 0 : L.locale;
						B.href =
							((null == L ? void 0 : L.isLocaleDomain) &&
								(0, p.getDomainLocale)(T, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales)) ||
							(0, h.addBasePath)((0, c.addLocale)(T, e, null == L ? void 0 : L.defaultLocale));
					}
					return N ? u.default.cloneElement(n, B) : (0, o.jsx)('a', { ...R, ...B, children: r });
				}),
				_ = (0, u.createContext)({ pending: !1 }),
				j = () => (0, u.useContext)(_),
				x = y;
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		2128: (e, t, r) => {
			'use strict';
			(r.r(t), r.d(t, { default: () => l }));
			var n = r(5640),
				o = r(7864),
				u = r.n(o);
			let l = () =>
				(0, n.jsxs)(n.Fragment, {
					children: [
						(0, n.jsx)('nav', {
							className: 'border-b border-neutral-200 shadow-sm',
							children: (0, n.jsx)('div', {
								className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
								children: (0, n.jsx)('h1', { className: 'font-black', children: 'Mini App Store' }),
							}),
						}),
						(0, n.jsx)('div', {
							className: 'container mx-auto p-4 md:p-8',
							children: (0, n.jsx)('div', {
								className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
								children: [
									{
										id: 'chess',
										href: 'https://hieudoanm.github.io/chess',
										image: 'https://raw.githubusercontent.com/hieudoanm/chess/refs/heads/master/images/cover.png',
										name: 'chess',
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
								].map((e) => {
									let { id: t = '', href: r = '', image: o = '', name: l = '' } = e;
									return (0, n.jsx)(
										u(),
										{
											href: r,
											target: '_blank',
											children: (0, n.jsxs)('div', {
												className: 'overflow-hidden rounded-2xl border border-neutral-200 shadow',
												children: [
													(0, n.jsx)('div', {
														className: 'aspect-video bg-contain bg-center bg-no-repeat',
														style: { backgroundImage: 'url('.concat(o, ')') },
													}),
													(0, n.jsx)('div', {
														className: 'border-t border-neutral-200 p-4',
														children: (0, n.jsx)('h4', { className: 'text-lg font-black md:text-xl', children: l }),
													}),
												],
											}),
										},
										t,
									);
								}),
							}),
						}),
					],
				});
		},
		4434: (e, t, r) => {
			'use strict';
			function n(e, t, r, n) {
				return !1;
			}
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'getDomainLocale', {
					enumerable: !0,
					get: function () {
						return n;
					},
				}),
				r(1092),
				('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
					void 0 === t.default.__esModule &&
					(Object.defineProperty(t.default, '__esModule', { value: !0 }),
					Object.assign(t.default, t),
					(e.exports = t.default)));
		},
		5446: (e, t) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'errorOnce', {
					enumerable: !0,
					get: function () {
						return r;
					},
				}));
			let r = (e) => {};
		},
		6492: (e, t, r) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useMergedRef', {
					enumerable: !0,
					get: function () {
						return o;
					},
				}));
			let n = r(148);
			function o(e, t) {
				let r = (0, n.useRef)(null),
					o = (0, n.useRef)(null);
				return (0, n.useCallback)(
					(n) => {
						if (null === n) {
							let e = r.current;
							e && ((r.current = null), e());
							let t = o.current;
							t && ((o.current = null), t());
						} else (e && (r.current = u(e, n)), t && (o.current = u(t, n)));
					},
					[e, t],
				);
			}
			function u(e, t) {
				if ('function' != typeof e)
					return (
						(e.current = t),
						() => {
							e.current = null;
						}
					);
				{
					let r = e(t);
					return 'function' == typeof r ? r : () => e(null);
				}
			}
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		7233: (e, t, r) => {
			'use strict';
			(Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'useIntersection', {
					enumerable: !0,
					get: function () {
						return s;
					},
				}));
			let n = r(148),
				o = r(9780),
				u = 'function' == typeof IntersectionObserver,
				l = new Map(),
				a = [];
			function s(e) {
				let { rootRef: t, rootMargin: r, disabled: s } = e,
					i = s || !u,
					[c, f] = (0, n.useState)(!1),
					d = (0, n.useRef)(null),
					p = (0, n.useCallback)((e) => {
						d.current = e;
					}, []);
				return (
					(0, n.useEffect)(() => {
						if (u) {
							if (i || c) return;
							let e = d.current;
							if (e && e.tagName)
								return (function (e, t, r) {
									let {
										id: n,
										observer: o,
										elements: u,
									} = (function (e) {
										let t,
											r = { root: e.root || null, margin: e.rootMargin || '' },
											n = a.find((e) => e.root === r.root && e.margin === r.margin);
										if (n && (t = l.get(n))) return t;
										let o = new Map();
										return (
											(t = {
												id: r,
												observer: new IntersectionObserver((e) => {
													e.forEach((e) => {
														let t = o.get(e.target),
															r = e.isIntersecting || e.intersectionRatio > 0;
														t && r && t(r);
													});
												}, e),
												elements: o,
											}),
											a.push(r),
											l.set(r, t),
											t
										);
									})(r);
									return (
										u.set(e, t),
										o.observe(e),
										function () {
											if ((u.delete(e), o.unobserve(e), 0 === u.size)) {
												(o.disconnect(), l.delete(n));
												let e = a.findIndex((e) => e.root === n.root && e.margin === n.margin);
												e > -1 && a.splice(e, 1);
											}
										}
									);
								})(e, (e) => e && f(e), { root: null == t ? void 0 : t.current, rootMargin: r });
						} else if (!c) {
							let e = (0, o.requestIdleCallback)(() => f(!0));
							return () => (0, o.cancelIdleCallback)(e);
						}
					}, [i, r, t, c, d.current]),
					[
						p,
						c,
						(0, n.useCallback)(() => {
							f(!1);
						}, []),
					]
				);
			}
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		7864: (e, t, r) => {
			e.exports = r(386);
		},
		8898: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return r(2128);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		(e.O(0, [636, 593, 792], () => t(8898)), (_N_E = e.O()));
	},
]);
