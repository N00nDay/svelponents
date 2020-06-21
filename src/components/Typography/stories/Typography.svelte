<script>
  import Text from "../Text.svelte";
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

  let titleProps = [
    {
      name: "level",
      description: "set content importance, matchwith h1, h2, h3, h4",
      type: "1 | 2 | 3 | 4",
      default: 1,
      _id: "level"
    }
  ];

  let textProps = [
    {
      name: "code",
      description: "code style",
      type: "boolean",
      default: false,
      _id: "code"
    },
    {
      name: "del",
      description: "deleted line style",
      type: "boolean",
      default: false,
      _id: "del"
    },
    {
      name: "disabled",
      description: "disabled content",
      type: "boolean",
      default: false,
      _id: "disabled"
    },
    {
      name: "keyboard",
      description: "keyboard style",
      type: "boolean",
      default: false,
      _id: "keyboard"
    },
    {
      name: "mark",
      description: "marked style",
      type: "boolean",
      default: false,
      _id: "mark"
    },
    {
      name: "strong",
      description: "bold style",
      type: "boolean",
      default: false,
      _id: "strong"
    },
    {
      name: "type",
      description: "content type",
      type: '"secondary" | "warning" | "danger"',
      default: "",
      _id: "type"
    },
    {
      name: "underline",
      description: "underline style",
      type: "boolean",
      default: false,
      _id: "underline"
    }
  ];
</script>

<Container>

  <Title level={4}>Title</Title>

  <Box>
    <Title>h1. Svelponents</Title>
    <Title level={2}>h2. Svelponents</Title>
    <Title level={3}>h3. Svelponents</Title>
    <Title level={4}>h4. Svelponents</Title>
  </Box>

  <br />
  <br />

  <Title level={4}>Text</Title>

  <Box>
    <Text>Svelponents</Text>
    <br />
    <Text type="secondary">Svelponents</Text>
    <br />
    <Text type="warning">Svelponents</Text>
    <br />
    <Text type="danger">Svelponents</Text>
    <br />
    <Text disabled>Svelponents</Text>
    <br />
    <Text mark>Svelponents</Text>
    <br />
    <Text code>Svelponents</Text>
    <br />
    <Text keyboard>Svelponents</Text>
    <br />
    <Text underline>Svelponents</Text>
    <br />
    <Text del>Svelponents</Text>
    <br />
    <Text strong>Svelponents</Text>
    <br />
    <Text link href=".">Svelponents</Text>
  </Box>

  <br />
  <br />

  <Title level={4}>Title API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each titleProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Text API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each textProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
