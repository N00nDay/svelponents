<script>
  import Tag from "../Tag.svelte";
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
      name: "checkable",
      description: "allow checking",
      type: "boolean",
      default: false,
      _id: "checkable"
    },
    {
      name: "checked",
      description: "set check status",
      type: "boolean",
      default: false,
      _id: "checked"
    },
    {
      name: "color",
      description: "set color",
      type:
        '"magenta" | "red" | "volcano" | "orange" | "gold" | "lime" | "green" |  "cyan" | "blue" | "geekblue" | "purple" | hex',
      default: "",
      _id: "color"
    },
    {
      name: "hidden",
      description: "hide tag",
      type: "boolean",
      default: false,
      _id: "hidden"
    },
    {
      name: "icon",
      description: "set icon",
      type: "string",
      default: "",
      _id: "icon"
    },
    {
      name: "onClose",
      description: "set close action",
      type: "(e) => void",
      default: "",
      _id: "onClose"
    }
  ];

  let tag2 = true;
  let tag3 = true;

  let movies = false;
  let books = true;
  let music = false;
  let sports = false;
</script>

<Container>

  <Title level={4}>Basic & closable</Title>

  <Box>
    <Tag>Tag 1</Tag>
    {#if tag2}
      <Tag onClose={() => (tag2 = false)}>Tag 2</Tag>
    {/if}
    {#if tag3}
      <Tag onClose={() => (tag3 = false)}>Tag 3</Tag>
    {/if}
  </Box>

  <br />
  <br />

  <Title level={4}>Color</Title>

  <Box>
    <Divider align="left">Presets</Divider>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <Divider align="left">Custom</Divider>
    <Tag color="#f50">#f50</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>
  </Box>

  <br />
  <br />

  <Title level={4}>Checkable</Title>

  <Box>
    Categories:
    <Tag checkable checked={movies} on:click={() => (movies = !movies)}>
      Movies
    </Tag>
    <Tag checkable checked={books} on:click={() => (books = !books)}>Books</Tag>
    <Tag checkable checked={music} on:click={() => (music = !music)}>Music</Tag>
    <Tag checkable checked={sports} on:click={() => (sports = !sports)}>
      Sports
    </Tag>
  </Box>

  <br />
  <br />

  <Title level={4}>Status colors with icons</Title>

  <Box>
    <Tag color="success">Success</Tag>
    <Tag color="info">Info</Tag>
    <Tag color="warning">Warning</Tag>
    <Tag color="error">Error</Tag>
  </Box>

  <br />
  <br />

  <Title level={4}>Tag API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
