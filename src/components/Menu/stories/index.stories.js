import Menu from "./Menu.svelte";
import markdown from "./menu.md";

export default {
  title: "Components/Menu",
  parameters: {
    notes: { markdown },
  },
};

export const menu = () => ({
  Component: Menu,
});
