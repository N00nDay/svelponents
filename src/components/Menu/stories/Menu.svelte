<script>
  import Menu from "../";
  import Button from "../../Button/Button.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";

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
      description: "set collapsed state",
      type: "boolean",
      default: false,
      _id: "collapsed"
    },
    {
      name: "defaultOpenKey",
      description: "sub menu to open at start",
      type: "string",
      default: '""',
      _id: "defaultOpenKey"
    },
    {
      name: "defaultSelectedKey",
      description: "item to have selected at start",
      type: "string",
      default: '""',
      _id: "defaultSelectedKey"
    },
    {
      name: "divider",
      description: "whether to include row dividers",
      type: "boolean",
      default: false,
      _id: "divider"
    },
    {
      name: "mode",
      description: "type of menu",
      type: '"vertical" | "horizontal" | "inline"',
      default: '"vertical"',
      _id: "mode"
    },
    {
      name: "theme",
      description: "set theme",
      type: '"light" | "dark"',
      default: '"light"',
      _id: "theme"
    }
  ];
</script>

<Container>

  <Title level={4}>Horizontal</Title>

  <Box>
    <Menu defaultSelectedKey="nav1" mode="horizontal">
      <Menu.Item key="nav1" icon="email" title="Nav1" />
      <Menu.Item key="nav2" icon="settings" title="Nav2" />
      <Menu.Item key="nav3" icon="dashboard" title="Nav3" />
    </Menu>
  </Box>

  <br />
  <br />

  <Title level={4}>Inline</Title>

  <Box>
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
  </Box>

  <br />
  <br />

  <Title level={4}>Inline collapsable</Title>

  <Box>
    <Button on:click={() => (collapsed = !collapsed)} style="width: 88px;">
      {collapsed ? 'Open' : 'Collapse'}
    </Button>
    <br />
    <br />
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
  </Box>

  <br />
  <br />

  <Title level={4}>Menu API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
