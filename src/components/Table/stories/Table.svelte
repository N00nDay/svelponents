<script>
  import Table from "../";
  //   import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";

  import Button from "../../Button/Button.svelte";
  import VirtualList from "../../VirtualList/VirtualList.svelte";
  import sortArrOfObjs from "../../../utils/sortArrOfObjs";

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

  let tableProps = [
    {
      name: "bordered",
      description: "whether table has border",
      type: "boolean",
      default: false,
      _id: "bordered"
    },
    {
      name: "defaultSelectedKey",
      description: "set starting selected row",
      type: "string",
      default: "",
      _id: "defaultSelectedKey"
    },
    {
      name: "defaultSort",
      description: "set starting sort direction",
      type: '"asc" | "desc"',
      default: '"asc"',
      _id: "defaultSort"
    },
    {
      name: "defaultSortKey",
      description: "set starting column to sort",
      type: "string",
      default: '""',
      _id: "defaultSortKey"
    },
    {
      name: "headers",
      description: "set headers",
      type: "array of objects",
      default: "",
      _id: "headers"
    },
    {
      name: "hoverable",
      description: "change row color on hover",
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
      name: "size",
      description: "change size of table",
      type: '"small" | "large"',
      default: '""',
      _id: "size"
    }
  ];

  let headerProps = [
    {
      name: "avatar",
      description: "set Avatar for header",
      type: "object",
      default: "",
      _id: "avatar"
    },
    {
      name: "backIcon",
      description: "set back icon for header",
      type: "string",
      default: '"arrowLeft"',
      _id: "backIcon"
    },
    {
      name: "compact",
      description: "whether to compact the padding of header",
      type: "boolean",
      default: false,
      _id: "compact"
    },
    {
      name: "ghost",
      description: "make header background transparent",
      type: "boolean",
      default: false,
      _id: "ghost"
    },
    {
      name: "onBack",
      description: "show back button and set callback when clicked",
      type: "(e) => void",
      default: "",
      _id: "onBack"
    }
  ];

  let filterProps = [
    {
      name: "filters",
      description: "what filters to show",
      type: "array",
      default: "[]",
      _id: "filters"
    },
    {
      name: "onClose",
      description: "set callback when filter closed",
      type: "(e) => void",
      default: "",
      _id: "onClose"
    }
  ];

  let columnsProps = [
    {
      name: "handleSort",
      description: "set callback when a sortable column is clicked",
      type: "(e) => void",
      default: "",
      _id: "handleSort"
    }
  ];

  let rowProps = [
    {
      name: "item",
      description: "object to create row cells",
      type: "object",
      default: "",
      _id: "item"
    },
    {
      name: "key",
      description: "set key for row",
      type: "string",
      default: "",
      _id: "key"
    }
  ];

  let cellProps = [
    {
      name: "align",
      description: "alignment of cell content",
      type: '"left" | "center" | "right"',
      default: '"left"',
      _id: "align"
    },
    {
      name: "content",
      description: "set content of cell",
      type: "string | number | array",
      default: "",
      _id: "content"
    },
    {
      name: "type",
      description: "set content type of cell",
      type: '"string" | "currency" | "number" | "percent" | "date"',
      default: '"string"',
      _id: "type"
    },
    {
      name: "width",
      description: "set column percentage width",
      type: "number",
      default: "",
      _id: "width"
    }
  ];

  let tableHeaders = [
    {
      key: "data1",
      name: "col-1",
      sortable: true,
      width: 10,
      type: "string"
    },
    {
      key: "data2",
      name: "col-2",
      width: 20,
      sortable: true,
      type: "number"
    },
    {
      key: "data3",
      name: "col-3",
      sortable: true,
      width: 30,
      type: "percent"
    },
    {
      key: "data4",
      name: "col-4",
      sortable: true,
      width: 10,
      type: "currency"
    },
    {
      key: "data5",
      name: "col-5",
      width: 10,
      type: "badge"
    },
    {
      key: "data6",
      name: "col-6",
      sortable: true,
      width: 20,
      type: "date"
    }
  ];

  let tableItems = [
    {
      data1: "asdfgkjhgkytituyi",
      data2: 98083,
      data3: 408,
      data4: 9808,
      data5: ["RS", "RF"],
      data6: new Date(),
      _id: "123456789"
    },
    {
      data1: "easdff",
      data2: 76454,
      data3: 20,
      data4: 34567,
      data5: ["G"],
      data6: new Date(),
      _id: "234567890"
    },
    {
      data1: "d",
      data2: 345,
      data3: 8345,
      data4: 2039482,
      data5: ["GR"],
      data6: new Date(),
      _id: "345678901"
    },
    {
      data1: "w",
      data2: 26942,
      data3: 62345,
      data4: 272029,
      data5: ["RS", "G"],
      data6: new Date(),
      _id: "456789012"
    },
    {
      data1: "l",
      data2: 245895,
      data3: 33578,
      data4: 23675,
      data5: ["O"],
      data6: new Date(),
      _id: "567890123"
    },
    {
      data1: "h",
      data2: 4563,
      data3: 93546,
      data4: 3456456,
      data5: ["RS"],
      data6: new Date(),
      _id: "678901234"
    },
    {
      data1: "q",
      data2: 3556,
      data3: 7345,
      data4: 865,
      data5: ["RF"],
      data6: new Date(),
      _id: "789012345"
    },
    {
      data1: "a",
      data2: 4657,
      data3: 33456,
      data4: 6356,
      data5: ["W"],
      data6: new Date(),
      _id: "890123456"
    }
  ];

  let filters = [
    {
      _id: "12345",
      name: "Project Status: Sold"
    },
    {
      _id: "23456",
      name: "Search: 1234"
    }
  ];

  function handleSort(col) {
    tableItems = tableItems.sort(sortArrOfObjs(col));
  }

  function onClose(_id) {
    filters = filters.filter(f => f._id !== _id);
  }
