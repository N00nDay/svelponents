<script>
  import Button from "../../Button/Button.svelte";
  import Drawer from "../";
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
      name: "closable",
      description: "whether to show an (X) button in Drawer.Header",
      type: "boolean",
      default: true,
      _id: "closable"
    },
    {
      name: "closeIcon",
      description: "set icon for close button",
      type: "string",
      default: '""',
      _id: "closeIcon"
    },
    {
      name: "mask",
      description: "whether to show a mask",
      type: "boolean",
      default: true,
      _id: "mask"
    },
    {
      name: "maskClosable",
      description: "whether clicking the mask closes the Drawer",
      type: "boolean",
      default: true,
      _id: "maskClosable"
    },
    {
      name: "onClose",
      description: "specify callback when mask or close button clicked",
      type: "(e) => void",
      default: "",
      _id: "onClose"
    },
    {
      name: "open",
      description: "whether the Drawer is open or not",
      type: "boolean",
      default: false,
      _id: "open"
    },
    {
      name: "placement",
      description: "placement of Drawer",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"left"',
      _id: "placement"
    }
  ];

  let open1 = false;
  let open2 = false;
  let open3 = false;
  let open4 = false;
  let open5 = false;
  let open6 = false;
  let open7 = false;
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Button type="primary" on:click={() => (open1 = !open1)}>Open</Button>
    <Drawer open={open1} onClose={() => (open1 = !open1)}>
      I am a basic drawer
    </Drawer>
  </Box>

  <br />
  <br />

  <Title level={4}>Placement</Title>

  <Box>
    <Button type="primary" on:click={() => (open2 = !open2)}>Open Left</Button>
    <Button type="primary" on:click={() => (open3 = !open3)}>Open Top</Button>
    <Button type="primary" on:click={() => (open4 = !open4)}>Open Right</Button>
    <Button type="primary" on:click={() => (open5 = !open5)}>
      Open Bottom
    </Button>
    <Drawer
      open={open2}
      onClose={() => (open2 = !open2)}
      closeIcon="arrowRight">
      <Drawer.Header>I'm on the left</Drawer.Header>
    </Drawer>
    <Drawer open={open3} placement="top" onClose={() => (open3 = !open3)}>
      <Drawer.Header>I'm on the top</Drawer.Header>
    </Drawer>
    <Drawer
      open={open4}
      placement="right"
      onClose={() => (open4 = !open4)}
      closeIcon="arrowLeft">
      <Drawer.Header>I'm on the right</Drawer.Header>
    </Drawer>
    <Drawer open={open5} placement="bottom" onClose={() => (open5 = !open5)}>
      <Drawer.Header>I'm on the bottom</Drawer.Header>
    </Drawer>
  </Box>

  <br />
  <br />

  <Title level={4}>Render in container</Title>

  <Box>
    <div
      style="height: 300px; border: 1px solid rgb(235, 237, 240); text-align:
      center; line-height: 300px; background: rgb(235, 237, 240); box-sizing:
      border-box;">
      <Button type="primary" on:click={() => (open6 = !open6)}>Open</Button>
      <Drawer open={open6} onClose={() => (open6 = !open6)} appendToParent>
        I'm inside a div
      </Drawer>
    </div>
  </Box>

  <br />
  <br />

  <Title level={4}>Kitchen sink</Title>

  <Box>
    <Button type="primary" on:click={() => (open7 = !open7)}>Open</Button>
    <Drawer
      open={open7}
      onClose={() => (open7 = !open7)}
      mask={false}
      closable={false}
      placement="right">
      <Drawer.Header>I am a Header</Drawer.Header>
      <Drawer.Body>I am a Body</Drawer.Body>
      <Drawer.Footer>I am a Footer</Drawer.Footer>
    </Drawer>
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
