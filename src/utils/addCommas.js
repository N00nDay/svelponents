export default function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  if (x2.length === "") {
    x2 = "00";
  } else if (x2.length === 1) {
    x2 = x2 + "0";
  } else if (x2.length > 2) {
    x2 = x2.substr(0, 2);
  }
  var rgx = /(\d+)(\d{3})/;
  var str = "$1,$2";
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, str);
  }
  return x1 + x2;
}
