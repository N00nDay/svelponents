<script>
  import Button from "../Button.svelte";
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
      name: "block",
      description: "fit button width to is parent",
      type: "boolean",
      default: "false",
      _id: "block"
    },
    {
      name: "disabled",
      description: "set disabled sate",
      type: "boolean",
      default: "false",
      _id: "disabled"
    },
    {
      name: "ghost",
      description: "background transparent and invert text and border colors",
      type: "boolean",
      default: "false",
      _id: "ghost"
    },
    {
      name: "href",
      description: "redirect url for link button",
      type: "string",
      default: '""',
      _id: "href"
    },
    {
      name: "htmlType",
      description: "set original html type",
      type: "string",
      default: "button",
      _id: "block"
    },
    {
      name: "icon",
      description: "add icon",
      type: "string",
      default: '""',
      _id: "icon"
    },
    {
      name: "loading",
      description: "set loading state",
      type: "boolean",
      default: "false",
      _id: "loading"
    },
    {
      name: "on:click",
      description: "set click handler",
      type: "(event) => void",
      default: "",
      _id: "click"
    },
    {
      name: "shape",
      description: "set shape",
      type: '"square" | "rounded" | "circle"',
      default: '"square"',
      _id: "shape"
    },
    {
      name: "size",
      description: "set size",
      type: '"small" | "medium" | "large" | number',
      default: '"medium"',
      _id: "size"
    },
    {
      name: "target",
      description: "same as target for <a /> when href set",
      type: "string",
      default: '""',
      _id: "block"
    },
    {
      name: "type",
      description: "set type",
      type: '"default" | "primary" | "dashed" | "danger" | "link" | "text"',
      default: '"default"',
      _id: "type"
    }
  ];
</script>

<Container>

  <Title level={4}>Type</Title>

  <Box>
    <Button on:click style="margin-right: 8px;">Default Button</Button>
    <Button on:click style="margin-right: 8px;" type="primary">
      Primary Button
    </Button>
    <Button on:click style="margin-right: 8px;" type="dashed">
      Dashed Button
    </Button>
    <Button on:click style="margin-right: 8px;" type="danger">
      Danger Button
    </Button>
    <Button on:click style="margin-right: 8px;" type="link">Link Button</Button>
    <Button on:click style="margin-right: 8px;" type="text">Text Button</Button>
  </Box>

  <br />
  <br />

  <Title level={4}>Icon</Title>

  <Box>
    <Button
      type="primary"
      icon="search"
      tip={{ content: 'Search' }}
      shape="circle" />
    <Button type="primary" icon="search">Search</Button>
    <Button icon="search" tip={{ content: 'Search' }} shape="circle" />
    <Button icon="search">Search</Button>
    <Button
      type="dashed"
      icon="search"
      shape="circle"
      tip={{ content: 'Search' }} />
    <Button type="dashed" icon="search">Search</Button>
    <Button
      type="text"
      icon="search"
      shape="circle"
      tip={{ content: 'Search' }} />
    <Button type="text" icon="search">Search</Button>
    <Button
      type="link"
      icon="search"
      shape="circle"
      tip={{ content: 'Search' }} />
    <Button type="link" icon="search">Search</Button>
    <Button
      type="danger"
      icon="search"
      shape="circle"
      tip={{ content: 'Search' }} />
    <Button type="danger" icon="search">Search</Button>
  </Box>

  <br />
  <br />

  <Title level={4}>Size</Title>

  <Box>
    <Button type="primary" size="large">Primary Large</Button>
    <Button size="large">Default Large</Button>
    <Button type="dashed" size="large">Dashed Large</Button>
    <Button type="text" size="large">Text Large</Button>
    <Button type="link" size="large">Link Large</Button>
    <Button type="danger" size="large">Danger Large</Button>
    <br />
    <br />
    <Button type="primary">Primary Default</Button>
    <Button>Default Default</Button>
    <Button type="dashed">Dashed Default</Button>
    <Button type="text">Text Default</Button>
    <Button type="link">Link Default</Button>
    <Button type="danger">Danger Default</Button>
    <br />
    <br />
    <Button type="primary" size="small">Primary Small</Button>
    <Button size="small">Default Small</Button>
    <Button type="dashed" size="small">Dashed Small</Button>
    <Button type="text" size="small">Text Small</Button>
    <Button type="link" size="small">Link Small</Button>
    <Button type="danger" size="small">Danger Small</Button>
  </Box>

  <br />
  <br />

  <Title level={4}>Loading</Title>

  <Box>
    <Button type="primary" icon="search" shape="circle" loading />
    <Button type="primary" icon="search" loading>Search</Button>
    <Button icon="search" shape="circle" loading />
    <Button icon="search" loading>Search</Button>
    <Button type="dashed" icon="search" shape="circle" loading />
    <Button type="dashed" icon="search" loading>Search</Button>
    <Button type="text" icon="search" shape="circle" loading />
    <Button type="text" icon="search" loading>Search</Button>
    <Button type="link" icon="search" shape="circle" loading />
    <Button type="link" icon="search" loading>Search</Button>
    <Button type="danger" icon="search" shape="circle" loading />
    <Button type="danger" icon="search" loading>Search</Button>
  </Box>

  <br />
  <br />

  <Title level={4}>Disabled</Title>

  <Box>
    <Button type="primary" icon="search" shape="circle" disabled />
    <Button type="primary" icon="search" disabled>Search</Button>
    <Button icon="search" shape="circle" disabled />
    <Button icon="search" disabled>Search</Button>
    <Button type="dashed" icon="search" shape="circle" disabled />
    <Button type="dashed" icon="search" disabled>Search</Button>
    <Button type="text" icon="search" shape="circle" disabled />
    <Button type="text" icon="search" disabled>Search</Button>
    <Button type="link" icon="search" shape="circle" disabled />
    <Button type="link" icon="search" disabled>Search</Button>
    <Button type="danger" icon="search" shape="circle" disabled />
    <Button type="danger" icon="search" disabled>Search</Button>
  </Box>

  <br />
  <br />

  <Title level={4}>Ghost</Title>

  <Box>
    <Button type="primary" icon="search" shape="circle" ghost />
    <Button type="primary" icon="search" ghost>Search</Button>
    <Button icon="search" shape="circle" ghost />
    <Button icon="search" ghost>Search</Button>
    <Button type="dashed" icon="search" shape="circle" ghost />
    <Button type="dashed" icon="search" ghost>Search</Button>
    <Button type="text" icon="search" shape="circle" ghost />
    <Button type="text" icon="search" ghost>Search</Button>
    <Button type="link" icon="search" shape="circle" ghost />
    <Button type="link" icon="search" ghost>Search</Button>
    <Button type="danger" icon="search" shape="circle" ghost />
    <Button type="danger" icon="search" ghost>Search</Button>
  </Box>

  <br />
  <br />

  <Title level={4}>Block</Title>

  <Box>
    <Button type="primary" block>Primary Button</Button>
    <Button block>Default Button</Button>
    <Button type="text" block>Text Button</Button>
    <Button type="link" block>Link Button</Button>
    <Button type="danger" block>Danger Button</Button>
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
