<script>
  import Message from "../";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Button from "../../Button/Button.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";

  const { message } = Message;

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
      description: "set alignment",
      type: '"left" | "center" | "right"',
      default: '"center"',
      _id: "align"
    },
    {
      name: "btnClick",
      description: "show button and set function when button clicked",
      type: "(e) => void",
      default: "",
      _id: "btnClick"
    },
    {
      name: "btnText",
      description: "set button text",
      type: "string",
      default: '"BUTTON"',
      _id: "btnText"
    },
    {
      name: "duration",
      description: "time to show message",
      type: "milliseconds",
      default: 3000,
      _id: "duration"
    },
    {
      name: "msg",
      description: "set text",
      type: "string",
      default: '""',
      _id: "msg"
    },
    {
      name: "onClose",
      description: "set callback when message closes",
      type: "(e) => void",
      default: "",
      _id: "onClose"
    },
    {
      name: "placement",
      description: "set placement",
      type: '"top" | "bottom"',
      default: '"top"',
      _id: "placement"
    },
    {
      name: "showIcon",
      description: "whether to show status icon",
      type: "boolean",
      default: true,
      _id: "showIcon"
    },
    {
      name: "theme",
      description: "set theme",
      type: '"light" | "dark"',
      default: '"dark"',
      _id: "theme"
    }
  ];

  // basic & status
  const open = () => {
    message.open({ msg: "open" });
  };

  const success = () => {
    message.success({ msg: "success" });
  };

  const info = () => {
    message.info({ msg: "info" });
  };

  const warning = () => {
    message.warning({ msg: "warning" });
  };

  const error = () => {
    message.error({ msg: "error" });
  };

  // placement & alignment
  const openTop = () => {
    message.open({ msg: "Placement Top" });
  };

  const openBottom = () => {
    message.open({ msg: "Placement Bottom", placement: "bottom" });
  };

  const openLeft = () => {
    message.open({ msg: "Aligned Left", align: "left" });
  };

  const openRight = () => {
    message.open({ msg: "Aligned Right", align: "right" });
  };

  //   theme
  const openDark = () => {
    message.open({ msg: "Dark" });
  };

  const openLight = () => {
    message.open({ msg: "Light", theme: "light" });
  };

  //   with button
  const openButton = () => {
    message.open({
      msg: "I have a button ->",
      btnText: "Click Me!",
      btnClick: () => console.log("I've been clicked!")
    });
  };

  //   with callback
  const openCallback = () => {
    message.open({
      msg: "Callback coming in 3 seconds",
      onClose: () =>
        message.success({
          msg: "I showed up after the other closed!"
        })
    });
  };
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Button on:click={open}>Open</Button>
    <Button on:click={success}>Success</Button>
    <Button on:click={info}>Info</Button>
    <Button on:click={warning}>Warning</Button>
    <Button on:click={error}>Error</Button>

    <Message />
  </Box>

  <br />
  <br />

  <Title level={4}>Placement & Alignment</Title>

  <Box>
    <Button on:click={openTop}>Placement Top</Button>
    <Button on:click={openBottom}>Placement Bottom</Button>
    <Button on:click={openLeft}>Align Left</Button>
    <Button on:click={openRight}>Align Right</Button>

    <!-- <Message /> -->
  </Box>

  <br />
  <br />

  <Title level={4}>Theme</Title>

  <Box>
    <Button on:click={openDark}>Dark</Button>
    <Button on:click={openLight}>Light</Button>

    <!-- <Message /> -->
  </Box>

  <br />
  <br />

  <Title level={4}>With Button</Title>

  <Box>
    <Button on:click={openButton}>With Button</Button>

    <!-- <Message /> -->
  </Box>

  <br />
  <br />

  <Title level={4}>With Callback</Title>

  <Box>
    <Button on:click={openCallback}>With Callback</Button>

    <!-- <Message /> -->
  </Box>

  <br />
  <br />

  <Title level={4}>Message API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
