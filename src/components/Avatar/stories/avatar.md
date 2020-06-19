# Avatar
## Size & Shape

```html
<script>
  import { Avatar } from "svelponents";
</script>

<Avatar icon="account" size={60} />
<Avatar icon="account" size="large" />
<Avatar icon="account" />
<Avatar icon="account" size="small" />

<Avatar icon="account" size={60} square />
<Avatar icon="account" size="large" square />
<Avatar icon="account" square />
<Avatar icon="account" size="small" square />
```

## Type

```html
<script>
  import { Avatar } from "svelponents";
</script>

<Avatar icon="account" size={60} />
<Avatar icon="account" />
<Avatar text="SP" />
<Avatar text="USER" />
<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="avatar" />
<Avatar icon="account" style="background-color: #87d068;" />
<Avatar text="SP" style="color: #f56a00; background-color: #fde3cf;" />
```

## Avatar + Badge

```html
<script>
  import { Avatar } from "svelponents";
</script>

<Avatar icon="account" size={60} />
<Badge count={1}>
    <Avatar icon="account" square />
</Badge>
<Badge dot>
    <Avatar icon="account" square style="margin-left: 16px;" />
</Badge>
```