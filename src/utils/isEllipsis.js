export default function isEllipsis(e) {
  let tolerance = 2;
  return e.offsetWidth + tolerance < e.scrollWidth;
}
