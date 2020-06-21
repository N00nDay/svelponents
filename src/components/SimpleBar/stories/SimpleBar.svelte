<script>
  import SimpleBar from "../SimpleBar.svelte";
  import Title from "../../Typography/Title.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";
  import LoremIpsum from "../../../../demo/LoremIpsum.svelte";

  let simpleBar,
    init = false;
  const initBar = bar => (simpleBar = bar);
</script>

<Container>

  <Title level={4}>Basic</Title>

  <Box>
    <div style="height:300px;border: 1px solid #f5f5f5;">
      <SimpleBar init={initBar}>
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
        <br />
        <LoremIpsum />
      </SimpleBar>
    </div>
  </Box>
</Container>
