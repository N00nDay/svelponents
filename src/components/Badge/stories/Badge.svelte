<script>
  import Badge from "../Badge.svelte";
  import Button from "../../Button/Button.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";
  import BadgeWrapper from "../../../../demo/BadgeWrapper.svelte";

  let count = 0;
  function addCount() {
    count++;
  }
  function subtractCount() {
    count--;
  }

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
      name: "color",
      description: "set badge color",
      type: "string",
      default: '""',
      _id: "color"
    },
    {
      name: "count",
      description: "numer to show",
      type: "number",
      default: "",
      _id: "count"
    },
    {
      name: "dot",
      description: "whether to display dot instead of count",
      type: 'boolean | "success" | "processing" | "error" | "warning"',
      default: false,
      _id: "dot"
    },
    {
      name: "offset",
      description: "set offset of badge position",
      type: "number | [number, number]",
      default: "",
      _id: "offset"
    },
    {
      name: "overflow",
      description: "max count to show",
      type: "number",
      default: 99,
      _id: "showIcon"
    },
    {
      name: "showZero",
      description: "whether to show badge when count is 0",
      type: "boolean",
      default: false,
      _id: "showZero"
    },
    {
      name: "text",
      description: "if dot, sets text to right of dot",
      type: "string",
      default: '""',
      _id: "text"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Badge count={5}>
      <BadgeWrapper />
    </Badge>
    <Badge count={0} showZero>
      <BadgeWrapper style="margin-left: 20px;" />
    </Badge>
    <Badge count={0}>
      <BadgeWrapper style="margin-left: 20px;" />
    </Badge>
  </Box>

  <br />
  <br />

  <Title level={4}>Standalone</Title>

  <Box>
    <Badge count={25} style="margin-right: 16px;" />
    <Badge count={4} color="lime" showZero style="margin-right: 16px;" />
    <Badge count={109} color="#ffffff" style="margin-right: 16px;" />
  </Box>

  <br />
  <br />

  <Title level={4}>Overflow Count</Title>

  <Box>
    <Badge count={99}>
      <BadgeWrapper />
    </Badge>
    <Badge count={100} overflow={99}>
      <BadgeWrapper style="margin-left: 20px;" />
    </Badge>
    <Badge count={10} overflow={9}>
      <BadgeWrapper style="margin-left: 20px;" />
    </Badge>
    <Badge count={1000} overflow={999}>
      <BadgeWrapper style="margin-left: 20px;" />
    </Badge>
  </Box>

  <br />
  <br />

  <Title level={4}>Dynamic</Title>

  <Box>
    <Badge {count}>
      <BadgeWrapper />
    </Badge>
    <Badge dot={count}>
      <BadgeWrapper style="margin-left: 20px;" />
    </Badge>
    <Button style="margin-left: 20px;" type="primary" on:click={addCount}>
      Add Count
    </Button>
    <Button style="margin-left: 20px;" type="danger" on:click={subtractCount}>
      Subtract Count
    </Button>
    <br />
    <br />
    <div>Count = {count} / {count === 0 ? false : true}</div>
  </Box>

  <br />
  <br />

  <Title level={4}>Offset</Title>

  <Box>
    <Badge count={5} offset={20}>
      <BadgeWrapper />
    </Badge>
    <Badge count={5} offset={[20, 40]}>
      <BadgeWrapper style="margin-left: 20px;" />
    </Badge>
  </Box>

  <br />
  <br />

  <Title level={4}>Status</Title>

  <Box>
    <Badge dot="success" />
    <Badge dot="error" />
    <Badge dot />
    <Badge dot="processing" />
    <Badge dot="warning" />
    <br />
    <Badge dot="success" text="Success" />
    <br />
    <Badge dot="error" text="Error" />
    <br />
    <Badge dot text="Default" />
    <br />
    <Badge dot="processing" text="Processing" />
    <br />
    <Badge dot="warning" text="Warning" />
  </Box>

  <br />
  <br />

  <Title level={4}>Presets</Title>

  <Box>
    <Divider align="left">Color</Divider>
    <Badge dot color="pink" text="pink" />
    <br />
    <Badge dot color="red" text="red" />
    <br />
    <Badge dot color="yellow" text="yellow" />
    <br />
    <Badge dot color="orange" text="orange" />
    <br />
    <Badge dot color="cyan" text="cyan" />
    <br />
    <Badge dot color="green" text="green" />
    <br />
    <Badge dot color="blue" text="blue" />
    <br />
    <Badge dot color="purple" text="purple" />
    <br />
    <Badge dot color="geekblue" text="geekblue" />
    <br />
    <Badge dot color="magenta" text="magenta" />
    <br />
    <Badge dot color="volcano" text="volcano" />
    <br />
    <Badge dot color="gold" text="gold" />
    <br />
    <Badge dot color="lime" text="lime" />
    <Divider align="left">Custom</Divider>
    <Badge dot color="#f50" text="#f50" />
    <br />
    <Badge dot color="#2db7f5" text="#2db7f5" />
    <br />
    <Badge dot color="#87d068" text="#87d068" />
    <br />
    <Badge dot color="#108ee9" text="#108ee9" />
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
