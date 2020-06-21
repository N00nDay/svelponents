# SimpleBar
## Basic

```html
<script>
  import { SimpleBar } from "svelponents";

  let simpleBar,
    init = false;
  const initBar = bar => (simpleBar = bar);
</script>

<div style="height:300px;border: 1px solid #f5f5f5;">
    <SimpleBar init={initBar}>
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
    </SimpleBar>
</div>
```