import VirtualList from "./VirtualList.svelte";
import markdown from "./virtualList.md";

export default {
  title: "Components/VirtualList",
  parameters: {
    notes: { markdown },
  },
};

export const virtualList = () => ({
  Component: VirtualList,
});
