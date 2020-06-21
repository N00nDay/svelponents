<script>
  import PageHeader from "../";
  import Button from "../../Button/Button.svelte";
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
      description: "avatar object",
      type: "object",
      default: "",
      _id: "avatar"
    },
    {
      name: "ghost",
      description: "change background to transparent",
      type: "boolean",
      default: false,
      _id: "ghost"
    },
    {
      name: "onBack",
      description: "set back button function",
      type: "(e) => void",
      default: "",
      _id: "onBack"
    },
    {
      name: "subTitle",
      description: "set subtitle",
      type: "string",
      default: '""',
      _id: "subTitle"
    },
    {
      name: "title",
      description: "set title",
      type: "string",
      default: '""',
      _id: "title"
    }
  ];
</script>

<style>
  .pageHeader {
    border: 1px solid rgb(235, 237, 240);
  }
</style>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <div class="pageHeader">
      <PageHeader onBack={() => console.log('back clicked!')}>
        <PageHeader.Title>Title</PageHeader.Title>
        <PageHeader.SubTitle>This is a subtitle</PageHeader.SubTitle>
      </PageHeader>
    </div>
  </Box>

  <br />
  <br />

  <Title level={4}>With extras</Title>

  <Box>
    <div class="pageHeader">
      <PageHeader onBack={() => console.log('back clicked!')}>
        <PageHeader.Title>Title</PageHeader.Title>
        <PageHeader.SubTitle>This is a subtitle</PageHeader.SubTitle>
        <PageHeader.Extras>
          <Button>Button</Button>
          <Button>Button</Button>
        </PageHeader.Extras>
      </PageHeader>
    </div>
  </Box>

  <br />
  <br />

  <Title level={4}>With avatar</Title>

  <Box>
    <div class="pageHeader">
      <PageHeader
        onBack={() => console.log('back clicked!')}
        avatar={{ icon: 'account' }}>
        <PageHeader.Title>Title</PageHeader.Title>
        <PageHeader.SubTitle>This is a subtitle</PageHeader.SubTitle>
        <PageHeader.Extras>
          <Button>Button</Button>
          <Button>Button</Button>
        </PageHeader.Extras>
      </PageHeader>
    </div>
  </Box>

  <br />
  <br />

  <Title level={4}>PageHeader API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
