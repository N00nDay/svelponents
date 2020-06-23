# List

## Variations

```html
<script>
  import { List } from "svelponents";

  let listItems1 = [
    {
      alt: "dumb",
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      title: "I am a list title"
    },
    {
      alt: "dumb",
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description: "I am a list description"
    },
    {
      title: "I am a list title",
      description: "I am a list description"
    },
    {
      alt: "dumb",
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
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
</script>

<List bordered>
    {#each listItems1 as item}
    <List.Item>
        <List.Meta
        title={item.title}
        description={item.description}
        src={item.src}
        alt={item.alt} />

    </List.Item>
    {/each}
</List>
```

## Columns

```html
<script>
  import { List } from "svelponents";
  import currencyFormatter from "../utils/currencyFormatter";

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

<List bordered>
    {#each listItems2 as item}
    <List.Item>
        <List.Meta>{item.data1}</List.Meta>
        <List.Meta align="right">{currencyFormatter(item.data2)}</List.Meta>
    </List.Item>
    {/each}
</List>
```