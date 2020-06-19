const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default function currencyFormatter(value) {
  let newVal = parseFloat(value);
  newVal = formatter.format(value);
  return newVal;
}
