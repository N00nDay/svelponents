# Alert
## Type

```html
<script>
  import { Alert } from "svelponents";
</script>

<Alert type="success" message="Success Alert" />
<Alert type="info" message="Info Alert" />
<Alert type="warning" message="Warning Alert" />
<Alert type="error" message="Error Alert" />
```

## Description

```html
<script>
    import { Alert } from "svelponents";
</script>

<Alert type="success" message="Success Alert" description="Success Description Success Description Success Description" />
<Alert type="info" message="Info Alert" description="Info Description Info Description Info Description"  >
<Alert type="warning" message="Warning Alert" description="Warning Description Warning Description Warning Description" />
<Alert type="error" message="Error Alert" description="Error Description Error Description Error Description" />
``` 

## With Icon

```html
<script>
    import { Alert } from 'svelponents';
</script>

<Alert type="success" message="Success Alert" showIcon />
<Alert type="info" message="Info Alert" showIcon />
<Alert type="warning" message="Warning Alert" showIcon />
<Alert type="error" message="Error Alert" showIcon />

<Alert type="success" message="Success Alert" description="Success Description Success Description Success Description" showIcon />
<Alert type="info" message="Info Alert" description="Info Description Info Description Info Description" showIcon />
<Alert type="warning" message="Warning Alert" description="Warning Description Warning Description Warning Description" showIcon />
<Alert type="error" message="Error Alert" description="Error Description Error Description Error Description" showIcon />
```

## Closable

```html
<script>
    import { Alert } from 'svelponents';

    let close1 = true;
    let close2 = true;
</script>

{#if close1}
    <Alert type="success" message="Success Alert" onClose={() => (close1 = false)} />
{/if}
{#if close2}
    <Alert type="info" message="Info Alert" description="Info Description Info Description Info Description" onClose={() => (close2 = false)} />
{/if}
```