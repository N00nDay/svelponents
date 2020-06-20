<script>
  import Row from "../Row.svelte";
  import Col from "../Col.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";
  import Grid from "../../../../demo/Grid.svelte";

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

  let rowProps = [
    {
      name: "align",
      description: "vertical alignment>",
      type: '"top" | "middle" | "bottom"',
      default: '"top"',
      _id: "align"
    },
    {
      name: "gutter",
      description: "spacing between grids",
      type: "number",
      default: 0,
      _id: "gutter"
    },
    {
      name: "justify",
      description: "horizontal alignment",
      type: '"start" | "end" | "center" | "space-between" | "space-around"',
      default: '"start"',
      _id: "justify"
    }
  ];

  let colProps = [
    {
      name: "xs",
      description: "<576px>",
      type: "number",
      default: "",
      _id: "xs"
    },
    {
      name: "sm",
      description: ">=576px",
      type: "number",
      default: "",
      _id: "sm"
    },
    {
      name: "md",
      description: ">=768px",
      type: "number",
      default: "",
      _id: "md"
    },
    {
      name: "lg",
      description: ">=992",
      type: "number",
      default: "",
      _id: "lg"
    },
    {
      name: "xl",
      description: ">=1200px",
      type: "number",
      default: "",
      _id: "xl"
    },
    {
      name: "xxl",
      description: ">=1600px",
      type: "number",
      default: "",
      _id: "xxl"
    },
    {
      name: "flex",
      description: "flex layout style",
      type: '"string" | number',
      default: "",
      _id: "flex"
    },
    {
      name: "offset",
      description: "columns to offset",
      type: "number",
      default: "",
      _id: "offset"
    },
    {
      name: "order",
      description: "set raster order",
      type: "number",
      default: "",
      _id: "order"
    },
    {
      name: "pull",
      description: "move columns to left",
      type: "number",
      default: "",
      _id: "pull"
    },
    {
      name: "push",
      description: "move columns to right",
      type: "number",
      default: "",
      _id: "push"
    },
    {
      name: "span",
      description: "columns to occupy",
      type: "number",
      default: "",
      _id: "span"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Row>
      <Col span={24}>
        <Grid>col-24</Grid>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <Grid>col-12</Grid>
      </Col>
      <Col span={12}>
        <Grid dark>col-12</Grid>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Grid>col-8</Grid>
      </Col>
      <Col span={8}>
        <Grid dark>col-8</Grid>
      </Col>
      <Col span={8}>
        <Grid>col-8</Grid>
      </Col>
    </Row>
    <Row>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
    </Row>
  </Box>

  <br />
  <br />

  <Title level={4}>Gutter</Title>

  <Box>
    <Row gutter={8}>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
    </Row>
    <Row gutter={24}>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
    </Row>
    <Row gutter={32}>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid>col-6</Grid>
      </Col>
      <Col span={6}>
        <Grid dark>col-6</Grid>
      </Col>
    </Row>
  </Box>

  <br />
  <br />

  <Title level={4}>Column Offset</Title>

  <Box>
    <Row>
      <Col span={8}>
        <Grid>col-8</Grid>
      </Col>
      <Col span={8} offset={8}>
        <Grid dark>col-8 offset-8</Grid>
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        <Grid>col-6 offset-6</Grid>
      </Col>
      <Col span={6} offset={6}>
        <Grid dark>col-6 offset-6</Grid>
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        <Grid>col-12 offset-6</Grid>
      </Col>
    </Row>
  </Box>

  <br />
  <br />

  <Title level={4}>Grid Sort</Title>

  <Box>
    <Row>
      <Col span={18} push={6}>
        <Grid>col-18 push-6</Grid>
      </Col>
      <Col span={6} pull={18}>
        <Grid dark>col-6 pull-18</Grid>
      </Col>
    </Row>
  </Box>

  <br />
  <br />

  <Title level={4}>Justify</Title>

  <Box>
    <Divider align="left">Justify Left</Divider>
    <Row justify="start" style="background: #eee;">
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>

    <Divider align="left">Justify Center</Divider>
    <Row justify="center" style="background: #eee;">
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>

    <Divider align="left">Justify Right</Divider>
    <Row justify="end" style="background: #eee;">
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>

    <Divider align="left">Justify Space-Between</Divider>
    <Row justify="space-between" style="background: #eee;">
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>

    <Divider align="left">Justify Space-Around</Divider>
    <Row justify="space-around" style="background: #eee;">
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>
  </Box>

  <br />
  <br />

  <Title level={4}>Alignment</Title>

  <Box>
    <Divider align="left">Align Top</Divider>
    <Row justify="center" align="top" style="background: #eee;">
      <Col span={4}>
        <Grid style="height: 80px;">col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid style="height: 120px;">col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>

    <Divider align="left">Align Middle</Divider>
    <Row justify="space-around" align="middle" style="background: #eee;">
      <Col span={4}>
        <Grid style="height: 80px;">col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid style="height: 120px;">col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>

    <Divider align="left">Align Bottom</Divider>
    <Row justify="space-between" align="bottom" style="background: #eee;">
      <Col span={4}>
        <Grid style="height: 80px;">col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid style="height: 120px;">col-4</Grid>
      </Col>
      <Col span={4}>
        <Grid dark>col-4</Grid>
      </Col>
    </Row>
  </Box>

  <br />
  <br />

  <Title level={4}>Row API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each rowProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Col API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each colProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
