function percentFormatter(value, decimals) {
  decimals = decimals || 0;
  let newVal = (Math.round(value * 10) / 10).toFixed(decimals) + "%";
  return newVal;
}

export default percentFormatter;
