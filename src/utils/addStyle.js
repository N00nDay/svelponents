export default function addStyle({ style, attribute, string }) {
  if (attribute) {
    if (style) {
      style = style + " " + string;
    } else {
      style = string;
    }
  }
  return style;
}
