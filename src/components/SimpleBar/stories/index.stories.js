import SimpleBar from "./SimpleBar.svelte";
import markdown from "./simpleBar.md";

export default {
  title: "Components/SimpleBar",
  parameters: {
    notes: { markdown },
  },
};

export const simpleBar = () => ({
  Component: SimpleBar,
});
