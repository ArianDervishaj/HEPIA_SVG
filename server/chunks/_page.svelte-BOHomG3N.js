import { S as noop, X as store_get, Y as unsubscribe_stores, x as pop, v as push, T as getContext } from './index-CYXvgaQu.js';
import './exports-BHno2xhZ.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { folder, svg } = store_get($$store_subs ??= {}, "$page", page).params;
  $$payload.out += `<h1>${escape_html(svg)}</h1> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Loading SVG...</p>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BOHomG3N.js.map
