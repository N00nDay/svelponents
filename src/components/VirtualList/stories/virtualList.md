# VirtualList
## Basic

```html
<script>
  import { VirtualList } from "svelponents";

  let listItems = [
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar"
  ];
</script>

<div style="height: 200px; border: 1px solid #cccccc;">
    <VirtualList items={listItems} let:item>
    <div style="border-bottom: 1px solid #cccccc;padding: 12px;">
        {item}
    </div>
    </VirtualList>
</div>
```