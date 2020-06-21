# PageHeader
## Basic

```html
<script>
  import { PageHeader } from "svelponents";
</script>

<div class="pageHeader">
    <PageHeader onBack={() => console.log('back clicked!')}>
    <PageHeader.Title>Title</PageHeader.Title>
    <PageHeader.SubTitle>This is a subtitle</PageHeader.SubTitle>
    </PageHeader>
</div>
```

## With extras

```html
<script>
  import { PageHeader } from "svelponents";
</script>

<div class="pageHeader">
    <PageHeader onBack={() => console.log('back clicked!')}>
    <PageHeader.Title>Title</PageHeader.Title>
    <PageHeader.SubTitle>This is a subtitle</PageHeader.SubTitle>
    <PageHeader.Extras>
        <Button>Button</Button>
        <Button>Button</Button>
    </PageHeader.Extras>
    </PageHeader>
</div>
```

## With avatar

```html
<script>
  import { PageHeader } from "svelponents";
</script>

<div class="pageHeader">
    <PageHeader
    onBack={() => console.log('back clicked!')}
    avatar={{ icon: 'account' }}>
    <PageHeader.Title>Title</PageHeader.Title>
    <PageHeader.SubTitle>This is a subtitle</PageHeader.SubTitle>
    <PageHeader.Extras>
        <Button>Button</Button>
        <Button>Button</Button>
    </PageHeader.Extras>
    </PageHeader>
</div>
```