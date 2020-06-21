# Space
## Basic

```html
<script>
  import { Space, Button } from "svelponents";
</script>

<Space>
    <Button type="primary">Button</Button>
    <Button>Button</Button>
    <Button type="danger">Button</Button>
</Space>
```

## Vertical

```html
<script>
  import { Space, Button } from "svelponents";
</script>

<Space direction="vertical">
    <Button type="primary">Button</Button>
    <Button>Button</Button>
    <Button type="danger">Button</Button>
</Space>
```

## Space size

```html
<script>
  import { Space, Button } from "svelponents";
</script>

<Space>
    <Button type="primary">Button</Button>
    <Button>Button</Button>
    <Button type="danger">Button</Button>
</Space>
<Space size="middle">
    <Button type="primary">Button</Button>
    <Button>Button</Button>
    <Button type="danger">Button</Button>
</Space>
<Space size="large">
    <Button type="primary">Button</Button>
    <Button>Button</Button>
    <Button type="danger">Button</Button>
</Space>
<Space size={42}>
    <Button type="primary">Button</Button>
    <Button>Button</Button>
    <Button type="danger">Button</Button>
</Space>
```

## Align

```html
<script>
  import { Space, Button } from "svelponents";
</script>

<Space align="center" style="border: 1px solid;">
    <Button size="small" type="primary">center</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
<Space align="start" style="border: 1px solid;">
    <Button size="small" type="primary">start</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
<Space align="end" style="border: 1px solid;">
    <Button size="small" type="primary">end</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
<Space align="baseline" style="border: 1px solid;">
    <Button size="small" type="primary">baseline</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
```

## Justify

```html
<script>
  import { Space, Button } from "svelponents";
</script>

<Space justify="start" style="border: 1px solid;">
    <Button size="small" type="primary">start</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
<Space justify="end" style="border: 1px solid;">
    <Button size="small" type="primary">end</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
<Space justify="center" style="border: 1px solid;">
    <Button size="small" type="primary">center</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
<Space justify="space-between" style="border: 1px solid;">
    <Button size="small" type="primary">space-between</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
<Space justify="space-around" style="border: 1px solid;">
    <Button size="small" type="primary">space-around</Button>
    <Button>Button</Button>
    <Button size="large" type="danger">Button</Button>
</Space>
```