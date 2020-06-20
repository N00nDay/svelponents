import Drawer from "./Drawer.svelte";
import markdown from "./drawer.md";

export default {
  title: "Components/Drawer",
  parameters: {
    notes: { markdown },
  },
};

export const drawer = () => ({
  Component: Drawer,
});
