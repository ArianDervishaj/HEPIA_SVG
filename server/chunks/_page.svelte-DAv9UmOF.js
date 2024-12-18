import { V as ensure_array_like } from './index-CYXvgaQu.js';
import { a as attr, s as svgs } from './svgs-BvhU1n53.js';
import { b as base } from './paths-BR6sQZob.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload) {
  const folders = Object.keys(svgs);
  const each_array = ensure_array_like(folders);
  $$payload.out += `<h1>Classes</h1> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let folder = each_array[$$index];
    $$payload.out += `<li><a${attr("href", `${base}/Classes/${folder}`)}>${escape_html(folder)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DAv9UmOF.js.map
