# Drawer
## Basic

```html
<script>
  import { Drawer, Button } from "svelponents";

  let open1 = false;
</script>

<Button type="primary" on:click={() => (open1 = !open1)}>Open</Button>
<Drawer open={open1} onClose={() => (open1 = !open1)}>
    I am a basic drawer
</Drawer>
```

## Placement

```html
<script>
  import { Drawer, Button } from "svelponents";

  let open2 = false;
  let open3 = false;
  let open4 = false;
  let open5 = false;
</script>

<Button type="primary" on:click={() => (open2 = !open2)}>Open Left</Button>
<Button type="primary" on:click={() => (open3 = !open3)}>Open Top</Button>
<Button type="primary" on:click={() => (open4 = !open4)}>Open Right</Button>
<Button type="primary" on:click={() => (open5 = !open5)}>
    Open Bottom
</Button>
<Drawer
    open={open2}
    onClose={() => (open2 = !open2)}
    closeIcon="arrowRight">
    <Drawer.Header>I'm on the left</Drawer.Header>
</Drawer>
<Drawer open={open3} placement="top" onClose={() => (open3 = !open3)}>
    <Drawer.Header>I'm on the top</Drawer.Header>
</Drawer>
<Drawer
    open={open4}
    placement="right"
    onClose={() => (open4 = !open4)}
    closeIcon="arrowLeft">
    <Drawer.Header>I'm on the right</Drawer.Header>
</Drawer>
<Drawer open={open5} placement="bottom" onClose={() => (open5 = !open5)}>
    <Drawer.Header>I'm on the bottom</Drawer.Header>
</Drawer>
```

## Render in container

```html
<script>
  import { Drawer, Button } from "svelponents";

  let open6 = false;
</script>

<div
    style="height: 300px; border: 1px solid rgb(235, 237, 240); text-align:
    center; line-height: 300px; background: rgb(235, 237, 240); box-sizing:
    border-box;">
    <Button type="primary" on:click={() => (open6 = !open6)}>Open</Button>
    <Drawer open={open6} onClose={() => (open6 = !open6)} appendToParent>
    I'm inside a div
    </Drawer>
</div>
```

## Kitchen sink

```html
<script>
  import { Drawer, Button } from "svelponents";

  let open7 = false;
</script>

<Button type="primary" on:click={() => (open7 = !open7)}>Open</Button>
<Drawer
    open={open7}
    onClose={() => (open7 = !open7)}
    mask={false}
    closable={false}
    placement="right">
    <Drawer.Header>I am a Header</Drawer.Header>
    <Drawer.Body>I am a Body</Drawer.Body>
    <Drawer.Footer>I am a Footer</Drawer.Footer>
</Drawer>
```