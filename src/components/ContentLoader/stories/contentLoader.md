# ContentLoader
## Basic

```html
<script>
  import { ContentLoader } from "svelponents";

  let loading = true;
</script>

<div>
    <Button
    type={loading ? 'primary' : 'danger'}
    on:click={() => (loading = !loading)}>
    {loading ? 'Stop Loading' : 'Start Loading'}
    </Button>
</div>
<br />
<div
    style="height: 300px; border: 1px solid rgb(235, 237, 240); background:
    rgb(235, 237, 240); box-sizing: border-box; padding: 16px;">
    <ContentLoader {loading} />
    <br />
    <LoremIpsum style="background: #ffffff; height: 268px;" />
    <br />
    <LoremIpsum style="background: #ffffff; height: 268px;" />
    <br />
    <LoremIpsum style="background: #ffffff; height: 268px;" />
</div>
```