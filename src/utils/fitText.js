export default function fitText({ el, size, gap, style }) {
  let width = size - 8;
  let newStyle;
  let stringExists = el;
  if (stringExists) {
    let stringWidth = stringExists.getBoundingClientRect().width;
    let difference = stringWidth - width;
    if (difference > 0) {
      let ratio = 0;
      if (gap) {
        ratio = (width - gap * 2) / stringWidth;
      } else {
        ratio = width / stringWidth;
      }
      if (style) {
        newStyle = `${style} transform: scale(${ratio}) translate(-50%, -50%); transform-origin: top left;`;
      } else {
        newStyle = `transform: scale(${ratio}) translate(-50%, -50%); transform-origin: top left;`;
      }
    }
  }
  return newStyle;
}
