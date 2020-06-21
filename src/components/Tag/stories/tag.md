# Tag
## Basic & closable

```html
<script>
  import { Tag } from "svelponents";

  let tag2 = true;
  let tag3 = true;
</script>

<Tag>Tag 1</Tag>
{#if tag2}
    <Tag onClose={() => (tag2 = false)}>Tag 2</Tag>
{/if}
{#if tag3}
    <Tag onClose={() => (tag3 = false)}>Tag 3</Tag>
{/if}
```

## Color

```html
<script>
  import { Tag, Divider } from "svelponents";
</script>

<Divider align="left">Presets</Divider>
<Tag color="magenta">magenta</Tag>
<Tag color="red">red</Tag>
<Tag color="volcano">volcano</Tag>
<Tag color="orange">orange</Tag>
<Tag color="gold">gold</Tag>
<Tag color="lime">lime</Tag>
<Tag color="green">green</Tag>
<Tag color="blue">blue</Tag>
<Tag color="geekblue">geekblue</Tag>
<Tag color="purple">purple</Tag>
<Divider align="left">Custom</Divider>
<Tag color="#f50">#f50</Tag>
<Tag color="#2db7f5">#2db7f5</Tag>
<Tag color="#87d068">#87d068</Tag>
<Tag color="#108ee9">#108ee9</Tag>
```

## Checkable

```html
<script>
  import { Tag } from "svelponents";

  let movies = false;
  let books = true;
  let music = false;
  let sports = false;
</script>

Categories:
<Tag checkable checked={movies} on:click={() => (movies = !movies)}>
    Movies
</Tag>
<Tag checkable checked={books} on:click={() => (books = !books)}>Books</Tag>
<Tag checkable checked={music} on:click={() => (music = !music)}>Music</Tag>
<Tag checkable checked={sports} on:click={() => (sports = !sports)}>
    Sports
</Tag>
```

## Status colors with icons

```html
<script>
  import { Tag } from "svelponents";
</script>

<Tag color="success">Success</Tag>
<Tag color="info">Info</Tag>
<Tag color="warning">Warning</Tag>
<Tag color="error">Error</Tag>
```