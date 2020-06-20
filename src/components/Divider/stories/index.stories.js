import Divider from "./Divider.svelte";
import markdown from "./divider.md";

export default {
  title: "Components/Divider",
  parameters: {
    notes: { markdown },
  },
};

export const divider = () => ({
  Component: Divider,
});
