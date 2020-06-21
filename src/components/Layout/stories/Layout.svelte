<script>
  import Layout from "../";
  import Button from "../../Button/Button.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";

  let headerStyle = "background: #7dbcea; color: #fff; text-align: center;";
  let contentStyle =
    "background: rgba(16, 142, 233, 1); color: #fff; min-height: 120px; line-height: 120px; text-align: center;";
  let footerStyle = "background: #7dbcea; color: #fff; text-align: center;";
  let siderStyle =
    "background: #3ba0e9; color: #fff; line-height: 120px; width: 200px; text-align: center;";

  let collapsed = false;

  let headers = [
    {
      key: "name",
      name: "Name",
      type: "string",
      width: 15
    },
    {
      key: "description",
      name: "Description",
      type: "string",
      width: 35
    },
    {
      key: "type",
      name: "Type",
      type: "string",
      width: 35
    },
    {
      key: "default",
      name: "Default",
      type: "string",
      width: 15,
      align: "right"
    }
  ];

  let props = [
    {
      name: "collapsed",
      description: "set collapsed state>",
      type: "boolean",
      default: false,
      _id: "collapsed"
    },
    {
      name: "collapsedWidth",
      description: "set collapsed width",
      type: "number",
      default: 200,
      _id: "collapsedWidth"
    },
    {
      name: "width",
      description: "set uncollapsed width",
      type: "number",
      default: 80,
      _id: "width"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Layout>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <Layout.Content style={contentStyle}>Content</Layout.Content>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
    <br />
    <Layout>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <Layout>
        <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
      </Layout>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
    <br />
    <Layout>
      <Layout.Header style={headerStyle}>Header</Layout.Header>
      <Layout>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
        <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
      </Layout>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
    <br />
    <Layout>
      <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
      <Layout>
        <Layout.Header style={headerStyle}>Header</Layout.Header>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
    </Layout>
  </Box>

  <br />
  <br />

  <Title level={4}>Collapsable sider</Title>

  <Box>
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
  </Box>

  <br />
  <br />

  <Title level={4}>Layout API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
