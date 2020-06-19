export default function fragment(node) {
  node.parentElement.appendChild(node.content);
  node.remove();

  return {
    destroy() {
      if (node && node.parentElement) {
        node.parentElement.removeChild(node.content);
      }
    },
  };
}
