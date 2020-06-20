<script>
  import ContentLoader from "../ContentLoader.svelte";
  import Button from "../../Button/Button.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";
  import LoremIpsum from "../../../../demo/LoremIpsum.svelte";

  let loading = false;

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
      name: "loading",
      description: "set loading state",
      type: "boolean",
      default: false,
      _id: "loading"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <div>
      <Button
        type={loading ? 'primary' : 'danger'}
        on:click={() => (loading = !loading)}>
        {loading ? 'Stop Loading' : 'Start Loading'}
      </Button>
    </div>
    <br />
    <div
      style="height: 300px; border: 1px solid rgb(235, 237, 240); background:
      rgb(235, 237, 240); box-sizing: border-box; overflow: hidden;">
      <ContentLoader {loading} />
      <div class="scrollable" style="padding: 16px; height: 100%;">
        <LoremIpsum style="background: #ffffff; height: 268px;" />
        <br />
        <LoremIpsum style="background: #ffffff; height: 268px;" />
        <br />
        <LoremIpsum style="background: #ffffff; height: 268px;" />
      </div>
    </div>
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
