# Menu
## Horizontal

```html
<script>
  import { Menu } from "svelponents";
</script>

<Menu defaultSelectedKey="nav1" mode="horizontal">
    <Menu.Item key="nav1" icon="email" title="Nav1" />
    <Menu.Item key="nav2" icon="settings" title="Nav2" />
    <Menu.Item key="nav3" icon="dashboard" title="Nav3" />
</Menu>
```

## Inline

```html
<script>
  import { Menu } from "svelponents";
</script>

<Menu
    mode="inline"
    defaultSelectedKey="nav5"
    defaultOpenKey="menu2"
    divider
    style="border: 1px solid #f0f0f0;">
    <Menu.Item key="nav4" icon="email" title="Nav4" />
    <Menu.SubMenu key="menu1" title="Menu1" icon="settings">
    <Menu.Item key="nav5" sub="menu1" title="Nav5" />
    <Menu.Item key="nav6" sub="menu1" title="Nav6" />
    </Menu.SubMenu>
    <Menu.SubMenu key="menu2" title="Menu2" icon="dashboard">
    <Menu.Item key="nav7" sub="menu2" title="Nav7" />
    <Menu.Item key="nav8" sub="menu2" title="Nav8" />
    </Menu.SubMenu>
</Menu>
```

## Inline collapsable

```html
<script>
  import { Menu } from "svelponents";
</script>

<Button on:click={() => (collapsed = !collapsed)} style="width: 88px;">
    {collapsed ? 'Open' : 'Collapse'}
</Button>

<Menu
    {collapsed}
    mode="inline"
    defaultSelectedKey="nav11"
    defaultOpenKey="menu3"
    theme="dark"
    divider
    style="border: 1px solid #f0f0f0;">
    <Menu.Item key="nav9" icon="email" title="Nav9" />
    <Menu.SubMenu key="menu3" title="Menu3" icon="settings" let:sub>
    <Menu.Item key="nav10" {sub} title="Nav10" />
    <Menu.Item key="nav11" {sub} title="Nav11" />
    </Menu.SubMenu>
    <Menu.SubMenu key="menu4" title="Menu4" icon="dashboard" let:sub>
    <Menu.Item key="nav12" {sub} title="Nav12" />
    <Menu.Item key="nav13" {sub} title="Nav13" />
    </Menu.SubMenu>
</Menu>
```