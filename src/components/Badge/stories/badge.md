# Badge
## Basic

```html
<script>
  import { Badge } from "svelponents";
</script>

<Badge count={5}>
    <BadgeWrapper />
</Badge>
<Badge count={0} showZero>
    <BadgeWrapper style="margin-left: 20px;" />
</Badge>
<Badge count={0}>
    <BadgeWrapper style="margin-left: 20px;" />
</Badge>
```

## Standalone

```html
<script>
  import { Badge } from "svelponents";
</script>

<Badge count={25} style="margin-right: 16px;" />
<Badge count={4} color="lime" showZero style="margin-right: 16px;" />
<Badge count={109} color="#ffffff" style="margin-right: 16px;" />
```

## Overflow Count

```html
<script>
  import { Badge } from "svelponents";
</script>

<Badge count={99}>
    <BadgeWrapper />
</Badge>
<Badge count={100} overflow={99}>
    <BadgeWrapper style="margin-left: 20px;" />
</Badge>
<Badge count={10} overflow={9}>
    <BadgeWrapper style="margin-left: 20px;" />
</Badge>
<Badge count={1000} overflow={999}>
    <BadgeWrapper style="margin-left: 20px;" />
</Badge>
```

## Dynamic

```html
<script>
  import { Badge, Button } from "svelponents";

  let count = 0;
  function addCount() {
    count++;
  }
  function subtractCount() {
    count--;
  }
</script>

<Badge {count}>
    <BadgeWrapper />
</Badge>
<Badge dot={count}>
    <BadgeWrapper style="margin-left: 20px;" />
</Badge>
<Button style="margin-left: 20px;" type="primary" on:click={addCount}>
    Add Count
</Button>
<Button style="margin-left: 20px;" type="danger" on:click={subtractCount}>
    Subtract Count
</Button>

<div>Count = {count} / {count === 0 ? false : true}</div>
```

## Offset

```html
<script>
  import { Badge } from "svelponents";
</script>

<Badge count={5} offset={20}>
    <BadgeWrapper />
</Badge>
<Badge count={5} offset={[20, 40]}>
    <BadgeWrapper style="margin-left: 20px;" />
</Badge>
```

## Status

```html
<script>
  import { Badge } from "svelponents";
</script>

<Badge dot="success" />
<Badge dot="error" />
<Badge dot />
<Badge dot="processing" />
<Badge dot="warning" />

<Badge dot="success" text="Success" />
<Badge dot="error" text="Error" />
<Badge dot text="Default" />
<Badge dot="processing" text="Processing" />
<Badge dot="warning" text="Warning" />
```

## Color

```html
<script>
  import { Badge } from "svelponents";
</script>

<Badge dot color="pink" text="pink" />
<Badge dot color="red" text="red" />
<Badge dot color="yellow" text="yellow" />
<Badge dot color="orange" text="orange" />
<Badge dot color="cyan" text="cyan" />
<Badge dot color="green" text="green" />
<Badge dot color="blue" text="blue" />
<Badge dot color="purple" text="purple" />
<Badge dot color="geekblue" text="geekblue" />
<Badge dot color="magenta" text="magenta" />
<Badge dot color="volcano" text="volcano" />
<Badge dot color="gold" text="gold" />
<Badge dot color="lime" text="lime" />

<Badge dot color="#f50" text="#f50" />
<Badge dot color="#2db7f5" text="#2db7f5" />
<Badge dot color="#87d068" text="#87d068" />
<Badge dot color="#108ee9" text="#108ee9" />
```