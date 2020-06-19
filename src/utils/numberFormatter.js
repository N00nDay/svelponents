export default function numberFormatter(x) {
  return x.toFixed(2).replace(/[.,]00$/, "");
}
