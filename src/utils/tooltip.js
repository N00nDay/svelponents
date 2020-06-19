import tippy, { animateFill as aFill, roundArrow } from "tippy.js";

export default function (
  node,
  { allowHTML, animateFill, maxWidth, content, offset, placement, arrow, theme }
) {
  let props = {
    allowHTML: allowHTML || true,
    animateFill: animateFill || true,
    maxWidth: maxWidth || 350,
    content: content || "",
    offset: offset || [0, 10],
    placement: placement || "top",
    plugins: [aFill],
    arrow: arrow ? roundArrow : false,
    theme: theme || "",
  };

  if (content) {
    return tippy(node, props);
  } else {
    return false;
  }
}
