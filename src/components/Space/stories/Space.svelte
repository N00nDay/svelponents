<script>
  import Space from "../Space.svelte";
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
      name: "align",
      description: "align items",
      type: '"center" | "start" | "end" | "baseline"',
      default: "",
      _id: "align"
    },
    {
      name: "direction",
      description: "space direction",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      _id: "direction"
    },
    {
      name: "justify",
      description: "justify items",
      type: '"start" | "end" | "center" | "space-between" | "space-around"',
      default: "",
      _id: "justify"
    },
    {
      name: "size",
      description: "space size",
      type: '"small" | "medium" | "large" | number',
      default: '"small"',
      _id: "size"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Space>
      <Button type="primary">Button</Button>
      <Button>Button</Button>
      <Button type="danger">Button</Button>
    </Space>
  </Box>

  <br />
  <br />

  <Title level={4}>Vertical</Title>

  <Box>
    <Space direction="vertical">
      <Button type="primary">Button</Button>
      <Button>Button</Button>
      <Button type="danger">Button</Button>
    </Space>
  </Box>

  <br />
  <br />

  <Title level={4}>Space size</Title>

  <Box>
    <Space>
      <Button type="primary">Button</Button>
      <Button>Button</Button>
      <Button type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space size="middle">
      <Button type="primary">Button</Button>
      <Button>Button</Button>
      <Button type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space size="large">
      <Button type="primary">Button</Button>
      <Button>Button</Button>
      <Button type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space size={42}>
      <Button type="primary">Button</Button>
      <Button>Button</Button>
      <Button type="danger">Button</Button>
    </Space>
  </Box>

  <br />
  <br />

  <Title level={4}>Align</Title>

  <Box>
    <Space align="center" style="border: 1px solid;">
      <Button size="small" type="primary">center</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space align="start" style="border: 1px solid;">
      <Button size="small" type="primary">start</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space align="end" style="border: 1px solid;">
      <Button size="small" type="primary">end</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space align="baseline" style="border: 1px solid;">
      <Button size="small" type="primary">baseline</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
  </Box>

  <br />
  <br />

  <Title level={4}>Justify</Title>

  <Box>
    <Space justify="start" style="border: 1px solid;">
      <Button size="small" type="primary">start</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space justify="end" style="border: 1px solid;">
      <Button size="small" type="primary">end</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space justify="center" style="border: 1px solid;">
      <Button size="small" type="primary">center</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space justify="space-between" style="border: 1px solid;">
      <Button size="small" type="primary">space-between</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
    <br />
    <br />
    <Space justify="space-around" style="border: 1px solid;">
      <Button size="small" type="primary">space-around</Button>
      <Button>Button</Button>
      <Button size="large" type="danger">Button</Button>
    </Space>
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
