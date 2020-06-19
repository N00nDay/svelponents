# Button
## Type

```html
<script>
  import { Button } from "svelponents";
</script>

<Button on:click style="margin-right: 8px;">Default Button</Button>
<Button on:click style="margin-right: 8px;" type="primary">Primary Button</Button>
<Button on:click style="margin-right: 8px;" type="dashed">Dashed Button</Button>
<Button on:click style="margin-right: 8px;" type="danger">Danger Button</Button>
<Button on:click style="margin-right: 8px;" type="link">Link Button</Button>
<Button on:click style="margin-right: 8px;" type="text">Text Button</Button>
```

## Icon

```html
<script>
  import { Button } from "svelponents";
</script>

<Button type="primary" icon="search" tip={{ content: 'Search' }} shape="circle" />
<Button type="primary" icon="search">Search</Button>
<Button icon="search" tip={{ content: 'Search' }} shape="circle" />
<Button icon="search">Search</Button>
<Button type="dashed" icon="search" shape="circle" tip={{ content: 'Search' }} />
<Button type="dashed" icon="search">Search</Button>
<Button type="text" icon="search" shape="circle" tip={{ content: 'Search' }} />
<Button type="text" icon="search">Search</Button>
<Button type="link" icon="search" shape="circle" tip={{ content: 'Search' }} />
<Button type="link" icon="search">Search</Button>
<Button type="danger" icon="search" shape="circle" tip={{ content: 'Search' }} />
<Button type="danger" icon="search">Search</Button>
```

## Size

```html
<script>
  import { Button } from "svelponents";
</script>

<Button type="primary" size="large">Primary Large</Button>
<Button size="large">Default Large</Button>
<Button type="dashed" size="large">Dashed Large</Button>
<Button type="text" size="large">Text Large</Button>
<Button type="link" size="large">Link Large</Button>
<Button type="danger" size="large">Danger Large</Button>

<Button type="primary">Primary Default</Button>
<Button>Default Default</Button>
<Button type="dashed">Dashed Default</Button>
<Button type="text">Text Default</Button>
<Button type="link">Link Default</Button>
<Button type="danger">Danger Default</Button>

<Button type="primary" size="small">Primary Small</Button>
<Button size="small">Default Small</Button>
<Button type="dashed" size="small">Dashed Small</Button>
<Button type="text" size="small">Text Small</Button>
<Button type="link" size="small">Link Small</Button>
<Button type="danger" size="small">Danger Small</Button>
```

## Loading

```html
<script>
  import { Button } from "svelponents";
</script>

<Button type="primary" icon="search" shape="circle" loading />
<Button type="primary" icon="search" loading>Search</Button>
<Button icon="search" shape="circle" loading />
<Button icon="search" loading>Search</Button>
<Button type="dashed" icon="search" shape="circle" loading />
<Button type="dashed" icon="search" loading>Search</Button>
<Button type="text" icon="search" shape="circle" loading />
<Button type="text" icon="search" loading>Search</Button>
<Button type="link" icon="search" shape="circle" loading />
<Button type="link" icon="search" loading>Search</Button>
<Button type="danger" icon="search" shape="circle" loading />
<Button type="danger" icon="search" loading>Search</Button>
```

## Disabled

```html
<script>
  import { Button } from "svelponents";
</script>

<Button type="primary" icon="search" shape="circle" disabled />
<Button type="primary" icon="search" disabled>Search</Button>
<Button icon="search" shape="circle" disabled />
<Button icon="search" disabled>Search</Button>
<Button type="dashed" icon="search" shape="circle" disabled />
<Button type="dashed" icon="search" disabled>Search</Button>
<Button type="text" icon="search" shape="circle" disabled />
<Button type="text" icon="search" disabled>Search</Button>
<Button type="link" icon="search" shape="circle" disabled />
<Button type="link" icon="search" disabled>Search</Button>
<Button type="danger" icon="search" shape="circle" disabled />
<Button type="danger" icon="search" disabled>Search</Button>
```

## Ghost

```html
<script>
  import { Button } from "svelponents";
</script>

<Button type="primary" icon="search" shape="circle" ghost />
<Button type="primary" icon="search" ghost>Search</Button>
<Button icon="search" shape="circle" ghost />
<Button icon="search" ghost>Search</Button>
<Button type="dashed" icon="search" shape="circle" ghost />
<Button type="dashed" icon="search" ghost>Search</Button>
<Button type="text" icon="search" shape="circle" ghost />
<Button type="text" icon="search" ghost>Search</Button>
<Button type="link" icon="search" shape="circle" ghost />
<Button type="link" icon="search" ghost>Search</Button>
<Button type="danger" icon="search" shape="circle" ghost />
<Button type="danger" icon="search" ghost>Search</Button>
```

## Block

```html
<script>
  import { Button } from "svelponents";
</script>

<Button type="primary" block>Primary Button</Button>
<Button block>Default Button</Button>
<Button type="text" block>Text Button</Button>
<Button type="link" block>Link Button</Button>
<Button type="danger" block>Danger Button</Button>
```