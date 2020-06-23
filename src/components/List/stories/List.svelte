<script>
  import List from "../";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";

  import currencyFormatter from "../../../utils/currencyFormatter";

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
    }
  ];

  let listItems1 = [
    {
      avatar: {
        alt: "dumb",
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      title: "I am a list title"
    },
    {
      avatar: {
        alt: "dumb",
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      description: "I am a list description"
    },
    {
      title: "I am a list title",
      description: "I am a list description"
    },
    {
      avatar: {
        alt: "dumb",
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      title: "I am a list title",
      description: "I am a list description"
    },
    {
      title: "I am a list title"
    },
    {
      description: "I am a list description"
    }
  ];

  let listItems2 = [
    {
      data1: "Line item 1",
      data2: 98083,
      _id: "123456789"
    },
    {
      data1: "Line item 2",
      data2: 76454,
      _id: "234567890"
    },
    {
      data1: "Line item 3",
      data2: 345,
      _id: "345678901"
    },
    {
      data1: "Line item 4",
      data2: 26942,
      _id: "456789012"
    },
    {
      data1: "Line item 5",
      data2: 245895,
      _id: "567890123"
    },
    {
      data1: "Line item 6",
      data2: 4563,
      _id: "678901234"
    },
    {
      data1: "Line item 7",
      data2: 3556,
      _id: "789012345"
    },
    {
      data1: "Line item 8",
      data2: 4657,
      _id: "890123456"
    }
  ];
</script>

<Container>

  <Title level={4}>Variations</Title>

  <Box>
    <List bordered>
      {#each listItems1 as item}
        <List.Item>
          <List.Meta
            title={item.title}
            description={item.description}
            avatar={item.avatar} />
        </List.Item>
      {/each}
    </List>
  </Box>

  <br />
  <br />

  <Title level={4}>Columns</Title>

  <Box>
    <List bordered>
      {#each listItems2 as item}
        <List.Item>
          <List.Meta>{item.data1}</List.Meta>
          <List.Meta align="right">{currencyFormatter(item.data2)}</List.Meta>
        </List.Item>
      {/each}
    </List>
  </Box>

  <br />
  <br />

  <Title level={4}>List API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