</script>

<Container>

  <Title level={4}>Variations</Title>

  <Box>
    <Table
      bordered
      headers={tableHeaders}
      onSelect={key => console.log('key', key)}
      defaultSortKey={tableHeaders[0].key}>
      <Table.Columns
        handleSort={(order, key) => handleSort(`${order}${key}`)} />
      <Table.Content style="background: #f5f5f5;" let:contentHeight>
        <VirtualList items={tableItems} let:item {contentHeight}>
          <Table.Row key={item._id} {item} />
        </VirtualList>
      </Table.Content>
    </Table>
  </Box>

  <br />
  <br />

  <Title level={4}>Kitchen Sink</Title>

  <Box>
    <Table
      bordered
      {headers}
      onSelect={key => console.log('key', key)}
      defaultSortKey={headers[0].key}>
      <Table.Header compact style="background-color: #f5f5f5;">
        <Table.Title>Table Title</Table.Title>
        <Table.Extras>
          <Button type="text" icon="add" shape="circle" />
          <Button type="text" icon="filter" shape="circle" />
        </Table.Extras>
      </Table.Header>
      <Table.Filter {filters} {onClose} />
      <Table.Columns
        handleSort={(order, key) => handleSort(`${order}${key}`)} />
      <Table.Content style="background: #f5f5f5;" let:contentHeight>
        <VirtualList items={tableItems} let:item {contentHeight}>
          <Table.Row key={item._id} {item} />
        </VirtualList>
      </Table.Content>
    </Table>
  </Box>

  <br />
  <br />

  <Title level={4}>Table API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each tableProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Table.Header API</Title>

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

  <Title level={4}>Table.Filter API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each filterProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Table.Columns API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each columnsProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

  <br />
  <br />

  <Title level={4}>Table.Row API</Title>

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

  <Title level={4}>Table.Cell API</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each cellProps as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>

</Container>
