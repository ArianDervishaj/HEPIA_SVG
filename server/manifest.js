const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "HEPIA_SVG/_app",
	assets: new Set(["Classes/PCO/ConcVsSeq.svg","Classes/POO/class.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.VYoLjr-g.js","app":"_app/immutable/entry/app.DknS3y4d.js","imports":["_app/immutable/entry/start.VYoLjr-g.js","_app/immutable/chunks/entry.D9yOinZF.js","_app/immutable/chunks/runtime.UtnGbOU4.js","_app/immutable/chunks/paths.CBV4ozsM.js","_app/immutable/chunks/index-client.D63BNxN-.js","_app/immutable/entry/app.DknS3y4d.js","_app/immutable/chunks/runtime.UtnGbOU4.js","_app/immutable/chunks/render.C71Zs9u1.js","_app/immutable/chunks/disclose-version.eRbZUXqP.js","_app/immutable/chunks/store.CqfUVyyW.js","_app/immutable/chunks/props.JQMTvUao.js","_app/immutable/chunks/index-client.D63BNxN-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Bxm75jUq.js')),
			__memo(() => import('./chunks/1-DIILZXJ1.js')),
			__memo(() => import('./chunks/2-D1-2NlIu.js')),
			__memo(() => import('./chunks/3-B7Ob0Fdd.js')),
			__memo(() => import('./chunks/4-DmOb3hyH.js')),
			__memo(() => import('./chunks/5-D12sWjFM.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Classes",
				pattern: /^\/Classes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Classes/[folder]",
				pattern: /^\/Classes\/([^/]+?)\/?$/,
				params: [{"name":"folder","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Classes/[folder]/[svg]",
				pattern: /^\/Classes\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"folder","optional":false,"rest":false,"chained":false},{"name":"svg","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "/HEPIA_SVG";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
