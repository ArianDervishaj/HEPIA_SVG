import { V as ensure_array_like, W as bind_props, x as pop, v as push } from './index-CYXvgaQu.js';
import { a as attr, s as svgs } from './svgs-BvhU1n53.js';
import { b as base } from './paths-BR6sQZob.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const folder = data.folder;
  const svgFiles = svgs[folder] || [];
  $$payload.out += `<h1>${escape_html(folder)}</h1> `;
  if (svgFiles.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(svgFiles);
    $$payload.out += `<ul><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let svg = each_array[$$index];
      $$payload.out += `<li><a${attr("href", `${base}/Classes/${folder}/${svg.replace(".svg", "")}`)}>${escape_html(svg.replace(".svg", ""))}</a></li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>No SVG files found for this folder.</p>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DfGWO4hZ.js.map
