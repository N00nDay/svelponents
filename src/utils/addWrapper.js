export default async function addWrapper({ node, tag, style }) {
  const children = node.childNodes;
  [].forEach.call(children, function (child) {
    if (child.nodeName !== "#text" && child.nodeName !== "#comment") {
      let wrapper = document.createElement(tag);
      wrapper.setAttribute("style", style);
      child.parentNode.insertBefore(wrapper, child);
      wrapper.appendChild(child);
    }
  });
}
