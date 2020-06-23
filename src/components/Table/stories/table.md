# Table

## Variations

```html
<script>
  import { Table } from "svelponents";
</script>

<List bordered>
  {#each listItems1 as item}
  <List.Item>
    <List.Meta
      title="{item.title}"
      description="{item.description}"
      src="{item.src}"
      alt="{item.alt}"
    />
  </List.Item>
  {/each}
</List>
```

## Kitchen Sink

```html
<script>
  import { Table } from "svelponents";
</script>

<Table
    bordered
    {headers}
    onSelect={key => console.log('key', key)}
    defaultSortKey={headers[0].key}>
    <Table.Header compact style="background-color: #f5f5f5;">
    <Table.Title>Table Title</Table.Title>
    <Table.Extras>
        <Button type="primary">Button</Button>
        <Button>Button</Button>
    </Table.Extras>
    </Table.Header>
    <Table.Filter {filters} {onClose} />
    <Table.Columns
    handleSort={(order, key) => handleSort(`${order}${key}`)} />
    <Table.Content style="background: #f5f5f5;" let:contentHeight>
    <VirtualList
        items={listItems}
        let:item
        {contentHeight}>
        <Table.Row key={item._id} {item} />
    </VirtualList>
    </Table.Content>
</Table>
```