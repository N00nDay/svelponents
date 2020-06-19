<script>
  import Alert from "../Alert.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";

  let close1 = true;
  let close2 = true;

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
      name: "closeText",
      description: "set close text",
      type: "string",
      default: '""',
      _id: "closeText"
    },
    {
      name: "description",
      description: "set description",
      type: "string",
      default: '""',
      _id: "description"
    },
    {
      name: "message",
      description: "set message",
      type: "string",
      default: '""',
      _id: "message"
    },
    {
      name: "onClose",
      description: "callback when alert removed",
      type: "(e) => void",
      default: '""',
      _id: "onClose"
    },
    {
      name: "showIcon",
      description: "whether to show icon",
      type: "boolean",
      default: false,
      _id: "showIcon"
    },
    {
      name: "type",
      description: "set type",
      type: '"success" | "info" | "warning" | "error"',
      default: '"info"',
      _id: "icon"
    }
  ];
</script>

<Container>

  <Title level={4}>Type</Title>

  <Box>
    <Alert type="success" message="Success Alert" />
    <br />
    <Alert type="info" message="Info Alert" />
    <br />
    <Alert type="warning" message="Warning Alert" />
    <br />
    <Alert type="error" message="Error Alert" />
  </Box>

  <br />
  <br />

  <Title level={4}>Description</Title>

  <Box>
    <Alert
      type="success"
      message="Success Alert"
      description="Success Description Success Description Success Description" />
    <br />
    <Alert
      type="info"
      message="Info Alert"
      description="Info Description Info Description Info Description" />
    <br />
    <Alert
      type="warning"
      message="Warning Alert"
      description="Warning Description Warning Description Warning Description" />
    <br />
    <Alert
      type="error"
      message="Error Alert"
      description="Error Description Error Description Error Description" />
  </Box>

  <br />
  <br />

  <Title level={4}>With Icon</Title>

  <Box>
    <Alert type="success" message="Success Alert" showIcon />
    <br />
    <Alert type="info" message="Info Alert" showIcon />
    <br />
    <Alert type="warning" message="Warning Alert" showIcon />
    <br />
    <Alert type="error" message="Error Alert" showIcon />
    <br />
    <Alert
      type="success"
      message="Success Alert"
      description="Success Description Success Description Success Description"
      showIcon />
    <br />
    <Alert
      type="info"
      message="Info Alert"
      description="Info Description Info Description Info Description"
      showIcon />
    <br />
    <Alert
      type="warning"
      message="Warning Alert"
      description="Warning Description Warning Description Warning Description"
      showIcon />
    <br />
    <Alert
      type="error"
      message="Error Alert"
      description="Error Description Error Description Error Description"
      showIcon />
  </Box>

  <br />
  <br />

  <Title level={4}>Closable</Title>

  <Box>
    {#if close1}
      <Alert
        type="success"
        message="Success Alert"
        onClose={() => (close1 = false)} />
      <br />
    {/if}
    {#if close2}
      <Alert
        type="info"
        message="Info Alert"
        description="Info Description Info Description Info Description"
        onClose={() => (close2 = false)} />
      <br />
    {/if}
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
