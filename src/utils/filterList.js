export default function filterList(value, list) {
  value = value || "";
  var filter, li, span, i, txtValue;
  filter = value.toUpperCase();
  li = list.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[1];
    txtValue = span.textContent || span.innerText;
    let filters = filter.split(" ");
    filters = filters.filter((f) => f.length);
    let shouldDisplay = true;
    filters.forEach((filt) => {
      shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt);
    });
    li[i].style.display = shouldDisplay || filters.length === 0 ? "" : "none";
  }
}
