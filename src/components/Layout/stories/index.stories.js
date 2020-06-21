import Layout from "./Layout.svelte";
import markdown from "./layout.md";

export default {
  title: "Components/Layout",
  parameters: {
    notes: { markdown },
  },
};

export const layout = () => ({
  Component: Layout,
});
