import typeOf from "./typeOf";

export default function setSize(x) {
  const type = typeOf(x);
  switch (type) {
    case "string":
      if (x === "middle") {
        return "16px";
      } else if (x === "large") {
        return "24px";
      } else {
        let length = x.length;
        let last1 = x.charAt(length);
        let last2 = x.substr(length - 3);
        if (last1 === "%" || last2 === "px") {
          return x;
        } else {
          return "8px";
        }
      }
      break;
    case "number":
      return x + "px";
      break;
    default:
      return "8px";
  }
}
