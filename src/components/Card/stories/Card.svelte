<script>
  import Card from "../";
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
      name: "bordered",
      description: "whether card has a border",
      type: "boolean",
      default: false,
      _id: "bordered"
    },
    {
      name: "elevation",
      description: "set card shadow",
      type: "number",
      default: "",
      _id: "elevation"
    },
    {
      name: "handleClick",
      description: "set click behavior",
      type: "(e) => void",
      default: "",
      _id: "handleClick"
    },
    {
      name: "hoverable",
      description: "whether card will show shadow on hover",
      type: "boolean",
      default: false,
      _id: "hoverable"
    },
    {
      name: "loading",
      description: "set loading state",
      type: "boolean",
      default: false,
      _id: "loading"
    },
    {
      name: "small",
      description: "whether to use compact padding",
      type: "boolean",
      default: false,
      _id: "small"
    }
  ];

  let headerProps = [
    {
      name: "title",
      description: "set title for header",
      type: "string",
      default: '""',
      _id: "title"
    }
  ];

  let coverProps = [
    {
      name: "alt",
      description: "set alt langauge if img fails",
      type: "string",
      default: '""',
      _id: "alt"
    },
    {
      name: "src",
      description: "set source of img",
      type: "string",
      default: '""',
      _id: "src"
    }
  ];

  let bodyProps = [
    {
      name: "title",
      description: "set title",
      type: "string",
      default: '""',
      _id: "title"
    },
    {
      name: "description",
      description: "set description",
      type: "string",
      default: '""',
      _id: "description"
    }
  ];

  let actionProps = [
    {
      name: "icon",
      description: "set title",
      type: "string",
      default: '""',
      _id: "icon"
    },
    {
      name: "description",
      description: "set description",
      type: "string",
      default: '""',
      _id: "description"
    }
  ];
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <Card>
      <Card.Header title="Default Card Size">
        <Card.Header.Extras>
          <Button type="link">Extra</Button>
        </Card.Header.Extras>
      </Card.Header>
      <Card.Body>
        <p>Card Content</p>
        <p>Card Content</p>
        <p>Card Content</p>
      </Card.Body>
    </Card>
    <div>&nbsp;</div>
    <Card small>
      <Card.Header title="Small Card Size">
        <Card.Header.Extras>
          <Button type="link">Extra</Button>
        </Card.Header.Extras>
      </Card.Header>
      <Card.Body>
        <p>Card Content</p>
        <p>Card Content</p>
        <p>Card Content</p>
      </Card.Body>
    </Card>
  </Box>

  <br />
  <br />

  <Title level={4}>Cover with Content</Title>

  <Box>
    <Card hoverable>
      <Card.Cover
        src="https://images.unsplash.com/photo-1590998626514-36362cd48769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80"
        alt="cover-image" />
      <Card.Body title="Body Title" description="Body Description" />
    </Card>
  </Box>

  <br />
  <br />

  <Title level={4}>Cover with Content & Actions</Title>

  <Box>
    <Card hoverable>
      <Card.Cover
        src="https://images.unsplash.com/photo-1590998626514-36362cd48769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80"
        alt="cover-image" />
      <Card.Body title="Body Title" description="Body Description" />
      <Card.Actions>
        <Card.Action icon="add" text="Add" />
        <Card.Action icon="remove" text="Remove" />
        <Card.Action icon="dumpTruck" text="Dumping" />
      </Card.Actions>
    </Card>
  </Box>

  <br />
  <br />

  <Title level={4}>Card API</Title>
  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Card.Header API</Title>
  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each headerProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Card.Cover API</Title>
  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each coverProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Card.Body API</Title>
  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each bodyProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Card.Action API</Title>
  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each actionProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>
</Container>
