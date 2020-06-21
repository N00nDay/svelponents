<script>
  import Skeleton from "../Skeleton.svelte";
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
      name: "avatar",
      description: "whether to show an avatar",
      type: "boolean",
      default: false,
      _id: "avatar"
    },
    {
      name: "lines",
      description: "number of lines per paragraph",
      type: "number",
      default: 4,
      _id: "lines"
    },
    {
      name: "loading",
      description: "set loading state",
      type: "boolean",
      default: true,
      _id: "loading"
    },
    {
      name: "paragraph",
      description: "number of paragraphs",
      type: "number",
      default: 1,
      _id: "paragraph"
    },
    {
      name: "title",
      description: "whether to show title row",
      type: "boolean",
      default: true,
      _id: "title"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Skeleton />
  </Box>

  <br />
  <br />

  <Title level={4}>Paragraphs and lines</Title>

  <Box>
    <Skeleton paragraph={2} lines={3} />
  </Box>

  <br />
  <br />

  <Title level={4}>With avatar</Title>

  <Box>
    <Skeleton avatar />
  </Box>

  <br />
  <br />

  <Title level={4}>Skeleton API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
