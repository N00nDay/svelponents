<script>
  import Avatar from "../Avatar.svelte";
  import Badge from "../../Badge/Badge.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";

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
      name: "alt",
      description: "set alt attribute for img",
      type: "string",
      default: '""',
      _id: "alt"
    },
    {
      name: "gap",
      description: "add padding left/right",
      type: "number",
      default: 4,
      _id: "gap"
    },
    {
      name: "icon",
      description: "set icon",
      type: "string",
      default: '""',
      _id: "icon"
    },
    {
      name: "size",
      description: "set size",
      type: '"small" | "medium" | "large" | number',
      default: '"medium"',
      _id: "href"
    },
    {
      name: "square",
      description: "square shape",
      type: "boolean",
      default: false,
      _id: "square"
    },
    {
      name: "src",
      description: "set source of img",
      type: "string",
      default: '""',
      _id: "src"
    }
  ];
</script>

<Container>

  <Title level={4}>Size & Shape</Title>

  <Box>
    <Avatar icon="account" size={60} />
    <Avatar icon="account" size="large" />
    <Avatar icon="account" />
    <Avatar icon="account" size="small" />
    <br />
    <br />
    <Avatar icon="account" size={60} square />
    <Avatar icon="account" size="large" square />
    <Avatar icon="account" square />
    <Avatar icon="account" size="small" square />
  </Box>

  <br />
  <br />

  <Title level={4}>Type</Title>

  <Box>
    <Avatar icon="account" size={60} />
    <Avatar icon="account" />
    <Avatar text="SP" />
    <Avatar text="USER" />
    <Avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="avatar" />
    <Avatar icon="account" style="background-color: #87d068;" />
    <Avatar text="SP" style="color: #f56a00; background-color: #fde3cf;" />
  </Box>

  <br />
  <br />

  <Title level={4}>Avatar + Badge</Title>

  <Box>
    <Avatar icon="account" size={60} />
    <Badge count={1}>
      <Avatar icon="account" square />
    </Badge>

    <Badge dot>
      <Avatar icon="account" square style="margin-left: 16px;" />
    </Badge>
  </Box>

  <br />
  <br />

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>
</Container>
