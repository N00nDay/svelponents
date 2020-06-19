# Card
## Basic

```html
<script>
  import { Card } from "svelponents";
</script>

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
```

## Cover with Content

```html
<script>
  import { Card } from "svelponents";
</script>

<Card hoverable>
    <Card.Cover
    src="https://images.unsplash.com/photo-1590998626514-36362cd48769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80"
    alt="cover-image" />
    <Card.Body title="Body Title" description="Body Description" />
</Card>
```

## Cover with Content & Actions

```html
<script>
  import { Card } from "svelponents";
</script>

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
```