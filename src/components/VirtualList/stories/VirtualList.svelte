<script>
  import VirtualList from "../VirtualList.svelte";
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
      name: "bind:start",
      description: "",
      type: "",
      default: "",
      _id: "bind:start"
    },
    {
      name: "bind:end",
      description: "",
      type: "",
      default: "",
      _id: "bind:end"
    },
    {
      name: "items",
      description: "items to populate children",
      type: "array",
      default: "[]",
      _id: "items"
    },
    {
      name: "let:item",
      description: "REQUIRED to pass items to child",
      type: "",
      default: "",
      _id: "items"
    }
  ];

  let listItems = [
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar",
    "foo",
    "bar"
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <div style="height: 200px; border: 1px solid #cccccc;">
      <VirtualList items={listItems} let:item>
        <div style="border-bottom: 1px solid #cccccc;padding: 12px;">
          {item}
        </div>
      </VirtualList>
    </div>
  </Box>

  <br />
  <br />

  <Title level={4}>VirtualList API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
