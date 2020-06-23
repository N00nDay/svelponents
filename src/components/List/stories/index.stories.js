import List from "./List.svelte";
import markdown from "./list.md";

export default {
  title: "Components/List",
  parameters: {
    notes: { markdown },
  },
};

export const list = () => ({
  Component: List,
});
