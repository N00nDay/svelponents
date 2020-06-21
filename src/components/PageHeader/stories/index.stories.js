import PageHeader from "./PageHeader.svelte";
import markdown from "./pageHeader.md";

export default {
  title: "Components/PageHeader",
  parameters: {
    notes: { markdown },
  },
};

export const pageHeader = () => ({
  Component: PageHeader,
});
