# Layout
## Basic

```html
<script>
  import { Layout } from "svelponents";
</script>

<Layout>
    <Layout.Header style={headerStyle}>Header</Layout.Header>
    <Layout.Content style={contentStyle}>Content</Layout.Content>
    <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
</Layout>
<Layout>
    <Layout.Header style={headerStyle}>Header</Layout.Header>
    <Layout>
    <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
    <Layout.Content style={contentStyle}>Content</Layout.Content>
    </Layout>
    <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
</Layout>
<Layout>
    <Layout.Header style={headerStyle}>Header</Layout.Header>
    <Layout>
    <Layout.Content style={contentStyle}>Content</Layout.Content>
    <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
    </Layout>
    <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
</Layout>
<Layout>
    <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
    <Layout>
    <Layout.Header style={headerStyle}>Header</Layout.Header>
    <Layout.Content style={contentStyle}>Content</Layout.Content>
    <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
</Layout>
```

## Collapsable sider

```html
<script>
  import { Layout } from "svelponents";
</script>

<Layout>
    <Layout.Sider style={siderStyle} {collapsed}>Sider</Layout.Sider>
    <Layout>
    <Layout.Header
        style="background: #7dbcea; color: #fff; padding-left: 24px;">
        <Button
        style="color: #ffffff;"
        icon="menu"
        type="text"
        shape="circle"
        on:click={() => (collapsed = !collapsed)} />
        <span>Header</span>
    </Layout.Header>
    <Layout.Content style={contentStyle}>Content</Layout.Content>
    <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
</Layout>
```