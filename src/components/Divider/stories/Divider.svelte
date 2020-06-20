<script>
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";
  import LoremIpsum from "../../../../demo/LoremIpsum.svelte";

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
      name: "align",
      description: "position of title inside divider",
      type: '"left" | "center" | "right"',
      default: '"center"',
      _id: "align"
    },
    {
      name: "dashed",
      description: "whether line is dashed",
      type: "boolean",
      default: false,
      _id: "dashed"
    },
    {
      name: "direction",
      description: "direction of divider",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      _id: "direction"
    },
    {
      name: "plain",
      description: "show divider title as plain style",
      type: "boolean",
      default: false,
      _id: "plain"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <LoremIpsum />
    <Divider />
    <LoremIpsum />
    <Divider />
    <LoremIpsum />
  </Box>

  <br />
  <br />

  <Title level={4}>With title and align</Title>

  <Box>
    <LoremIpsum />
    <Divider>Text</Divider>
    <LoremIpsum />
    <Divider align="left">Left Text</Divider>
    <LoremIpsum />
    <Divider align="right">Right Text</Divider>
    <LoremIpsum />
  </Box>

  <br />
  <br />

  <Title level={4}>With plain text</Title>

  <Box>
    <LoremIpsum />
    <Divider plain>Text</Divider>
    <LoremIpsum />
    <Divider align="left" plain>Left Text</Divider>
    <LoremIpsum />
    <Divider align="right" plain>Right Text</Divider>
    <LoremIpsum />
  </Box>

  <br />
  <br />

  <Title level={4}>Dashed</Title>

  <Box>
    <LoremIpsum />
    <Divider dashed />
    <LoremIpsum />
    <Divider dashed />
    <LoremIpsum />
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
