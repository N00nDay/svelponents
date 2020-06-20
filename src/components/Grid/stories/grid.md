# Grid
## Basic Grid

```html
<script>
  import { Row, Col } from "svelponents";
</script>

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
```

## Gutter

```html
<script>
  import { Row, Col } from "svelponents";
</script>

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
```

## Column Offset

```html
<script>
  import { Row, Col } from "svelponents";
</script>

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
```

## Grid Sort

```html
<script>
  import { Row, Col } from "svelponents";
</script>

<Row>
    <Col span={18} push={6}>
    <Grid>col-18 push-6</Grid>
    </Col>
    <Col span={6} pull={18}>
    <Grid dark>col-6 pull-18</Grid>
    </Col>
</Row>
```

## Justify

```html
<script>
  import { Row, Col } from "svelponents";
</script>

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
```

## Alignment

```html
<script>
  import { Row, Col } from "svelponents";
</script>

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
```